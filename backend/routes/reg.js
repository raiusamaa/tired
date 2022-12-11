import Express from "express";
import users from '../models/users.js'
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

router.patch('/updateHobby', async (req,res) => {
    console.log('dd')
    const currentUser=await users.updateOne({email:req.body.email}, {
        $set:{
          name:req.body.name,
          relationship:req.body.relationship,
          hobbies:req.body.hobbies,
          profession:req.body.profession
        }
        
      })
      res.send(currentUser)
});


router.post('/registerC', async (req,res) => {
    const user= new users ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profession: req.body.profession,
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