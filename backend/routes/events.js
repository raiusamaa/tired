import Express from 'express';
import Events from '../models/events.js';
const router = Express.Router();

router.post('/add', async (req, res) => {
    const newEvent = new Events({
        title:req.body.title,
        description: req.body.description,
        img:req.body.img,
        hobbies: req.body.hobbies,
        location: req.body.location,
        createdBy: req.body.createdBy,
        starts: req.body.starts
    });
    console.log('called');
    newEvent
      .save()
      .then((response) => {
        res.json({ message: 'V Added' });
      })
      .catch((error) => {
        res.json({ message: 'Error' });
      });
  });

  export default router;