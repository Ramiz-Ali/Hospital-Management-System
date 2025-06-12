import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients'
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctors'
    },
    date: Number,
    time: String,
    status: String,
})

const Appointment = mongoose.model("Appointment" , appointmentSchema);

export default Appointment;