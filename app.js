const express = require('express');
const app = express();
const fs = require("fs");
const cors = require('cors');

app.use(cors());

app.set('port', process.env.PORT || 3001);

app.get('/api/article/:type/:index', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    fs.readFile(`article/python/category.txt`, "utf8", (err, categoryData) => {
        if (err) {
            res.json({ ok: false, error: err })
        } else {
            fs.readFile(`article/${req.params.type}/${req.params.index}.md`, "utf8", (err, data) => {
                if (err) {
                    res.json({ ok: false, error: err })
                } else {
                    res.json({ ok: true, article: data, category: ["Typescript 강좌", '2'] })
                }
            });
        }
    });

})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})