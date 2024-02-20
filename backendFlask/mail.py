import smtplib
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email import encoders
import os

def sendEmail(smtpHost, smtpPort, mailUname, mailPwd, fromEmail, mailSubject, mailContentHtml, recepientsMailList):
    # create message object
    msg = MIMEMultipart()
    msg['From'] = fromEmail
    msg['To'] = ','.join(recepientsMailList)
    msg['Subject'] = mailSubject
    # msg.attach(MIMEText(mailContentText, 'plain'))
    msg.attach(MIMEText(mailContentHtml, 'html'))

    # Send message object as email using smptplib
    s = smtplib.SMTP(smtpHost, smtpPort)
    s.starttls()
    s.login(mailUname, mailPwd)
    msgText = msg.as_string()
    sendErrs = s.sendmail(fromEmail, recepientsMailList, msgText)
    s.quit()

    # check if errors occured and handle them accordingly
    if not len(sendErrs.keys()) == 0:
        raise Exception("Errors occurred while sending email", sendErrs)


# mail server parameters
# smtpHost = "smtp.gmail.com"
# smtpPort = 587
# mailUname = 'eventual274@gmail.com'
# mailPwd = 
# fromEmail = 'eventual274@gmail.com'

# # mail body, recepients, attachment files
# mailSubject = "Feedback"
# mailContentHtml = "Hi, Name: "+name+"<br> Phone Number: "+phone+"<br> email address: "+email+"<br> feedabck :- "+text+""
# recepientsMailList = ["mayurpimpude@gmail.com"]

# sendEmail(smtpHost, smtpPort, mailUname, mailPwd, fromEmail,
#           mailSubject, mailContentHtml, recepientsMailList)

print("execution complete...")