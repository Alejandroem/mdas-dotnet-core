import requests
import os

api = os.getenv('VOTING_URL', "http://localhost:8080/vote")


def start_voting(options):
    r = requests.post(api, json={'topics': options})
    return r.json()


def vote(option):
    r = requests.put(api, json={'topic': option})
    return r.json()


def finish_voting():
    r = requests.delete(api)
    return r.json()


voting_options = ['bash', 'node', 'python']
voted_options = ['python', 'go', 'bash', 'bash']
expected_winner = 'bash'

print('Given {0} voting options, When voted for {1}, Then winner is {2}'.format(
    voting_options, voted_options, expected_winner))

start_voting(voting_options)

for option in voted_options:
    vote(option)

result = finish_voting()

if (result['winner'] == expected_winner):
    print('TEST PASSED!')
    exit(0)
else:
    print('TEST FAILED!')
    exit(1)
