import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

SENDGRID_API_KEY = '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'

message = Mail(from_email='hoangthanhbinh8@gmail.com', 
                to_emails='xuanba@hotmail.com', 
                subject='Asking for free no-obligation quote',
                plain_text_content='aaa',
                html_content='bbb')
try:
    sg=SendGridAPIClient(SENDGRID_API_KEY)
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
except Exception as e:
    print(e.reason)