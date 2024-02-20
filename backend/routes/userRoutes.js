const express = require('express')
const { loginController, registerController, authController, applyDoctorController, getNotificationController, deleteNotificationController, getAllDoctorsController, bookAppointmentController, bookingAvailabilityController, userAppointmentsController} = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

//route onject
const router = express.Router()

//routes
//Login || POST
router.post('/login',loginController)

//Register || POST
router.post('/register',registerController)

//Auth || POST
router.post('/getUserData', authMiddleware, authController)

//Apply Doctor || POST
router.post('/apply-doctor', authMiddleware, applyDoctorController);

//Notification || POST
router.post('/get-all-notification', authMiddleware, getNotificationController);

//Notification || POST
router.post('/delete-all-notification', authMiddleware, deleteNotificationController);

//GET ALL DOC
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)

//BOOK APPOINTMENT
router.post('/book-appointment', authMiddleware, bookAppointmentController)

//BOOKING AVAILABILITY 
router.post('/booking-availability', authMiddleware, bookingAvailabilityController)

//Appointments List
router.get('/user-appointments', authMiddleware, userAppointmentsController)


module.exports=router