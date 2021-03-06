import sys
import json
import pronouncing

from flask import request
from flask_cors import CORS, cross_origin

from flask import Flask
app = Flask(__name__)

CORS(app)

@app.route("/homophone", methods=["POST"])
def processRequest():
    return json.dumps(homophones(request.get_json()["word"]))

"""
@param: word, a lowercase string
@returns: a list of homophones for word
"""
def homophones(word):
    phoneList = pronouncing.phones_for_word(word)
    results = []
    for phone in phoneList:
        # pronouncing.search uses pronouncing to search for a RegEx of sounds
        results.extend(pronouncing.search("^" + phone + "$"))
    return results
"""
Test cases:
bear, two, pear
"""
def main():
    print("BEAR:")
    for i in homophones("bear"):
        print(i)
    print("TWO:")
    for i in homophones("two"):
        print(i)
    print("PEAR")
    for i in homophones("pear"):
        print(i)

"""
if this script is called with arguments, return JSON for each arg's homophones
{ arg1 : ["homophone1","homophone2","homophone3",
arg2 : ["homophone1","homophone2"]

After processing, start up a web server
"""
if __name__ == '__main__':
    if len(sys.argv) > 1:
        result = {}
        for arg in sys.argv[1:]:
            result[arg] = homophones(arg)
        print(json.dumps(result))
    else:
        main()
    app.run()
