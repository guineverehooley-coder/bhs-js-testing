/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 * 
 * python -m http.server
 * 
 */

const { jsxs } = require("react/jsx-runtime");

function sleep_in(weekday,vacation){
    if(!weekday&&!vacation||!weekday&&vacation||weekday&&vacation){
        return true;
    }else{
        if(weekday&&!vacation){
        return false;
    }    
        }

}


  
function monkey_trouble(a_smile,b_smile){
if (a_smile&&b_smile||!a_smile&&!b_smile){
    return true;
}else{
    if(!a_smile&&b_smile||a_smile&&!b_smile){
        return false;
    }
}
}

function string_times(str,num){
    let answer="";
    for(let i=0;i<num;i++){
        answer += str;
    }
    return answer;
    
}
function front_times(str,num){
    let result = "";
    let answer = str.substring(0,3);
    for(let i=0;i<num;i++){
        result += answer;
    }
    return result;
}

function string_bits(str){
    let result = "";
    for(let i=0;i<str.length;i=i+2){
        result += str.substring(i,i+1);
    }
    return result;
}

function caughtSpeeding(num,birthday){
    if (num<=60&&!birthday||num<=65&&birthday){
        return 0;
    }else if(num>60&&num<=80&&!birthday||num>65&&num<=85&&birthday){
    return 1;
    }else{
        if(num>80&&!birthday||num>80&&birthday){
        return 2;
    }
}
}


function fizz_buzz(num){
if(num % 3 == 0 && num % 5 == 0){
    return "FizzBuzz";
}else if(num % 3 == 0){
    return "Fizz";
}else if (num % 5 == 0){
    return "Buzz";
}else{
    return num + "!" ;
}
}

function specialEleven(num){
    if (num%11==0||(num-1)%11==0){
        return true;
    }else{
        return false;
    }
}

function withoutDoubles(num1,num2,noDoubles){
    if(num1==num2&&noDoubles){
         num1= num2 ==6 ? 1:num1+1
        return num1 + num2;
    }else if (num1 ==num2&&noDoubles){
         return num1+num2+1;   
    }else if (num1==num2&&!noDoubles||num1!=num2&&!noDoubles||num1!=num2&&noDoubles){
        return num1+num2;
    }else if (num1==6&&num2==6&&noDoubles){
        return 7;
    }

}
function left2(str){
     let word= "";
       word= str.substring(2)+ str.substring(0,2)
         return word;
    }
  

    function firstLast6(arr){
        if (arr[0]==6 || arr[arr.length-1]==6){
    return true;
}else{
    return false;
    }
}

function has23(arr){
if (arr[0]==3||arr[0]==2||arr[1]==3||arr[1]==2){
    return true;
}else{
    return false;
}
}

function fix23(arr){
    if (arr[0]==2 && arr[1]==3){
        arr [1]=0 ;
    }
 if(arr[1]==2 && arr[2]==3){
    arr[2]=0;
        }
    return arr;
    }

 function countYZ(str){
    let i = str.length-1;
    let words= 0;
    if (str[i].toUpperCase()=="Y"||str[i].toUpperCase()=="Z"){
        words++;
    }
    while (i>0){
        if (str[i]==" "){
            if (str[i-1].toUpperCase()=="Z"||str[i-1].toUpperCase()=="Y"){
                words=words+1;
            } 
        }
        i--;
    }
    return words;
    }

function endOther(str1,str2){
    let i= str1.length-1;
    let j= str2.length-1;
    while(i>=0&&j>=0){
        if(str1[i].toLowerCase()!=str2[j].toLowerCase()){
            return false;
        }
        i--;
        j--;
    }
    return true;
}

function starOut(str){
    let result= "";
    for(let i=0; i<str.length;i++){
        if(str[i]!="*"&&str[i-1]!="*"&&str[i+1]!="*"){
            result+=str[i]
        }
    }
    return result;
}

function getSandwich(bread) {
    let sand = bread.indexOf("bread");
    let wich = bread.lastIndexOf("bread");
    let result = "";
    if (sand == -1||sand == wich){
        return result;
    }else{
        return result = bread.substring(sand+5,wich);
    }
}
 function canBalance(arr){
    let sum1 = 0;
    let sum2 = 0;
    for(let i=0; i < arr.length; i++){
        sum1 +=arr[i]
        sum2=0;
        for(let j=i+1; j < arr.length; j++){
            sum2 +=arr[j];
        }
        if(sum1==sum2){
            return true;
        }
    }
    return false;
}

function countClumps(arr){
    let numClumps= 0;
    let clumpStart= arr[0];
    let clumpSize=  1;
    for (let i=1 ; i < arr.length; i++){
        if (arr[i]==clumpStart){
            clumpSize += 1;
        }else{
            clumpStart= arr[i];
            if(clumpSize >=2){
                numClumps += 1;
            }
            clumpSize = 1;
        }
    }
    if(clumpSize >=2){
        numClumps += 1;
    }
    return numClumps;
}

function sameEnds(str) {
let result= "";
for(let i=0; i <=str.length/2;i++){
    if (str.substring(0,i) == str.substring(str.length - i)){
        result = str.substring(0,i)
    }
}
  return result;
}
