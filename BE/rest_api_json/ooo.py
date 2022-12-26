import json

with open('data.json', 'r', encoding="utf-8") as kkk:
    data = json.load(kkk)


print(data)