//INPUTS:
// write a function wrap. Takes 2 arguments: a string and a column number.

//OUTPUTS:
//returns a string. String has line breaks. no line is longer than the column number.

//HINT: Hint: String.prototype.indexOf or String.prototype.lastIndexOf might be useful here.

function wrap(string, columnNum){ //columnNum = 5
    debugger;
    // const newString = string.split(' ').join('');
    
    if(string[columnNum]){
        const firstHalf = string.slice(0, columnNum * 2 - 1);
        const secondHalf = string.slice(columnNum * 2);
        console.log('secondHalf', secondHalf);

        return firstHalf + '\n' + secondHalf;
    } else {
        return string;
    } 
}

console.log(wrap('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15', 5));

module.exports = wrap