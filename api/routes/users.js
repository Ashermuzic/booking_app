import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updatedUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and can delete your account");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello Admin, you are logged in and can delete this account");
// });

//UPDATE
router.put("/:id", verifyUser, updatedUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GETALL
router.get("/", verifyAdmin, getUsers);

export default router;
