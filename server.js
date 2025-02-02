const express = require("express");
const cors = require("cors");
const path = require("path");
const converterRoute = require("./routes/converter");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", converterRoute);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
