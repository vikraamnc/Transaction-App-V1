import express from "express";
import { gettUserByEmail, insertUser } from "../module/user/UserModule.js";
import { comparePassword, hashPassword } from "../utils/bcryptHelper.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "to be completed get",
    });
  } catch (error) {
    // error.errorCode = 401;
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { password } = req.body;

    //hash pass

    req.body.password = hashPassword(password);

    //insert user
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Your account has been created, you may login now",
        })
      : res.json({
          status: "error",
          message:
            "Unable to create the account now, Please contact the admin for support",
        });
  } catch (error) {
    if (message.includes("E11000 duplicate key error collection")) {
      error.message = "There is another existing user having this email";
      error.errorCode = 200;
    }
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { password, email } = req.body;

    //check if user exist for the given email
    const result = await gettUserByEmail(email);

    //check if the plain pass and the pass from the DB, the hash one, is the same
    if (result?.password) {
      const isMatched = comparePassword(password, result.password);
      if (isMatched) {
        result.password = undefined;
        res.json({
          status: "success",
          message: "Loged in successfully",
          user: result,
        });
        res.json({
          status: "error",
          message: "invalid login details",
        });
      }
    }
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message = "There is another existing user having this email";
      error.errorCode = 200;
    }
  }
});

router.put("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "to be completed put",
    });
  } catch (error) {
    // error.errorCode = 401;
    next(error);
  }
});

router.patch("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "to be completed patch",
    });
  } catch (error) {
    // error.errorCode = 401;
    next(error);
  }
});

router.delete("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "to be completed delete",
    });
  } catch (error) {
    // error.errorCode = 401;
    next(error);
  }
});

export default router;
