import express from "express";
import { createUserData, deleteUser, getOneUser, getUserData, updateUser } from "../controller/userController.js";


const route = express.Router();


route.post("/createuser", createUserData);
route.get("/getusers", getUserData);
route.get("/getusers/:id", getOneUser);
route.put("/updateuser/:id", updateUser);
route.delete("/deleteuser/:id", deleteUser);


export default route;