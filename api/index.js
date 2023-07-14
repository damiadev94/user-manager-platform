const router = require("./routes/index")
const express = require('express');

const app = express();

app.use("/", (req, res) => {router(req, res)})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})