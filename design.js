var n1=parseInt(prompt("Enter the first number"));
var n2=parseInt(prompt("Enter the second number"));
var op=prompt("Enter the operator");
switch(op)
{
    case '+':document.getElementById("result").textContent=(n1+n2);break;
    case '-':document.getElementById("result").textContent=(n1-n2);break;
    case '*':document.getElementById("result").textContent=(n1*n2);break;
    case '/':document.getElementById("result").textContent=(n1/n2);break;
}