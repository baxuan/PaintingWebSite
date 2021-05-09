from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    # return render_template("index.html")
    return "<form action='send_email' method='post'> <input name='email' /><button type='submit'>Submit</button> </form>"

@app.route('/send_email', methods=["POST"])
def send_email():
    return 'Thanks for your sending email'

if __name__ == '__main__':
    app.run()
