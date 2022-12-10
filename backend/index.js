import Express from "express";
import mongoose from "mongoose"
import dotevn from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import cors from 'cors';
import reg from './routes/reg.js'
import use from './routes/users.js'
import post from './routes/posts.js'
import bodyParser from 'body-parser'
import users from "./models/users.js";
import Posts from "./models/post.js";
mongoose.connect("mongodb://127.0.0.1:27017/SocialMedia");

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

const app=Express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Express.static('public')) 
app.use(cors(corsOptions))
app.use(Express.json());
app.use(helmet());
app.use(morgan('common'));

app.get("/",(req,res) => {
    res.send('Welcome To Social Media')
})

// app.get('/posts/get', (req,res) =>
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

// app.get('/view', (req,res) {
//     res.find({}, (err, docs)
//     {
//         if(err) res.json(err);
//         else res.render();
//     })
// })

app.use('/api/auth',reg)
app.use('/api/users',use)
app.use('/api/posts',post)
app.listen(5000, () => {
    console.log('Backend')
})