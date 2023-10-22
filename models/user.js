import mongoose from 'mongoose';

// create a Schema
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
}, {
    timestamps: true // This option adds createdAt and updatedAt fields
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
