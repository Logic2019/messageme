import mongoose from "mongoose";


interface UserI{
    username: string;
    email: string;
    password: string;
}

interface UserDocument extends mongoose.Document{
    username: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,

    },
    email: {
        type: String,
       
    },
    password: {
        type: String,
       
    },
})


interface userModelInterface extends mongoose.Model<UserDocument>{
    set(x: UserI):  UserDocument;
}

userSchema.statics.set = (x: UserI) => {
    return new User();
};

const User = mongoose.model<UserDocument,userModelInterface>('User',userSchema);

User.set({
    username: "username",
    email: "email",
    password: "password",
})

export {User}