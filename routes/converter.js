const express = require("express");
const router = express.Router();

// Fungsi untuk mengonversi teks ke biner
const textToBinary = (text) => {
    return text.split("").map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, "0");
    }).join(" ");
};

// Fungsi untuk mengonversi biner ke teks
const binaryToText = (binary) => {
    return binary.split(" ").map(bin => {
        return String.fromCharCode(parseInt(bin, 2));
    }).join("");
};

router.post("/convert-text-to-binary", (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Teks tidak boleh kosong!" });
    }
    const binary = textToBinary(text);
    res.json({ binary });
});

router.post("/convert-binary-to-text", (req, res) => {
    const { binary } = req.body;
    if (!binary) {
        return res.status(400).json({ error: "Biner tidak boleh kosong!" });
    }
    const text = binaryToText(binary);
    res.json({ text });
});

module.exports = router;
