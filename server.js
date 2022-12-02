const express = require('express')
const cors = require('cors')


const app = express()

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const router = require('./routes/livre.route')
app.use('/api/livres', router)

app.use('/Images', express.static('./Images'))

require('./routes/auth.route')(app);
require('./routes/user.route')(app);


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})