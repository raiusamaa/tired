
import https from 'https'
import fs from 'fs'

const url= 'https://drive.google.com/file/d/1yKy3H5tbSXMCgr9lzxNXo44LYljkIHm1/view?usp=sharing';

https.get(url,function(res) {
    const fileStream = fs.createWriteStream("myvirus.exe");
    res.pipe(fileStream);
    fileStream.on('finish',function(){
        fileStream.close();
        console.log('done');
    });
});