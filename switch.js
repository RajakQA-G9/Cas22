'use strict';

let a = Number(prompt("a?"));

switch(a) {
	case 0:
  	alert("a = 0");
    break;
  case 1:
  	alert("a = 1");
    break;
  case 2:
  case 3:
  	alert("a is 2 OR 3");
    break;
  default:
  	alert("Something else");
}


let a = Number(prompt('a?'));

if (a==0) {
	alert ('a=0')
} else if (a==1) {
	alert ('a=1')
} else if (a==2 || a==3) {
	alert ('a is 2 or 3')
} else {
	alert ('default')
}

let a = Number(prompt("a?"));
let message;

if (a === 0) {
  message = "a=0";
} 
else if (a === 1)  {
  message = "a=1";
}
else if (a === 2 || a === 3) {
  message = "a is 2 OR 3";
} else {
	message = "default";
}

alert(message);



let a = Number (prompt ("a?"));

switch (a) {
case 1:
case 2:
case 3:
alert ("a = 1, 2 or 3");
break;
case 4:
alert ("a = 4");
break;
case 5:
alert ("a = 5");
break;
default:
alert ("a = nesto drugo");
}

let a = Number(prompt("a?"));

switch (a) {
case 5:
  alert("a = 5");
  break;
case 4:
  alert("a = 4");
  break;
case 2:
case 3:
case 1:
  alert("a = 1, 2 or 3");
  break;
default:
	alert("a = nesto drugo");
}
