from flask import Flask
app = Flask(__name__) #create instance of class FLASK
#
@app.route("/") #assign following fxn to run when rotting route requested
def hello_world():
    print ("HI")#runs in terminal when page is reloaded
    print(__name__)#prints __main__
    return "Welcome"#prints it on the webpage

@app.route("/cheese") #add /cheese to end of url to run
def cheese():
    print ("Her")#runs in terminal when page is reloaded
    print(__name__)#prints __main__
    return "Hi, I like cheese"#prints it on the webpage

@app.route("/cars") #add /cars to end of url to run
def cars():
    print ("BMW")#runs in terminal when page is reloaded
    print(__name__) #prints __main__
    return "Hi, I like cars"#prints it on the webpage

@app.route("/basketball") #add /basketball to end of url to run
def basketball():
    print ("Nets") #runs in terminal when page is reloaded
    print(__name__)#prints __main__
    return "Hi, I like basketball"#prints it on the webpage

if __name__=="__main__":
    print("hasjdf")
    app.debug = True
    app.run()
