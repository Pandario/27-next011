import mongoose  ,{ Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const userSchema = new Schema({
        name: String,
        email: String,
        text: String,
        checkbox: String,
    },
    {
        timestamps: true,
    }
);

const UserOpt = mongoose.models.UserOpt || mongoose.model("UserOpt", userSchema) 

export default UserOpt;

