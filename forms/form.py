from flask import Flask, render_template, request
app = Flask(__name__) #create instance of class FLASK
#ADDD HEADING
@app.route("/") #assign following fxn to run when rotting route requested
def hello_world():
    print(app)
    print(request)
    print(request.args)
    return render_template(
    'form.html',
    )

@app.route("/response")
def test_tmplt():
    print(app)
    print(request)
    print(request.args)
    print(request.form)
    return render_template(
    'reponse.html',
    )




if __name__=="__main__":
    print("hasjdf")
    app.debug = True
    app.run()
n()
