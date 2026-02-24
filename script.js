/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 * 
 * python -m http.server
 * 
 */

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
    let i = str.length;
    let words= 0;
    if (str[i]==y||str[i]==z){
        words++;
    }
    while (i>0){
        if (str[i]==" "){
            if (str[i-1]=="z"||str[i-1]=="y"){
                words=words+1;
            } 
        i--;
        }
    }
    return words;
    }
}