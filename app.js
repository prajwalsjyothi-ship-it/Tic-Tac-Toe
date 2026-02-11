let boxes=document.querySelectorAll(".box");
let resetbtn=document.getElementById("reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.getElementById("msg");
let newgamebtn=document.getElementById("newbutton");

let turnO=true;
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const _resetgame=()=>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");
};
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }

        box.disabled=true;
        checkwinner();
        
    });
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations! WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

const checkwinner=()=>{
    for(let pattern of winPatterns){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1 !="" && posval2!="" && posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                showWinner(posval1);
            }
        }
    }
}
newgamebtn.addEventListener("click",_resetgame);
resetbtn.addEventListener("click",_resetgame);