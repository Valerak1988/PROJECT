const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    addUser,
    updataUserById,
    deleteUserById,
    Register,
    Login
} = require('../controller/user');

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.patch("/:id", updataUserById);
router.delete("/:id", deleteUserById);
router.post("/register", Register);
router.post("/login", Login);

module.exports = router;