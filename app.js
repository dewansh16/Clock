const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector('.min-hand')
const secHand = document.querySelector('.sec-hand')

function setDate() {
    const time = new Date();

    const second = time.getSeconds();
    console.log(second);
    if (second == 0) {
        secHand.style.transition = "null";
    }
    else {
        secHand.style.transition = "all 0.05s";
        secHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";

    }
    secHand.style.transform = `rotate(${((second / 60) * 360) + 90}deg)`;

    const minute = time.getMinutes();
    console.log(minute);
    minHand.style.transform = `rotate(${((minute / 60) * 360) + ((second / 60) * 6) + 90}deg)`;

    const hour = time.getHours();
    console.log(hour);
    hourHand.style.transform = `rotate(${((hour / 12) * 360) + ((minute / 60) * 30) + 90}deg)`;
}


setInterval(setDate, 1000);