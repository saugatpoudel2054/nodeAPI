class HomeController {
    getHomePage = (req, res, next) => {
        res.status(200).json({
            result: "Welcome",
            status: true,
            msg: 'Home page'
        });
    }

    getAboutPage = (req, res, next) => {
        res.status(200).json({
            result: "About us",
            status: true,
            msg: 'About us'
        });
    }
}

module.exports = HomeController;