from flask import Flask, render_template
import random
app = Flask(__name__) #create instance of class FLASK
#ADDD HEADING
@app.route("/") #assign following fxn to run when rotting route requested
def hello_world():
    print ("HI")#runs in terminal when page is reloaded
    print(__name__)#prints __main__
    file = open("index.html" , "r")
    return file.read()

# @app.route("/my_foist_template")
# def test_tmplt():
#     coll = {0,1,1,2,3,5,8}
#     return render_template(
#     'foo.html',
#     collection = coll
#     )

def MakeArray(fileName):
  array = []
  file = open(fileName,'r')
  file.readline()
  for line in file:
      if '"' in line:
          array.append(line.split('"')[1:])
      else:
          array.append(line.split(','))
  array = array[:-1]
  for line in array:
      line[1] = line[1][:-1]
      if ',' in line[1]:
          line[1] = line[1][1:]
  return array

def MakeDict(array):
  dic = {}
  x = round(random.uniform(0,99.8),1)
  y = 0
  for line in array:
      dic[line[0]] = line[1]
      y += float(line[1])
      if y > x:
          return(line[0])

@app.route("/occupyflaskst")
def occpuyflaskst():
    coll = MakeArray("occupations.csv")
    # coll = {0,1,1,2,3,5,8}
    return render_template(
    'occupations.html',
    collection = coll, job = MakeDict(coll)
    )


if __name__=="__main__":
    print("hasjdf")
    app.debug = True
    app.run()
