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

export const handleContentLoaded = () => {
    animateNumber(7, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        const element = document.getElementById('year-count');
        if (element) {
            element.innerText = formattedNumber < 7 ? formattedNumber : `${formattedNumber} NĂM`;
        }
    });

    animateNumber(1000, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        const element = document.getElementById('client-count');
        if (element) {
            element.innerText = formattedNumber < 1000 ? formattedNumber : `${formattedNumber} +`;
        }
    });

    animateNumber(3000, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        const element = document.getElementById('project-count');
        if (element) {
            element.innerText = formattedNumber < 3000 ? formattedNumber : `${formattedNumber} +`;
        }
    });
};

document.addEventListener('DOMContentLoaded', handleContentLoaded);
