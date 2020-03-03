#Kenneth Chin, Jackie Lin
#SoftDev1 pd1
#K10 -- Import/Export Bank
#2020-03-04

import json
from pymongo import MongoClient

client = MongoClient()
db = client.croissants
events = db.events
if (events.count() == 0):
    with open('dataset.json') as file:
        data = file.read() #convert file to str
        data = data[30:-3] #clean up file
        data = data.split("\"event\": ") #list of events
        data.pop(0) #empty entry
        for item in data:
            if item[-1] == ' ':
                item = item[0:-2] #formatting JSON object
            item = json.loads(item) #load object
            events.insert_one(item) #insert into database

#for item in events.find({}):
 #    print(item["date"])

def display_categories():
    category_one = set()
    for item in events.find({}, {'_id': 0, 'category1': 1}):
        item = dict(item)
        if item:
            value = item.get('category1').lower()
            if "by" in value:
                category_one.add(value)
    print(category_one)



#def display_locations():
#    places = set()
#    for item in events.find($or: [{'category1': 'by place'}, {'category1': 'by places'}, {'category1': 'by area'}, {'category1': 'by region'}, {'category1': 'by location'}], {'_id': 0, 'category2': 1}):
#        item = dict(item)
#        if item:
#            value = item.get('category2').lower()
#            if "by" in value:
#                places.add(value)
#    print(places)

#display_locations()

def get_by_place(location):
    results = events.find({"category2" : location})
    print ("Place: {}".format(location))
    print()
    for x in results: 
       print("Place:"  + x["category2"] + "\nEvent:" + x["description"])

get_by_place("Egypt")	

def get_by_year(year):
    results = events.find({ "date": {'$regex' : str(year)} })
    print("Date: {}".format(year))
    print("Results Found: {}".format(results.count()))
    print()
    for x in results:
      print("Date:" + x["date"] + "\nEvent:" + x["description"])
#get_by_year(2000)

def get_by_topic():
    print("HELLO WORLD")

def get_by_keyword():
    print("HELLO WORLD")

def input_timeline():
    print("HELLO WORLD")
