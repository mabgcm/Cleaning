// models/Booking.js
import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema({
    cleaningType: String,
    name: String,
    phone: Number,
    email: String,
    adress: String,
    city: String,
    postalCode: String,
    bedrooms: Number,
    bathrooms: Number,
    squareFeetRange: String,
    cleaningItems: [String],
    date: String,
    totalAmount: Number
},
    {
        timestamps: true
    });

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;
