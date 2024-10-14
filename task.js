var str1="    srujana"
var str2="reddy    "
var trimstr1=str1.trimStart();
var trimstr2=str2.trimEnd();
console.log(trimstr1)
console.log(trimstr2)
var concatstr=trimstr1.concat(trimstr2);
console.log(concatstr)
console.log(concatstr.toUpperCase())


var a="LAPTOP";
var a1=a.slice(2,4);
console.log(a1)
console.log(a1.toLowerCase())


var a="s";
var a1="rujana";
var concat=a.concat(a1)
console.log(concat)
console.log(concat.toUpperCase())
var extract=concat.at(5)
console.log(extract)


var str1="samsung";
var str2="laptop";
var extract1=str1.slice(0,3);
console.log(extract1)
var extract2=str2.slice(3)
console.log(extract2)
var addition=extract1.concat(extract2);
console.log(addition)
var upper=addition.charAt(0).toUpperCase()+addition.slice(1)
console.log(upper)
var lower=upper.slice(0,-1)+addition.charAt(upper.length-1).toUpperCase();
console.log(lower)


var str1=" srujanareddy "
var a=str1.trim();
console.log(a)
var upper=a.charAt(0).toUpperCase()+a.slice(1)
console.log(upper)
var lower=upper.slice(0,-1)+upper.charAt(upper.length-1).toUpperCase();
console.log(lower)
var extract=lower.slice(0,7);
console.log(extract)
var add="katipally"
console.log(add.concat(extract))

var a="hello there, how are you"
console.log(a.indexOf("are"))

