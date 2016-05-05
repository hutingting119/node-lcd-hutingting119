function LCD_Digits(){
    return{0:['._.','|.|','|_|'],
        1:['...','..|','..|'],
        2:['._.','._|','|_.'],
        3:['._.','._|','._|'],
        4:['...','|_|','..|'],
        5:['._.','|_.','._|'],
        6:['._.','|_.','|_|'],
        7:['._.','..|','..|'],
        8:['._.','|_|','|_|'],
        9:['._.','|_|','..|']};
}

function splitNumbers(inputs) {
    inputs+='';
    var numbers=inputs.split('');

    for(var i=0;i<numbers.length;i++){
        numbers[i]=parseInt(numbers[i]);
    }
    return numbers;
}

function matchLcdDigits(loadAllLcd,numbers) {
    var lcdDigits=[];
    for(var i=0;i<numbers.length;i++){
        lcdDigits.push(loadAllLcd[numbers[i]]);
    }
    return lcdDigits;
}

function toReceipt(lcdDigits) {
    var output='';
    for(var i=0;i<3;i++){
        for(var j=0;j<lcdDigits.length;j++) {
            output += lcdDigits[j][i] + ' ';
        }
        output+='\n';
    }
    console.log(output);
}

module.exports= {
    splitNumbers:splitNumbers,
    matchLcdDigits:matchLcdDigits,
    toReceipt: toReceipt,
    LCD_Digits: LCD_Digits

}