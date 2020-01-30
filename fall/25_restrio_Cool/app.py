#Kenneth Chin, Henry Liu
#SoftDev1 pd9
#25_restrio_Cool
#2019-11-13

from flask import Flask, render_template
import json, urllib

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/taco")
def taco():
    u = urllib.request.urlopen(
        #VPp2gfpykcoDthL5P9ExhtE0SU8vtS9LsN346ywO
        "http://taco-randomizer.herokuapp.com/random"
    )
    response = u.read()
    data = json.loads(response)
    food = data["condiment"]
    return render_template("taco.html", name = food["name"], recipe = food["recipe"])

@app.route("/pokeapi")
def pokeapi():
    url = "https://pokeapi.co/api/v2/pokemon/pikachu/"
    request = urllib.request.Request(url)
    request.add_header('User-Agent',"yes")
    u = urllib.request.urlopen(request)
    response = u.read()
    data = json.loads(response)
    return render_template("pokeapi.html", name = data['name'],
        number = data['game_indices'][1]['game_index'],
        ability1 = data['abilities'][1]['ability']['name'],
        ability2 = data['abilities'][0]['ability']['name'])


@app.route("/bike")
def bike():
    u = urllib.request.urlopen("http://api.citybik.es/v2/networks/nu-connect")
    response = u.read()
    data = json.loads(response)
    data = data['network']
    location = data['location']
    company = data["company"]
    return render_template("bike.html", name = company[0],
                        city = location['city'],
                        country = location['country'],
                        latitude = location['latitude'],
                        longitude = location['longitude'],
                        nm = data['name'])






if __name__ == "__main__":
    app.debug = True
    app.run()
