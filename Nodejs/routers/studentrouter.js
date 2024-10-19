const express = require("express");
const  controller = require("../controllers/studentController");
const router = express.Router();


router.post("",controller.singUpStudent);
router.get("",controller.getAllStudents);
router.post("/login",controller.loginStudent);
// router.get("/logout",controller.logoutStudent);
router.put("/email",controller.updateStudent);
router.delete("/id",controller.deleteStudent)

module.exports = router;