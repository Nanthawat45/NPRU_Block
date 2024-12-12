const mongoose = require("mongoose");
const {Schema,model}=mongoose;

const UserSchema = new Schema({
    username:{type: String, required: true, unique: true, min: 4},
    password:{type: String, require: true},
});

const UserModel = model("User", UserSchema);
model.exports = UserModel;