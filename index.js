const express = require("express");
const flash = require("connect-flash")
const compression = require("compression")
const cors = require('cors')
const path = require("path");
const DB_URL = require("./models/DB_URL").DB_URL;

const session = require("express-session")
const SessionStore = require("connect-mongodb-session")(session);
const faqsRouter = require('./routers/faqs.router')
const categorysRouter = require('./routers/categorys.router')
const contactRouter = require('./routers/contact.router')
const suggestRouter = require('./routers/suggest.router')
const interestedRouter = require('./routers/interested.router')
const subscribeRouter = require('./routers/subscribe.router')
const articlesRouter = require('./routers/articles.router')

const app = express()
app.use(express.json())

app.use(flash())
app.use(compression())
app.use(cors());

app.use(express.static(path.join(__dirname, "images")));
app.use(express.static('public')); 
app.use('/images', express.static('images'));

const STORE = new SessionStore({
    uri: DB_URL,
    collection: "sessions"
})

app.use(session({
    secret: "lo jiohs jifdj joigfi h iuhurf hrpuhg",
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 60 * 60 * 100
    },
    store: STORE
}))



app.use("/", faqsRouter)
app.use("/", categorysRouter)
app.use("/", contactRouter)
app.use("/", suggestRouter)
app.use("/", interestedRouter)
app.use("/", subscribeRouter)
app.use("/", articlesRouter)

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log("start server msader " + PORT))