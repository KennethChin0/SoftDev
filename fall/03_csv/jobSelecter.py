#!/usr/bin/python

import csv
import random
def readFile(fileName):
    fOpen = open(fileName, 'r')
    fInside = fOpen.read()
    lines =fInside.split('\n')
    thisDict = dict()
    for aline in lines[1: len(lines) - 1]:
        isTrue = True 
        start = len(aline) - 1
        while(isTrue):
            if (aline[start] == '.' or aline[start].isdigit()):
                start = start - 1
            else:
                isTrue = False
        job = aline[:start]
        percent = aline[start + 1:]
        thisDict[job] = percent
    return thisDict
  
  


def choseJob(fileName):
    data = readFile(fileName)
    counter = random.randint(0,100) * float(data['Total']) / 100
    for x in data:
        counter -= float(data[x])
        if counter <= 0:
            return "Your job is : " + x  
       
            
print (choseJob('occupations.csv'))

