window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const model = params.get("model");
    const price = params.get("price");
    const conTextNB1 = document.getElementById("conTextNB1");

    const messageElement = document.createElement("h2");
    messageElement.style.color = "#4CAF50";
    messageElement.className = "price";

    messageElement.innerText = `Поздравляю вас с покупкой ${model} за ${price}`;

    conTextNB1.appendChild(messageElement);
};
