from flask import Flask, render_template
app = Flask(__name__) #create instance of class FLASK
#ADDD HEADING
@app.route("/") #assign following fxn to run when rotting route requested
def hello_world():
    print ("HI")#runs in terminal when page is reloaded
    print(__name__)#prints __main__
    file = open("index.html" , "r")
    return file.read()

@app.route("/my_foist_template")
def test_tmplt():
    coll = {0,1,1,2,3,5,8}
    return render_template(
    'foo.html',
    collection = coll
    )

@app.route("/occpuyflaskst")
def occpuyflaskst():
    coll = {0,1,1,2,3,5,8}
    return render_template(
    'occupations.html',
    collection = coll
    )


if __name__=="__main__":
    print("hasjdf")
    app.debug = True
    app.run()
