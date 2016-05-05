var main = require('../main/main.js');
var fixtures = require('../main/lcdDigits.js');

describe('lcd', function() {
    var inputs;
    var loadAllLcd;
    beforeEach(function () {
        inputs = 910;
        loadAllLcd = fixtures.LCD_Digits();

    });

    describe('unit testing', function () {

        describe('test splitNumbers function', function () {
            it('should print correct number', function () {
                var numbers = [9, 1, 0];
                expect(fixtures.splitNumbers(inputs)).toEqual(numbers);
            });
        });

        describe('test matchLcdDigts function', function () {
            var numbers = [9, 1, 0];
            it('should print correct lcdDigts', function () {
                var lcdDigits = [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']];
                expect(fixtures.matchLcdDigits(loadAllLcd, numbers)).toEqual(lcdDigits);
            });
        });
    });

    describe('integration testing', function () {
        var loadAllLcd;
        var inputs;
        beforeEach(function () {
            loadAllLcd = fixtures.LCD_Digits();
            inputs=910;
        });
        it('should print correct text', function () {
            spyOn(console, 'log');
            main.printReceipt(inputs);
            var expectText =
                '._. ... ._. \n' +
                '|_| ..| |.| \n' +
                '..| ..| |_| \n';
            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});
