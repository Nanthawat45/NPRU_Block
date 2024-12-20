const mongoose = require("mongoose");
const {Schema,model}=mongoose;


const PostSchema = new Schema({
    title:{type: String, require: true},
    summary:{type: String, require: true},
    content:{type: String, require: true},
    cover:{type: String, require: true},
    author:{type: Schema.Types.ObjectId,ref:"User"},
});

const PostModel = model("User", UserSchema);
model.exports = UserModel;