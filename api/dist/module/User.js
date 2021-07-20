const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    nikname: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    picture: {
        type: String,
        default: "",
    },
}, { timestamps: true });
module.exports = mongoose.model("Users", UserSchema);
//# sourceMappingURL=User.js.map