import express from "express";
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogAdmin, getAllComments, getDashBoard } from "../controllers/adminController.js";
import auth from "../middleware/auth.js"

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/blogs", getAllBlogAdmin);
adminRouter.post("/delete-comment", auth, deleteCommentById);
adminRouter.post("/approve-comment", auth, approveCommentById);
adminRouter.get("/dashboard", auth, getDashBoard);

export default adminRouter;