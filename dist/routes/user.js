"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const jsonData = [
    {
        name: "James Jonah",
        age: 23,
        gender: "Female",
        email: "james@gmail.com",
        role: "CEO"
    }
];
router.get("/", (req, res) => {
    res.render("home", {
        staff: jsonData
    });
});
exports.default = router;
const arr = {
    title: "mr",
};
