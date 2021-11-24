"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ejs = require("express-ejs-layouts");
const path_1 = __importDefault(require("path"));
const user_1 = __importDefault(require("./routes/user"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
var logger = require('morgan');
const app = (0, express_1.default)();
const port = process.env.PORT || 3131;
app.set("view engine", "ejs");
app.set('views', path_1.default.join(__dirname, '.././views'));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.urlencoded({ extended: false })); //url encoded
app.use(logger('dev'));
app.use((0, cookie_parser_1.default)());
app.use("/home", user_1.default);
app.use(express_1.default.json());
// app.get("/jerry",(req:Request,res:Response)=>{
//     res.render("home")
// })
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
module.exports = app;
