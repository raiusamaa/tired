import Express from 'express';
import Events from '../models/events';
const router = Express.Router();

router.post('/add', async (req, res) => {
    const newEvent = new Events({
        title:req.body.title,
        description: req.body.description,
        img:req.body.img,
        hobbies: req.body.hobbies,
        location: req.body.location
    });
    console.log('called');
    newPost
      .save()
      .then((response) => {
        res.json({ message: 'V Added' });
      })
      .catch((error) => {
        res.json({ message: 'Error' });
      });
  });