from flask import Flask, request, send_from_directory, render_template, redirect, url_for
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/<path:path>")
def js_path(path): 
    return send_from_directory("templates", path)

@app.route("/send-email", methods=["POST"])
def send_email(): 
    name = request.form['name']
    phone = request.form['phone']
    surburb = request.form['surburb']
    message = request.form['message']

    file = open("api.txt")


    SENDGRID_API_KEY = file.read()
    message = Mail(
        from_email='donotanswer@yopmail.com', 
        to_emails='blastor555@yopmail.com', 
        subject='Asking for free no-obligation quote from '+ name + ' in '+ surburb + ' phone number: '+ phone,
        plain_text_content=message
    )

    try:
        sg=SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
    except Exception as e:
        print(e.reason)
    return redirect(url_for("index"))
if __name__=="__main__": 
    app.run()