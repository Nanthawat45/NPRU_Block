const multer = require("multer");
const path =require("path");

const storage = multer.diskStorage({
    destination:"./uploads/",
    filename:(req,file,cd)=>{
        cb(
            null,
            file.filename + "-" + Date.now()+ path.extname(file.originalname)
        );
    },
});

// Init Upload
const upload = multer({
    storage:storage,
    limits:{fileSize:100000}, //1mb
    fileFilter:(req,file,cd)=>{
        checkFileType(file,cd); // Check file ext 
    }
}).single('file');//input name

function checkFileType (file,cd){
    const fileTypes = /jpeg|jpg|png|git|webp/;
    const extName = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase())
    const missing = fileTypes.test(file.mimetype);

    if(mimetype && extName){
        return cd(null,true);
    }else{
        cd("Error:Image Only!")
    }
}
module.exports = {upload};