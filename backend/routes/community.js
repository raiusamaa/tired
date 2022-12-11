import Express from "express";
import users from '../models/community.js'
const router= Express.Router()

router.post('/register', async (req,res) => {
    const user= new users ({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profession: req.body.profession,
        hobbies: req.body.hobbies,
        city: req.body.city,
        relationship: req.body.relationship
    });

    try {
        const newUser= await user.save();
        res.send(200).json(newUser)
    }
    catch (err) {
        console.log (err)
    }
})

export default router