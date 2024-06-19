document.onreadystatechange = function(event) {
    if (document.readyState !== "complete") return;
    const button = document.querySelector("button");
    button.addEventListener("click", drawCard);
    drawCard();
};

function drawCard() {
    const randomSuit = chooseRandomItemFrom(getSuits());
    const randomFaceValue = chooseRandomItemFrom(getFaceValues());
    // grab top and bottom suits
    const suitSpans = document.querySelectorAll(".suit");
    for (const span of suitSpans) {
        span.textContent = randomSuit.label;
        span.style.color = randomSuit.color;
    }
    // grab face value
    const faceValueH1 = document.querySelector(".face-value");
    faceValueH1.style.color = randomSuit.color;
    faceValueH1.textContent = randomFaceValue;
};

function chooseRandomItemFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
};

function getFaceValues() {
    return ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
};

function getSuits() {
    return [{
        label: "♥",
        color: "red"
    }, {
        label: "♣",
        color: "black"
    }, {
        label: "♠",
        color: "black"
    }, {
        label: "♦",
        color: "red"
    }];
};
