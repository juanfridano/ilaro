import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "User with this email already exists"],
        required: [true, "Email is required"]
    },
    username: {
        type: String,
        unique: [true, "User with this username already exists"],
        required: [true, "Username is required"]
    },
    image: {
        type: String
    }
})

const User = models.User || model("User", UserSchema)

export default User