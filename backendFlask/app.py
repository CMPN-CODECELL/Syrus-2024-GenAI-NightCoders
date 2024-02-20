from flask import Flask ,request,render_template,redirect,jsonify
import pyrebase
import stripe
from mail import sendEmail
from keras.applications.vgg19 import VGG19
from keras.models import Model, load_model
import tensorflow as tf
import os
import cv2
import numpy as np 
import openai



stripe.api_key = "sk_test_51Mf5iMSHP7cyCBSwbnncFvTrRnH4J0rwq5WJQklUaTtMnPK3KOA2v08cRX457eu1GY4nY67Yst9SXegWba4wc11L00b5LLpjmB"

YOUR_DOMAIN = "http://localhost:5082"

API_KEY='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'

os.environ['OPENAI_Key']=API_KEY
openai.api_key=os.environ['OPENAI_Key']

UPLOAD_FOLDER = './UPLOAD_FOLDER/'

app = Flask(__name__)

#----------------------------------------- CORS ------------------------------------------------

from flask_cors import CORS

CORS(app)

#-----------------------------------------------------------------------------------------------

#----------------------------------------- Home Page -------------------------------------------

# @app.route('/',methods=['GET','POST'])
# def index():
#     return render_template('home.html')

#-----------------------------------------------------------------------------------------------

#-------------------------------------- ChatBot ------------------------------------------------

def chat(prompt):
    
    response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=100
        )

    chatbot_response = response.choices[0].text

    return chatbot_response

@app.route('/predict',methods=['GET','POST'])
def predict():
    if request.method == 'POST':
        # Get the user input from the form
        text = request.get_json().get("message")
        # print(text)
        response = chat(text)

        message = {"answer": response} 

    return jsonify(message)

#-----------------------------------------------------------------------------------------------

#-------------------------------------- Appointment --------------------------------------------

# @app.route('/Appoint',methods=['GET','POST'])
# def Appointment():
#     return render_template()

#-----------------------------------------------------------------------------------------------

# ----------------------------------------- Payment --------------------------------------------

# @app.route('/cancel',methods=['GET','POST'])
# def cancel():
#     return render_template('cancel.html')


# @app.route('/success',methods=['GET','POST'])
# def success():
#     return render_template('success.html')


@app.route('/Donate',methods=["POST"])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items = [
                {
                    "price":"price_1Mf5mHSHP7cyCBSwt9FT4k6p",
                    "quantity":1
                }
            ],
            mode="subscription",
            success_url=YOUR_DOMAIN + "/success",
            cancel_url = YOUR_DOMAIN + "/cancel"
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url,code=303)

# -----------------------------------------------------------------------------------------------

#--------------------------------------Skin Model -----------------------------------------------

# @app.route('/Test',methods=['GET','POST'])
# def test():
#      if request.method == 'POST':
#         filename = UPLOAD_FOLDER +str(int(np.random.randint(0, 5000))) + '.jpg'
#         file = request.files['image']
#         #file = request.form['image']

#         # filename = file.filename
#         file.save(filename)
#         print('File saved', filename)
#         print(str(filename))

#         # with open(str(filename), 'rb') as f:
#         #     data = f.read()
#         # print(data)
#         pred = predict_class(filename)

#         my_dict = pred

#         highest_key = None
#         highest_value = float('-inf')  # set to lowest possible value initially
#         for key, value in my_dict.items():
#             if value > highest_value:
#                 highest_value = value
#                 highest_key = key

#         #print(highest_key)
#         disease = highest_key

#         return render_template('test1.html',disease=disease)

#      return render_template('test1.html')
 

def predict_class(image):
    classes = {0:'Acne/Rosacea',
           1:'Actinic Keratosis/Basal Cell Carcinoma/Malignant Lesions',
           2:'Eczema',
           3:'Melanoma Skin Cancer/Nevi/Moles',
           4:'Psoriasis/Lichen Planus and related diseases', 
           5:'Tinea Ringworm/Candidiasis/Fungal Infections',
           6:'Urticaria/Hives', 
           7:'Nail Fungus/Nail Disease'}

    model = tf.keras.models.load_model('final_vgg1920epochs.h5')

    img = cv2.imread(image)
    img = cv2.resize(img, (32,32)) / 255.0
    predictions = (model.predict(img.reshape(1,32,32,3)) * 100.0).round(2) 
    new_dict = {
        classes[0]: predictions[0][0],
        classes[1]: predictions[0][1],
        classes[2]: predictions[0][2],
        classes[3]: predictions[0][3],
        classes[4]: predictions[0][4],
        classes[5]: predictions[0][5],
        classes[6]: predictions[0][6],
        classes[7]: predictions[0][7]
    }

    return new_dict

#--------------------------------------- test ---------------------------------------------------

UPLOAD_FOLDER = 'UPLOAD_FOLDER/'  # Define your upload folder here
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/Test', methods=['POST'])
def upload_image():
    if request.method == 'POST':
        filename = UPLOAD_FOLDER + str(int(np.random.randint(0, 5000))) + '.jpg'
        file = request.files['image']

        if file:
            file.save(filename)
            print('File saved:', filename)

        # Perform prediction on the uploaded image
            pred = predict_class(filename)
            highest_key = None
            highest_value = float('-inf')  # set to lowest possible value initially
            for key, value in pred.items():
               if value > highest_value:
                  highest_value = value
                  highest_key = key

            # The predicted disease
            disease = highest_key
            print(disease)
            # return jsonify({'message': 'Image uploaded successfully', 'filename': filename})
            return jsonify({'prediction': disease})
        else:
            return jsonify({'error': 'No file part'})

