import UserModel from '../models/user.js';

function getUser(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    // Create a new user document
    const newUser = new UserModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    });

    try {
        newUser.save();
        console.log("User saved Successfully");

        res.render("login.ejs", {
            Success: true,
            name: 'ali'
        });

    } catch (e) {
        console.log("User Failed to Save Successfully");
    }
}

export default getUser;
