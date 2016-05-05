var fixtures  = require('./lcdDigits');

exports.printReceipt = function (input) {
    var loadAllLcd =fixtures .LCD_Digits();
    var numbers = fixtures .splitNumbers(input);
    var lcdDigits = fixtures .matchLcdDigits(loadAllLcd, numbers);

    fixtures.toReceipt(lcdDigits);
}