import express from "express";
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Express app!",
  });
});

app.listen(PORT, () => {
  console.log("server is up on port: ", PORT);
});
