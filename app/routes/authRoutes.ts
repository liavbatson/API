const express = require("express");

const router = express.Router();
import authenticate = require("../middleware/authMiddle");

const Auth = require("../controllers/auth.ts");

router.post("/register", Auth.register);

router.post("/login", Auth.login);

router.get("/refresh", Auth.renewToken);

router.get("/test", authenticate, Auth.test);
router.get("/test2", Auth.test);

export = router;