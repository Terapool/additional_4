module.exports = function multiply(first, second) {
     var a, b; // a must be longer than b
    var resStr ='';

    if (first.length >= second.length) {
        a = first;
        b = second;
    } else {
        b = first;
        a = second;
    }
    var tempMultiply = [];

    for (var i = b.length - 1; i > -1; i--) {
        var x = b.length - 1 - i;
        var y = 0;
        for (var j = a.length - 1; j > -1; j--) {
            var res = a[j] * b[i];
            if (tempMultiply[x + y] === undefined) {
                tempMultiply[x + y] = res;
            } else {
                tempMultiply[x + y] = tempMultiply[x + y] + res;
            }
            y++;
        }
    }
    for (var i =0; i < tempMultiply.length; i++) {
       var str =  '' + tempMultiply[i];
       var here = str[str.length-1];
       var there = tempMultiply[i] - parseInt(here);
       there = there/10;
        tempMultiply[i] = here;
        if (there > 0) {
            if (i === tempMultiply.length - 1) {tempMultiply.push(there)} else {tempMultiply[i+1] = tempMultiply[i+1] + there;}
        }

        console.log(here, there);
    }
    for (var i = tempMultiply.length - 1; i > -1; i--) {
        resStr = resStr +'' + tempMultiply[i];
    }

return resStr;
}
