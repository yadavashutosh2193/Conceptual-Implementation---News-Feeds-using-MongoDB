const express = require('express');
const { data } = require('./data');
const app = express()
const port = 8080

const onePageArticleCount = 10

const {newsArticleModel} = require('./connector');
// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const getval = (value, defaultvalue)=>
     (value === null || value === undefined || isNaN(Number(value))) ? defaultvalue : Number(value);

app.get("/newFeeds", async (req, res)=>{
    const offset = getval(req.query.offset, 0);
    const limit = getval(req.query.limit, onePageArticleCount);
    const datafromServer = await newsArticleModel.find().skip(offset).limit(limit);
  res.status(200).send(datafromServer);
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;