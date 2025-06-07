import express from "express";
import { getAllUsers, getUser, addUser } from "../db/databasev1.js";
const router = express.Router();

router.use(express.json());

// bundle getall and get single together

router.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneUser = await getUser(req.params.id);

    //check if that User exists

    if (!oneUser) {
      return res.status(404).json({ msg: "User not found!" });
    }

    res.status(200).json(oneUser);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const info = req.body;
    const result = await addUser(info);
    console.log(result);

    res.end();
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

export default router;
