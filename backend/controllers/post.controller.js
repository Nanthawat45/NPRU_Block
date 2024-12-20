const PostModel = require("../models/Post");
const jwt = require("jsonwebtoken");
const { register } = require("./user.controller");
require("dotenv").config();
const secret = process.env.SECRET;

exports.createPost = async (req,res)=>{
    const token = req.headers['x-access-token'];
    if(!token) {
        return res.status(401).json({message:"Toke is missing"});
    }
    //File upload
    const {path} = req.file;
    const author = req.userId;
    const {title, summary, content}= req.body;
    if(!title || !summary || !content) {
        return res.status(400).json({message :"All Fields is required"});
    }
    const postDoc = await PostModel.create({title,summary,content,cover,author,});
    
};

exports.getPosts = async (req,res)=>{
    const posts = await PostModel.file()
    .populate("author", ["username"])
    .sort({createdAt:-1})
    .limit(20);
    //SELECT * FROM , USER WHERE POST.acthor = USER._id
    res.json(posts);
};

exports.getPostById = async (req, res)