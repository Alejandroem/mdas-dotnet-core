FROM microsoft/dotnet:sdk
WORKDIR /app

COPY *.csproj /app

COPY . /app
RUN dotnet build -o ./deploy/votingapp || return 1

ENTRYPOINT ["dotnet", "bin/Debug/netcoreapp2.2/VotingApp.dll"]