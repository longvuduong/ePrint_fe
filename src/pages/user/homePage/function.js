function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber;
    const interval = window.setInterval(updateNumber, 17);
    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval);
        } else {
            let inc = Math.ceil(finalNumber / (duration / 17));
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber;
                clearInterval(interval);
            } else {
                currentNumber += inc;
            }
            callback(currentNumber);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    animateNumber(10, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        document.getElementById('exp-count').innerText =
            formattedNumber < 10 ? formattedNumber : `${formattedNumber} +`;
    });

    animateNumber(6000, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        document.getElementById('customer-count').innerText =
            formattedNumber < 6000 ? formattedNumber : `${formattedNumber} +`;
    });

    animateNumber(9000, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        document.getElementById('order-count').innerText =
            formattedNumber < 9000 ? formattedNumber : `${formattedNumber} +`;
    });
    animateNumber(100, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        document.getElementById('satify-count').innerText =
            formattedNumber < 100 ? formattedNumber : `${formattedNumber} %`;
    });
});
