<<<<<<< HEAD
import Express from 'express';
import Post from '../models/post.js';
import multer from 'multer';
const router = Express.Router();

// const storage= multer.diskStorage( {
//   destination: (req, file, callback) => {
//     callback(null, './frontend/posts/')
//   },
//   filename: (req,file,callback) => {
//     callback(null, file.originalname); //origname is name of file
//   }
// })

// const uploads = multer({
//   storage: storage
// });

//create

router.post('/add', async (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
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
=======
import Express from "express";
import Post from '../models/post.js'
import multer from 'multer'
import path from 'path'
import bodyparser from 'body-parser'
const router= Express.Router()
//create

router.post ('/add', async (req,res) => {
  console.log(req.body.img)
  let result = new Post({
    description: req.body.description,
    img: req.body.img
  })
  result.save();
  //result.save();
  // if (result) {
  //   res.send({code: 200, message: 'done'})
  // }
  // else {
  //   res.send({code: 500, message: 'no'})
  // }
})

router.post('/',async (req,res) => {
    const newPost=new Post (req.body)
    try {
        const savePost= await newPost.save();
        res.status(200).json(savePost);
>>>>>>> b29aec783f130671e15a85a8c8aada8ea1f400f8

router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// del a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json('the post has been deleted');
    } else {
      res.status(403).json('you can delete only your post');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// like and islike
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      post.likecount += 1;
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('The post has been liked');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      post.likecount -= 1;
      res.status(200).json('The post has been disliked');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// timeline
<<<<<<< HEAD
router.get('/timeline/all', async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', (req, res) => {
  Post.find({}).then(
    items => res.json(items))
    .catch((err) => console.log(err));

});


export default router;
=======
router.get("/timeline/all", async (req, res) => {
    try {
      const currentUser = await User.findById(req.body.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
  });
export default router
>>>>>>> b29aec783f130671e15a85a8c8aada8ea1f400f8
