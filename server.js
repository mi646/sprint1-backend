
const express = require("express");
const cors = require("cors");
const db = require("./db");
const userRoutes = require("./routes/users");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Sprint 1 Backend Running ✅");
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});