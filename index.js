function writeCards(names, event) {
    let message = [];
    for (let i = 0; i < names.length; i++) {
        message[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    };
    return message;
}
writeCards;
console.log(message);

function countDown() {
    let countDown = 10;
        while (countDown >= 0) {
            console.log(countDown--);
        }
}