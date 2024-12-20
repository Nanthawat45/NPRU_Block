const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const salt = bcrypt.genSaltSync(10);
const secret = process.env.JWT_SECRET || "your_secret_key";

exports.register = async (req, res) => {
    const { username, password } = req.body;

    // Validate request
    if (!username || !password) {
        res.status(400).send({
            message: "Please provide all required fields!",
        });
        return;
    }

    try {
        // Hash password and create user
        const hashedPassword = bcrypt.hashSync(password, salt);
        const user = await UserModel.create({
            username,
            password: hashedPassword,
        });

        res.send({
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                "Something went wrong while registering a new user",
        });
    }

    try {
        // Find user in database
        const userDoc = await UserModel.findOne({ username });
        if (!userDoc) {
            res.status(404).send({
                message: "User not found",
            });
            return;
        }

        // Verify password
        const isPasswordMatched = await bcrypt.compare(password, userDoc.password);
        if (!isPasswordMatched) {
            res.status(401).send({
                message: "Invalid credentials",
            });
            return;
        }

        // Generate token
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err)
                return res.status(500).send({
                    message: "Internal server error: Authentication Failed!",
                });

            res.status(200).send({
                message: "Login success",
                id: userDoc._id,
                username,
                accessToken: token,
            });
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error in logging user",
        });
    }
};
