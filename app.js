/*let gameSeq=[];
let userSeq=[];

 let started=false;
 let level=0;
 let btns=["yellow","green","red","purple"];
let h3=document.querySelector("h3");
 document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
 });
 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
 }

 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
 }
 function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
 }
 function checkAns(idx){
    //console.log("curr level:",level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game Over! Your score was<b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        })
        reset();
    }
 }
function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}*/
let h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color; 
            resolve("Color changed!");
        },delay);
    })
}
changeColor("red",1000)
.then(()=>{
    console.log("red color was changed!");
    return changeColor("green",1000);
    })
    .then(()=>{
        console.log("green color was changed!");
        return changeColor("pink",1000);
    })
    then(()=>{
        console.log("pink color was changed!");
        return changeColor("purple",1000);
    })
    /*.catch((error)=>{
        console.log(color," changed!");
        return changeColor("blue",1000);
    })*/

/*function saveToDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }
}
saveToDb("apna college",
    ()=>{
        console.log("Success: Your data was saved!");
        saveToDb("Hello there",
        ()=>{
            console.log("Success2:Your data was saved!");
        },
        ()=>{
            console.log("Failure2: Your data was not saved!");
        }
        );
},
    ()=>{
        console.log("Failure: Your data was not saved!");
    });*/
    /*function saveToDb(data){
        return new Promise((success,failure)=>{
            let internetSpeed=Math.floor(Math.random()*10)+1;
            if(internetSpeed>4){
                success("Success: Your data was saved!");
            }else{
                failure("Failure: Weak connection, Your data was not saved!");
            }
        });
    }
    saveToDb("shruti")
    .then((result)=>{
        console.log("Success1: Your data was saved!");
        console.log("Result of Promise:",result);
        return saveToDb("Hello");
    })
    .then((result)=>{
        console.log("Success2: Your 2nd data was saved!");
        console.log("Result of Promise:",result);
            return saveToDb("hi there");
        })
        .then((result)=>{
            console.log("Success3: Your 3rd data was saved!");
            console.log("Result of promise:", result);
            })
    .catch((error)=>{
        console.log("Failure: Weak Connection!");
    });*/