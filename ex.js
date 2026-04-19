/*let todo=[];
let req=prompt("Enter a task you want to add: ");
while(true){
    if(req=="quit"){
        console.log("You quit!");
        break;
    }
    else if(req=="list"){
        console.log("----------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------------------");
        
    }
    else if(req=="add"){
        let task=prompt("Enter your task: ");
        todo.push(task);
        console.log("Task added!");
    }
    else if(req=="delete"){
        let idx=prompt("Enter the deleted task: ");
        todo.splice(idx,1);
    }
    else{
        console.log("Wrong Answer!");
    }
    req=prompt("Enter a task you want to add: ");
}*/
/*const student={
    name: "Shruti",
    age: 19,
    marks: 94.4
}
let student2=["shruti",19,94.4];*/
/*const info={
    shruti:{
        age: 19,
        city:"muz"
    },
    bharti: {
        age: 21,
        city: "jhasi"
    },
    vanshika:{
        age: 20,
        city: "meerut"
    }
};*/
/*let max=prompt("Enter max value: ");
console.log(max);
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("Enter your guess: ");
while(true){
    if(guess=="quit"){
        console.log("You quit!");
        break;
    }
    else if(guess==random){
        console.log("You got it right! your random number is:",random);
        break;
    }
    else if(guess<random){
        guess=prompt("Your ans is to small!");
    }
    else{
        guess=prompt("Your ans is large!");
    }
    /*else{
        guess=prompt("Try again: ");
    }
}*/
/*function diceRoll(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}
diceRoll();*/
/*function nfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
nfo("Shruti",19);
nfo("Bharti",21);*/
/*function multiplication(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} * ${i}=${n*i}`);
    }
}
multiplication(9);*/
/*function getSum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
getSum(6);*/
/*let str=["hello","hi","bye","?"]
function concat(str){
    let sum="";
    for(let i=0;i<str.length-1;i++){
        sum+=str[i];
    }
    console.log(sum);
}
concat(str);*/
/*function aaa(a,b){
    let sum=a+b;
    console.log(sum);
}*/
/*function outerFunc(){
    let x=2;
    let y=8;
    function innerFun(){
    let a=90;
        console.log(x);
    }
    console.log(a);
}*/
/*const classInfo={
    shruti:{
        age:19,
        cgpa:9
    },
    bharti:{
        age:21,
        cgpa:9.5
    },
    vanshika:{
        age:20,
        cgpa:10
    }
};*/
/*let m=function(a,b){
    return a+b;
}
m(9,9);*/
/*const student={
    name:"Shruti",
    age:19,
    eng:99,
    math:90,
    science:93,
    getAvg(){
        let avg=(this.eng+this.math+this.science)/3;
        console.log(`${this.name} average is ${avg}`);
    }
}
function getIun(){
    console.log(this);
}*/
//ARROW FUNCTION
/*const mult=(x,y)=>{
    console.log(x*y);
}*/
//SET TIMEOUT
/*console.log("Hi,There!");
setTimeout(()=>{
    console.log("Udan");
},3 000);
console.log("Welcome to ");*/
//SET INTERVAL
/*let id=  setInterval(()=>{
    console.log("I am Shruti Kashyap!");
},2000);*/
//THIS IN ARROW FUNCTION
/*const student={
    name:"Shruti",
    age:19,
    prop:this,
    getName: function(){//GLOBAL SCOPE
        console.log(this);
        return this.name;
    },
    getAge:()=>{
        console.log(this);//PARENT SCOPE
        return age;
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log(this);
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);
        },2000);
    }
}*/
//const square=(n)=>n*n;

/*let r=setInterval(()=>{
    console.log("Hello!");
    },2000);
    
    setTimeout(()=>{
        clearInterval(r);
    },10000);*/
    /*const arrayAverage=(arr)=>{
        let total=0;
        for(let number of arr){
            total+=number;
        }
        return total/arr.length;
    };
    let arr=[1,2,3,4,5,6];
    console.log(arrayAverage(arr));*/
    /*const isEven=(n)=>{
        if(n%2==0){
            console.log("Even")
        }else{
            console.log("odd");
        }
    }
    isEven(9);*/
    /*const object={
        message:'Hello World!',
        logMessage(){
            console.log(this.message);
        }
    }
    setTimeout(object.logMessage,1000);*/
    /*let length=4;
    function callBack(){
        console.log(this.length);
    }
    const object={
        length:5,
        method(callBack){
            callBack();
        },
    };
    object.method(callBack,1,2);*/
    //ARRAY METHODS 
    //->forEach=>
       /* let arr=[1,2,3,4,5,6];
        arr.forEach(function(el){
            console.log(el);
        });
        arr.forEach((el)=>{
            console.log(el);
        });*/
       /* let arr=[{
            name:"Shruti",
            age:19,
            hobbie:"cooking"
        },
        {
            name:"Antra",
            age:18,
            hobbie:"painting"
        }    
        ];
        arr.forEach(function(el){
            console.log(el.age);
        });*/
        /*let arr=[1,22,33,12,34];
        let divison=arr.map((arr)=>arr-2);*/
        /*let arr=[0,2,22,89,45];
        let ran=arr.filter((arr)=>arr%2==0);*/
        /*let arr=[1,2,3,4,5];
        let ans=arr.reduce((acumilt,el)=>(acumilt+el));*/
        //Default Parameter
        /*function fun(a=2,b){
            return a+b;
        }
        fun(2);*/
        //Spread Function
        /*console.log(..."Shruti Kashyap");*/
        //Rest Function
        /*function min(msg,...arg){
            console.log(msg);
            return arg.reduce((min,el)=>{
            if(min>el){
                return el;
            }
            else{
                return min;
            }
        });
        }*/
       //Destructure
       /*let arr=["a","b","c","d","e"];
       let[winner,runnerup]=arr;
       console.log(winner,runnerup);*/
       //Destructure for object
       /*const student={
        name:"Shruti",
        age:19,
        section:"b",
        marks:98
       };
       let{age,marks,...others}=student;
       console.log(age,marks,others);*/