const NUMBERS = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
};
module.exports = function toReadable(number) {

    let numberToString = number + '';
    let lengthNumber = numberToString.length;
    let res = [];

    if (lengthNumber === 3) {
        const howManyHundreds = number % 100;
        res.push(`${NUMBERS[numberToString[0]]} hundred`);
        number = howManyHundreds ? howManyHundreds : '';
        numberToString = number + '';
        lengthNumber = numberToString.length;
    }
    if (lengthNumber === 2 && number > 20) {
        const howManyDozens = numberToString % 10;
        res.push(`${NUMBERS[numberToString[0] + '0']}`);
        if (howManyDozens) res.push(NUMBERS[howManyDozens]);
    }
    if (lengthNumber === 1 || (number <= 20 && lengthNumber !== 0)) {
        res.push(`${NUMBERS[number]}`);
    }

    return res.join(' ');
}

