
const container=document.querySelector(".container");


function suffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i+"st";
    }
    if (j == 2 && k != 12) {
        return i+"nd";
    }
    if (j == 3 && k != 13) {
        return i+"rd";
    }
    return i+"th";
}

var open=0;

function openRight(){

    if(open==0){
    document.getElementById("myoutput").style.width="40%";
    document.getElementById("page-wrapper").style.width="50%";
    document.getElementById("page-wrapper").style.marginLeft="0";
    document.getElementById("myoutput").style.marginLeft="60%";
    open=1;}

    else if(open==1){
        document.getElementById("myoutput").style.width="2%";
        document.getElementById("page-wrapper").style.width="auto";
        document.getElementById("page-wrapper").style.marginLeft="auto";
        document.getElementById('out').innerHTML='';
    open=0;
    }
}

function myMenu() {
  
  var navMenu=document.getElementById('myheader');
  navMenu.classList.toggle('myhead');
}


/*$(document).ready(function(){

    $('.menuBtn').click(function(){
        $('.header').toggleClass('navbar');
    })
})*/


var ARRAY_SIZE = 150;
var animationSpeed=40;
var arr=[]; var bars;
var arrCopy=[];
var elements=[];
const pause=document.getElementById('pause');
const stop=document.getElementById('stop');
let run=true;
let time=0;



pause.disabled=true;
stop.disabled=true;


pause.addEventListener('click',()=>{
    run=((run===true)?false:true);
    if(run===true){
            stop.disabled=false;
            pause.children[0].className='fa fa-pause';}
    else if(run===false){
        stop.disabled=true;
        pause.children[0].className='fa fa-play';
    }
})


stop.addEventListener('click',()=>{
    time=1;
    for(p=0;p<ARRAY_SIZE;p+=1){
        bars[p].style.height=arrCopy[p]*3;
        bars[p].style.backgroundColor="rgb(0,183,255)";
        arr[p]=arrCopy[p];
    }
    document.getElementById('out').innerHTML='';
    
})


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function pauseHandler () {
    while (run == false){
        await new Promise((resolve) =>
setTimeout(()=>{
resolve();},1));
    }
    return;
}

function generateBars(){

container.innerHTML="";
arr=[];arrCopy=[];
for(let i=0;i<ARRAY_SIZE;i+=1){

const value=Math.floor(Math.random()*100)+ 1;
const bar=document.createElement("div");
arr.push(value);
arrCopy.push(value);
bar.classList.add("bar");
bar.style.height=`${value*0.5}vh`;
bar.style.transform=`translateX(${i*0}px)`;
const barLabel=document.createElement("label");
barLabel.classList.add("bar_id");
bar.appendChild(barLabel);
container.appendChild(bar);}
bars=document.querySelectorAll(".bar");
}


arraySizeSliderElement.addEventListener('input', (e) => {
    ARRAY_SIZE = e.target.value;

    generateBars();
})

speed.addEventListener('input',(e)=>{
    animationSpeed=e.target.value;
})

generateBars();
function generate(){
window.location.reload();}







let bubble=document.getElementById("bubble");
let selection=document.getElementById("selection");
let insertion=document.getElementById("insertion");
let merge=document.getElementById("merge");
let quick=document.getElementById("quick");
let algo= document.getElementById("algo");
let bSV=document.getElementById("bSV");
let sSV=document.getElementById("sSV");
let iSV=document.getElementById("iSV");
let mSV=document.getElementById("mSV");
let qSV=document.getElementById("qSV");


bubble.addEventListener('click',async function(){
    bSV.style.backgroundColor="lightgrey";
    sSV.style.backgroundColor="crimson";
    iSV.style.backgroundColor="crimson";
    mSV.style.backgroundColor="crimson";
    qSV.style.backgroundColor="crimson";

    bs.style.display="flex";
    ss.style.display="none";
    is.style.display="none";
    ms.style.display="none";
    qs.style.display="none";

    bubble.disabled=true;
    arraySizeSliderElement.disabled=true;
    pause.disabled=false;
    stop.disabled=true;
    speed.disabled=false;
    pause.children[0].className="fa fa-pause";
    await bubbleSort(speed.max-speed.value);
    bubble.disabled=false;
    stop.disabled=false;
    arraySizeSliderElement.disabled=true;
    speed.disabled=true;
    pause.disabled=true;
    
    
})

