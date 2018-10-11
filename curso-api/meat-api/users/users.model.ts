import * as mongoose from 'mongoose';

// Creates an interface so we can autocomplete outside the function
export interface User extends mongoose.Document {
    name: string,
    email: string,
    password: string
}

// Schema of the collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    }
});

// The model uses the Schema to manipulate the documents on MongoDB
//Model type is User, so we use the interface created early
export const User = mongoose.model<User>('User', userSchema);