const express = require('express')
const app = express()
const port = 8080
const { newsArticleModel } = require('./connector');

const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//const isNullOrUndefinedOrNan = (val)=> val !==null || val !==undefined || isNan(val);
app.get('/newFeeds', async (req, res) => {
    // const offset = isNullOrUndefinedOrNan(req.query.offset) ? 0 : Number(req.query.offset);
    // const limit = isNullOrUndefinedOrNan(req.query.limit) ? 10 : Number(req.query.limit);
    res.send(await newsArticleModel.find().skip(Number(req.query.offset) || 0).limit(Number(req.query.limit) || 10));

});



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;