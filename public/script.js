document.getElementById("textToBinaryBtn").addEventListener("click", function() {
    document.getElementById("textToBinaryForm").style.display = "block";
    document.getElementById("binaryToTextForm").style.display = "none";
    document.getElementById("aboutPage").style.display = "none";
});

document.getElementById("binaryToTextBtn").addEventListener("click", function() {
    document.getElementById("binaryToTextForm").style.display = "block";
    document.getElementById("textToBinaryForm").style.display = "none";
    document.getElementById("aboutPage").style.display = "none";
});

document.getElementById("aboutBtn").addEventListener("click", function() {
    document.getElementById("aboutPage").style.display = "block";
    document.getElementById("textToBinaryForm").style.display = "none";
    document.getElementById("binaryToTextForm").style.display = "none";
});

document.getElementById("backToHomeBtn1").addEventListener("click", function() {
    document.getElementById("textToBinaryForm").style.display = "none";
    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("binaryToTextForm").style.display = "none";
});

document.getElementById("backToHomeBtn2").addEventListener("click", function() {
    document.getElementById("textToBinaryForm").style.display = "none";
    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("binaryToTextForm").style.display = "none";
});

document.getElementById("backToHomeBtn3").addEventListener("click", function() {
    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("textToBinaryForm").style.display = "none";
    document.getElementById("binaryToTextForm").style.display = "none";
});

document.getElementById("convertToBinaryButton").addEventListener("click", function() {
    const text = document.getElementById("textInput").value;
    if (!text) {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }

    const binary = text.split("").map(function(char) {
        return char.charCodeAt(0).toString(2).padStart(8, "0");
    }).join(" ");

    document.getElementById("binaryOutput").value = binary;
});

document.getElementById("convertToTextButton").addEventListener("click", function() {
    const binary = document.getElementById("binaryInput").value;
    if (!binary) {
        alert("Masukkan biner terlebih dahulu!");
        return;
    }

    const text = binary.split(" ").map(function(bin) {
        return String.fromCharCode(parseInt(bin, 2));
    }).join("");

    document.getElementById("textOutput").value = text;
});
