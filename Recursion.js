


//fibonacci series
//sum the last two number then return it 
//f(0)=0;
//f(1)=1;
//f(0)=0+f(1)=1;
function fib(n){
    if(n==0)return 0;
    if(n==2||n==1)return 1;
    return fib(n-1)+fib(n-2);    
}
let n=10;
console.log(fib(n));

//10(11)/2=55;


//power of 4

var isPowerOfFour = function(n) {
    if (n === 0) return false;
    if (n === 1) return true;
    
    if (!(n%4)) return isPowerOfFour(n/4);
    
    return false;
};
let n=32;
console.log(isPowerOfFour(n));




//Newlecture 2

//gcd of given number

function gcd(a,b){
//any one of the number are the zero we have to return the other number    
if(a==0){
    return b;
}
return gcd(a,a%b);
}
let a=-60;
let b=36;
console.log(gcd(a,b));

function gcd(a,b){
//Ensure a and b are positive integer
a=Math.abs(a);
b=Math.abs(b);
//apply the eulidean algorithm    
    while(b!=0){
    temp=b;
    b=a%b;
    a=temp;
}
return a;
}

//sumofdigits

// //
// function sumofdigits(n){
// if(n==0)
// return 0;
// return (n%10+sumofdigits((n/10)))
// sumofdigits(n%10+n/10);
// }
let n=16;
console.log(sumofdigits(n));

function sumofdigits(number){
let sum=0;
let num=Math.abs(number);
while(num>0){
    const digit=num%10;
    sum+=digit;
    num=Math.floor(num/10);
}
return sum;
}
let number=98;
console.log(sumofdigits(number));

