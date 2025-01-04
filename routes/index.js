const express = require("express");
const router = express.Router();
const UserCtr = require("../controller/UserCtr");
const QuestionCtr = require("../controller/QuestionCtr");
const SurveyCtr = require("../controller/SurveyCtr");

// user api
router.post("/user/register", UserCtr.register);
router.post("/user/forgotpassword", UserCtr.forgotpassword);
router.post("/user/login", UserCtr.login);
router.post("/user/send_mail", UserCtr.sendMail);
router.post("/user/check_email", UserCtr.check_email_exist);

//questionare api
router.post("/questionare/create", QuestionCtr.create);
router.post("/questionare/getallquestion", QuestionCtr.getAllQuestions);
router.delete("/questionare/:id", QuestionCtr.deleteQuestion);
router.put("/questionare/:id", QuestionCtr.updateQuestion);

//survey api
router.post("/survey/create", SurveyCtr.create);
router.get("/survey/getdata", SurveyCtr.getdata);
router.get("/survey/getdata1", SurveyCtr.getdata1);
router.get("/survey/getdata2", SurveyCtr.getdata2);
router.get("/survey/getdata3", SurveyCtr.getdata3);
router.get("/survey/getdata4", SurveyCtr.getdata4);
router.get("/survey/getdata5", SurveyCtr.getdata5);
router.get("/survey/getdata6", SurveyCtr.getdata6);
router.get("/survey/getdata7", SurveyCtr.getdata7);
router.get("/survey/getdata8", SurveyCtr.getdata8);
router.get("/survey/getdata9", SurveyCtr.getdata9);
router.get("/survey/getdata10", SurveyCtr.getdata10);
router.get("/survey/getdata11", SurveyCtr.getdata11);
router.get("/survey/getdata12", SurveyCtr.getdata12);

// update user data api
router.post("/user/update/nick_name", UserCtr.update_nick_name);
router.post(
  "/user/update/increase_following",
  UserCtr.update_increase_following
);
router.post(
  "/user/update/increase_followers",
  UserCtr.update_increase_followers
);
router.post(
  "/user/update/decrease_following",
  UserCtr.update_decrease_following
);
router.post(
  "/user/update/decrease_followers",
  UserCtr.update_decrease_followers
);
router.post("/user/update/firstname", UserCtr.update_firstname);
router.post("/user/update/firstname", UserCtr.update_lastname);
// get user data
router.post("/user/get/userdata", UserCtr.getUserData);
router.get("/user/get/userdata", UserCtr.getUserData);
//get all user
router.post("/user/get/alluser", UserCtr.getAllUser);
//delete user by id

router.post('/user/delete', UserCtr.deleteUser);
router.post('/user/deletes', UserCtr.deleteUsers);

// coin api

module.exports = router;
