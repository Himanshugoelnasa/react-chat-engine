const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put('https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { 'private-key': '8deb03b2-dd83-4db7-9e7c-cef532f3cf0c' } });
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.log(error);
    }
});

app.listen(3002);