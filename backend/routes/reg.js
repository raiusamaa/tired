import Express from "express";
import users from '../models/users.js'
const router= Express.Router()

router.post('/register', async (req,res) => {
    const user= new users ({
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

router.post('/login', async(req,res) => {
    try {
        const user=await users.findOne({email:req.body.email});
        !user && res.status(404).json('user not found');
        //compare pass
        if (req.body.password===user.password)
            res.status(200).json(user)   
    }
    catch (err)
    {
        res.status(500).json(err)
    }
})

// router.put ('/updateProfile', async (req,res) => {
//     try{
//         const user=await users.findByIdAndUpdate
//     }
// })

export default router