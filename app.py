from flask import Flask, request, send_from_directory, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")
@app.route("/<path:path>")
def js_path(path): 
    print(path)
    return send_from_directory("templates", path)

@app.route("/send-email", methods=["POST"])
def send_email(): 
    print(request)
    print(request.form)
    print(request.form['test'])
    return "123"


if __name__=="__main__": 
    app.run()