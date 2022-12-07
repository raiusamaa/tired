import Express from "express";
import Post from '../models/post.js'
import multer from 'multer'
const router= Express.Router()

const storage= multer.diskStorage( {
  destination: (req, file, callback) => {
    callback(null, './frontend/posts/')
  },
  filename: (req,file,callback) => {
    callback(null, file.originalname); //origname is name of file

  }
})

const uploads = multer({
  storage: storage
});

//create

router.post ('/upload', uploads.single('User Post'), (req,res) => {
  const newPost= new Post ({
    name: req.body.name,
    description: req.body.description,
    author: req.body.author,
    img: req.body.img,
    date: req.body.date
  })
})

router.post('/',async (req,res) => {
    const newPost=new Post (req.body)
    try {
        const savePost= await newPost.save();
        res.status(200).json(savePost);

    }
    catch (err)
    {
        res.status(500).json(err)
    }
})

// del a post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        res.status(403).json("you can delete only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

// like and islike
router.put("/:id/like", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post.likes.includes(req.body.userId)) {
        post.likecount+=1;
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("The post has been liked");
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        post.likecount-=1;
        res.status(200).json("The post has been disliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


// timeline
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