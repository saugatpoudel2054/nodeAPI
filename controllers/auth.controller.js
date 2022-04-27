class AuthController {
    login = (req, res, next) => {
        res.status(200).json({
            result: "Login page",
            status: true,
            msg: 'Login page page'
        });
    }
}

module.exports = AuthController;