select.addEventListener('click',async function(){
    bSV.style.backgroundColor="crimson";
    sSV.style.backgroundColor="lightgrey";
    iSV.style.backgroundColor="crimson";
    mSV.style.backgroundColor="crimson";
    qSV.style.backgroundColor="crimson";
    bs.style.display="none";
    ss.style.display="flex";
    is.style.display="none";
    ms.style.display="none";
    qs.style.display="none";


    btn1.disabled=true;
    arraySizeSliderElement.disabled=true;
    pause.disabled=false;
    stop.disabled=true;
    speed.disabled=false;
    pause.children[0].className="fa fa-pause";
    await SelectionSort(speed.max-speed.value);
    btn1.disabled=false;
    stop.disabled=false;
    arraySizeSliderElement.disabled=true;
    speed.disabled=true;
    pause.disabled=true;

    
})

insertion.addEventListener('click',async function(){
    bSV.style.backgroundColor="crimson";
    sSV.style.backgroundColor="crimson";
    iSV.style.backgroundColor="lightgrey";
    mSV.style.backgroundColor="crimson";
    qSV.style.backgroundColor="crimson";
    bs.style.display="none";
    ss.style.display="none";
    is.style.display="flex";
    ms.style.display="none";
    qs.style.display="none";

    btn1.disabled=true;
    arraySizeSliderElement.disabled=true;
    pause.disabled=false;
    stop.disabled=true;
    speed.disabled=false;
    pause.children[0].className="fa fa-pause";
    await InsertionSort(speed.max-speed.value);
    btn1.disabled=false;
    stop.disabled=false;
    arraySizeSliderElement.disabled=true;
    pause.disabled=true;
    speed.disabled=true;

    
})

merge.addEventListener('click',async function(){
    bSV.style.backgroundColor="crimson";
    sSV.style.backgroundColor="crimson";
    iSV.style.backgroundColor="crimson";
    mSV.style.backgroundColor="lightgrey";
    qSV.style.backgroundColor="crimson";
    bs.style.display="none";
    ss.style.display="none";
    is.style.display="none";
    ms.style.display="flex";
    qs.style.display="none";

    arraySizeSliderElement.disabled=true;
    pause.disabled=false;
    speed.disabled=false;
    stop.disabled=true;
    time=0;
    pause.children[0].className="fa fa-pause";
    await MergeSort(0,ARRAY_SIZE-1);
    time=0;
    merge.disabled=false;
    stop.disabled=false;
    arraySizeSliderElement.disabled=true;
    speed.disabled=true;
    pause.disabled=true;

    
})

quick.addEventListener('click',async function(){
    bSV.style.backgroundColor="crimson";
    sSV.style.backgroundColor="crimson";
    iSV.style.backgroundColor="crimson";
    mSV.style.backgroundColor="crimson";
    qSV.style.backgroundColor="lightgrey";
    bs.style.display="none";
    ss.style.display="none";
    is.style.display="none";
    ms.style.display="none";
    qs.style.display="flex";

    btn1.disabled=true;
    arraySizeSliderElement.disabled=true;
    speed.disabled=false;
    pause.disabled=false;
    stop.disabled=true;
    time=0;
    pause.children[0].className="fa fa-pause";
    await quickSort(0,ARRAY_SIZE-1,speed.max-speed.value);
    pause.children[0].className="fa fa-play";
    time=0;
    btn1.disabled=false;
    stop.disabled=false;
    speed.disabled=true;
    arraySizeSliderElement.disabled=true;
    pause.disabled=true;

    
})





