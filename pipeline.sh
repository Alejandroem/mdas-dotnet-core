votingappPath='./src/votingapp-dotnet'

build(){
  pushd $votingappPath
  rm -rf ./deploy
  dotnet build -o ./deploy/votingapp || return 1
  popd
}

run(){
  app='dotnet'
  pushd $votingappPath
  pid=$(ps | grep $app | awk '{ print $1 }' | head -1)
  kill -9 $pid || true
  dotnet bin/Debug/netcoreapp2.2/VotingApp.dll &
  popd
  sleep 3
}

test(){
  http_client(){
    curl --url 'http://localhost:5000/api/voting' \
      --request $1 \
      --data "$2" \
      --header 'Content-Type: application/json'
  }

  topics='["bash","python","go"]'
  expectedWinner='bash'
  echo "Given voting topics $topics, When vote for $options, Then winner is $expectedWinner"

  http_client POST $topics
  echo "Voting started"

  http_client PUT '"bash"'
  http_client PUT '"bash"'
  http_client PUT '"bash"'
  http_client PUT '"python"'

  echo "Voting done"
  
  winner=$(http_client DELETE | jq -r '.winner')
  echo "Voting finished"

  echo $expectedWinner
  echo $winner
  if [ "$expectedWinner" = "$winner" ]; then
    return 0
  else 
    return 1
  fi
}

if (build && run && test) > log 2> error; then
  echo "Pipeline WORKING!"
else
  echo "Pipeline FAILED!"
  exit 1
fi