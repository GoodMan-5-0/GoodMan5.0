const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🤖 GoodMan5.0 Server Running");
});

app.post("/chat", (req, res) => {
  const message = req.body.message || "";
  res.json({
    reply: "আপনি লিখেছেন: " + message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
