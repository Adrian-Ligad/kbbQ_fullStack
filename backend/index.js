import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
const port = 3001 || process.env.PORT
import { getReviews, postReview } from './controller/index.js'

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
    res.send("Hello from the Dan Buscemi Server!")
})

app.post("/reviews", async(req, res) => {
    const name = req.body.fName + " " + req.body.lName
    const { message, rating } = req.body
    const review = await postReview(name, rating, message)
    res.send(review)
})

app.get('/reviews', async(req, res) => {
    const reviews = await getReviews()
    res.send(reviews)
})

app.listen(port, () => {
    console.log(`Movie List listening at http://localhost:${port}`)
})