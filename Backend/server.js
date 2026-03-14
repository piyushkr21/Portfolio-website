const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    const newMessage = {
        name,
        email,
        message,
        date: new Date()
    };

    let messages = [];

    if (fs.existsSync("messages.json")) {
        const data = fs.readFileSync("messages.json");
        messages = JSON.parse(data);
    }

    messages.push(newMessage);

    fs.writeFileSync("messages.json", JSON.stringify(messages, null, 2));

    res.json({ message: "Message saved successfully!" });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});