#------------------------------------------------------------------------------------------------

@app.route('/hairtest',methods=['GET','POST'])
def hair():
     if request.method == 'POST':
        filename = UPLOAD_FOLDER +str(int(np.random.randint(0, 5000))) + '.jpg'
        file = request.files['image']
        
        file.save(filename)
        print('File saved', filename)
        print(str(filename))

        pred = predict_hair(filename)

        my_dict = pred

        highest_key = None
        highest_value = float('-inf')  # set to lowest possible value initially
        for key, value in my_dict.items():
            if value > highest_value:
                highest_value = value
                highest_key = key

        #print(highest_key)
        disease = highest_key

        return render_template('hair.html',disease=disease)

     return render_template('hair.html')
 
def predict_hair(image):
    classes = {0:'Alopecia Areata',
           1:'Contact Dermatitis',
           2:'Folliculitis',
           3:'Head Lice',
           4:'Lichen Planus', 
           5:'Male Pattern Baldness',
           6:'Seborrheic Dermatitis', 
           7:'Telogen Effluvium',
           8:'Tinea Capitis',
           9:'Psoriasis'}

    model = tf.keras.models.load_model('hair.h5')

    img = cv2.imread(image)
    img = cv2.resize(img, (224,224)) / 255.0
    predictions = (model.predict(img.reshape(1,224,224,3)) * 100.0).round(2) 
    new_dict = {
        classes[0]: predictions[0][0],
        classes[1]: predictions[0][1],
        classes[2]: predictions[0][2],
        classes[3]: predictions[0][3],
        classes[4]: predictions[0][4],
        classes[5]: predictions[0][5],
        classes[6]: predictions[0][6],
        classes[7]: predictions[0][7],
        classes[8]: predictions[0][8],
        classes[9]: predictions[0][9]
    }

    return new_dict


# ----- Doctor -------

@app.route('/DLogin',methods=['GET','POST'])
def Dlogin():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
 
        # try:
        #     user = auth.sign_in_with_email_and_password(username,password)
        #     print('success')
        #     message = 'success'
        # except Exception as e:
        #     message = 'unsuccessful'
        #     print('unsuccessful')

        # return render_template('Dlogin.html',message=message)

    return render_template('Dlogin.html')
        

@app.route('/DRegister',methods=['GET','POST'])
def DRegister():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        number = request.form['number']
        docid = request.form['docid']
        password = request.form['pass']

        data = {'name':name,'email':email,'Phone':number,'docid':docid,'password':password}

        # try:
        #     database.push(data)

        #     user = auth.create_user_with_email_and_password(email,password)

        #     print('account created success')
        #     message = 'success'

        # except Exception as e:
        #     message = 'unsuccessful'
        #     print('account creation unsuccessfull', e)

        # return render_template('DRegister.html',message=message)

    return render_template('DRegister.html') 

# ------- Paitent -------

@app.route('/PLogin',methods=['GET','POST'])
def Plogin():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # try:
        #     user = auth.sign_in_with_email_and_password(username,password)
        #     print('success')
        #     message = 'success'

        # except Exception as e:
        #     message = 'unsuccessful'
        #     #print('unsuccessful '+e)

        # return render_template("Plogin.html",message=message)    

    return render_template("Plogin.html")     




@app.route('/Patient',methods=['GET','POST'])
def Patient():
        # return render_template("patientPage.html",message=message)    

    return render_template("patientPage.html")

@app.route('/PRegister',methods=['GET','POST'])
def PRegister():
    if request.method == 'POST':
        name = request.form['Rname']
        email = request.form['REmail']
        phone = request.form['Rphone']
        password = request.form['Pass']

        data = {'name':name,'email':email,'Phone':phone,'password':password}
        
        # try:
        #     database.push(data)

        #     user = auth.create_user_with_email_and_password(email,password)

        #     print('account created success')
        #     message = 'success'

        # except Exception as e:
        # # message = 'unsuccess'
        #     print('account creation unsuccessfull '+e)

        # return render_template("Pregister.html",message=message)

    return render_template("Pregister.html")


@app.route('/contact',methods=['GET','POST'])
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        subject = request.form.get("subject")
        message = request.form.get("message")

    # print(fname,email,mobile,text)
     
        smtpHost = "smtp.gmail.com"
        smtpPort = 587
        mailUname = 'eventual274@gmail.com'
        mailPwd = 'hnauqvpjdiqwwovq'
        fromEmail = 'eventual274@gmail.com'

        # mail body, recepients, attachment files
        mailSubject = subject
        mailContentHtml = "Hi,<br> Name: "+name+"<br><br> email address: "+email+"<br><br> feedback :- <br> "+message
        recepientsMailList = email

        sendEmail(smtpHost, smtpPort, mailUname, mailPwd, fromEmail,
            mailSubject, mailContentHtml, recepientsMailList)


    return render_template('contact.html')


if __name__ == "__main__":
    app.run(debug=True,port=8001)