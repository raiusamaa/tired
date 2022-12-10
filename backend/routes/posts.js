import Express from 'express';
import Post from '../models/post.js';
import multer from 'multer';
import Posts from '../models/post.js';
const router = Express.Router();


const uploads = multer({
  dest:'uploads/'
});

//create

router.post('/add', async (req, res) => {
  const newPost = new Post({
    username:req.body.username,
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

router.post('/adds', uploads.single('image'), async (req, res) => {
  const newPost = new Post({
    username:req.body.username,
    description: req.body.description,
    img: req.path
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

router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post
// router.get('/get', (req,res) =>
// {
//     Posts.find((err,data) => {
//         if(err)
//         {
//             res.status(500).send(err)
//         }
//         else{
//             res.status(200).send(data);
//         }
//     });
// })

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

<<<<<<< HEAD
// router.get('/posts/get', (req,res) =>
// {
//     Post.find((err,data) => {
//         if(err)
//         {
//             res.status(500).send(err)
//         }
//         else{
//             res.status(200).send(data);
//         }
//     });
// })

// router.get('/', (req, res) => {
//   postSchema.find({}).then(
//     items => res.json(items))
//     .catch((err) => console.log(err));

// });


=======
router.get('/', async (req, res) => {
  try
  {
  let post = await Post.find()
  res.json(post);
  }
  catch(err)
  {
    req.setEncoding('Err' + err)
  }
});
>>>>>>> aafab5438684417d278d603a14bcbfda020b1981


export default router;
