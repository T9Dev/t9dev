const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const fetch = require('node-fetch')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.write(fs.readFilySync('./public/index.html', 'utf-8'))
  res.end()
})
app.post('/webhook', (req, res) => {
  let data = req.body
  fetch("https://discord.com/api/webhooks/833369163346870332/hcKj9kvWi0wDaxdkJPuLWltpCUsa9Nyo6ZzWpufhrtUSZKBsnbF_0DA2Ea8jrDJXnXYe", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: data.content

                })
            })
})


app.listen(port, () => console.log(`${port}`))