const express = require('express');

const app = express();

app.use(express.static('static'))
app.get('/', (req, res) => {
    res.send('<h1>Hi this is my first page</h1>')
})

app.get('/about', (req, res) => {
    res.send({"page" : "about page"})
})

app.get('/gallery', (req, res) => {
    res.send(`<h1>Gallery</h1>
    <div>
        <img src="/img/luffy.jpg">
    </div>`)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/ to stop server press CTRL + C')
})