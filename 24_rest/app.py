#Kenneth Chin
#SoftDev1 pd9
#24_test
#2019-11-12

from flask import Flask, render_template
from urllib.request import urlopen
import json

app = Flask(__name__)

@app.route("/")
def root():
    u = urlopen(
        #VPp2gfpykcoDthL5P9ExhtE0SU8vtS9LsN346ywO
        "https://api.nasa.gov/planetary/apod?api_key=elrfVIw4qyy9ZpUT2TrDUYf9ElfzxBSh388S2RWy"
    )
    response = u.read()
    data = json.loads(response)
    return render_template("index.html", pic = data['url'], exp = data['explanation'], date = data['date'])




if __name__ == "__main__":
    app.debug = True
    app.run()
