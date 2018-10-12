$(function () {
    let randomFaceValue = Math.floor(Math.random() * 13 + 1);
    let randomDressing = Math.floor(Math.random() * 4 + 1);
    let dressing = function () {
        switch (randomDressing) {
            case 1:
                $(".cardLegend h1").css("color", "#D2555A");
                return "img/hearts.svg";
            case 2:
                $(".cardLegend h1").css("color", "#464655");
                return "img/clubs.svg";
            case 3:
                $(".cardLegend h1").css("color", "#D2555A");
                return "img/diamonds.svg";
            case 4:
                $(".cardLegend h1").css("color", "#464655");
                return "img/spades.svg";
            default:
                return "";
        }
    };
    $(".myCardTop img").attr("src", dressing);
    $(".myCardBottom img").attr("src", dressing);
    $(".cardLegend h1").text(function () {
        if (randomFaceValue <= 10) {
            return randomFaceValue;
        } else {
            switch (randomFaceValue) {
                case 11:
                    return "J";
                case 12:
                    return "Q";
                case 13:
                    return "K";
                default:
                    return "weird shit";
            }
        }
    });
    $(".myCard").show("fade");
});