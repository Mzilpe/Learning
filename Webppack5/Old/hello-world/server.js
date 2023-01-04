const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')

app.get('/', (req, res)=>{
    const pathToHtml=path.resolve(__dirname, '../dist/hello-world.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtml, 'utf-8')
    res.send(contentFromHtmlFile)
})


app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(9001, ()=>{
    console.log("Application is running on port 9001")
})