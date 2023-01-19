const express = require('express');
const app = express();
const fs = require("fs");
const cors = require('cors');

app.use(cors());

app.set('port', process.env.PORT || 3001);

app.get('/api', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    fs.readFile("lecture.md", "utf8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
            res.json({data: data})
        }
      });
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})