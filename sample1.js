let result= document.querySelector(".result");
let firstnumber=document.querySelector("#Firstnumber")
let Untile=document.querySelector("#Untile")
let btnresult = document.querySelector(".btn")
let error =document.querySelector(".error")

btnresult.addEventListener("click",e=>{
    var FirstNumber=firstnumber.value;
    var SecondNumber =Untile.value;


    if(+SecondNumber> +FirstNumber){
        function isPrime(FirstNumber,SecondNumber){
            for(i=FirstNumber;i<=SecondNumber;i++){
                let d = parseInt(i ** 0.5) + 1;
                var c =true;
                for (j = 2; j < d; j++) {
                    if (i % j == 0) {
                      c = false;
                      break;
                    }
                  }
                  if (c) {
                    result.innerHTML +=`<p>_${i}</p>`;
                  }
            }
        }
        isPrime(+FirstNumber,+SecondNumber)
        error.textContent="";
    }else{
        error.textContent = `Your second number must be big of first number`
    }
   
})


























// let n  = 90 ; //numbers
// let isPrime = true ; //every number is is prime if dont find it 
// let i = 2 ; //1 is not isPrime and begining from 2 


// while(i<n){
//     if(n % i ==0)
//     {
//         isPrime = false ;
//         break
//     }
//     i++;
// }
// console.log(n,isPrime)

// ==============================================
// let n = 100000071;
// isPrime = true ;
// let i = 2 ;
// // 2 ====>n**0.5 until n**0.5 ==>n-1 is same to underestant it number is equal
// while(i < parseInt(n**0.5)+1){
//     if(n % i == 0)
//     {
//         isPrime = false;
//         console.log(i)
//         break;//if find numer it condition is true break of loop and speed my function
//     }
//     i++ ;

// }
// console.log(n,isPrime);
// =========================================

// function isPrime(n){

//     let isPrime = true;
//     let i = 2 ;
//     while(i < parseInt(n**0.5)+1){
//         if(n % i == 0 ){
//             isPrime = false ;
//             break;
//         }
//         i++;
//     }
//     return isPrime
// }
// let a = 8 ;
// let b = 70 ; 
// let c = 100007
// console.log(a,isPrime(a))
// console.log(b,isPrime(b))
// console.log(c,isPrime(c))












