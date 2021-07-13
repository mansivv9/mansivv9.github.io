 


async function bubbleSort(animationSpeed){
    stop.disabled=false;
    time=0;

var k=0;
var result=[];var text="";
for(var i=0;i<bars.length;i+=1){
for(var j=0;j<bars.length-1-i;j+=1){
    
bars[j].style.backgroundColor="pink";
bars[j+1].style.backgroundColor="red";
await new Promise((resolve) =>
setTimeout(()=>{
resolve();},speed.max-speed.value));


var val1=arr[j];
var val2=arr[j+1];


await new Promise((resolve)=>
setTimeout(()=>{
resolve();},speed.max-speed.value));

if(val1>val2){
    
var temp1=bars[j].style.height;
var temp2=arr[j];

bars[j].style.height=bars[j+1].style.height;
bars[j+1].style.height=temp1;
arr[j]=arr[j+1];
arr[j+1]=temp2;}

if(run == false) {  
                await pauseHandler();
            }

bars[j].style.backgroundColor="skyblue";
bars[j+1].style.backgroundColor="skyblue";
if(time == 1) 
   break;

}
if(time==1){
    for(p=0;p<ARRAY_SIZE;p+=1){
        bars[p].style.height=arrCopy[p]*3;
        bars[p].style.backgroundColor="rgb(0,183,255)";
        arr[p]=arrCopy[p];
    }
    document.getElementById('out').innerHTML='';
    break;}
await new Promise((resolve)=>
setTimeout(()=>{
resolve();},speed.max-speed.value));

bars[bars.length-1-i].style.backgroundColor="lightgreen";

result.push("The " +suffix(i+1) +" largest element after "+suffix(i+1)+" "+"pass is: "+arr[bars.length-1-i]);
text+=result[i]+ "<br>";
document.getElementById("out").innerHTML=result[i];
}


if(time==0)
    document.getElementById("out").innerHTML=text;

else if (time==1)time=0;
    
}



//selection sort

async function SelectionSort(animationSpeed){
    stop.disabled=false;
    time=0;
//let bars=document.querySelectorAll(".bar");

var k=0;
var result=[];var text="";
for(var i=0;i<bars.length;i+=1){
k=i;
bars[i].style.backgroundColor="pink";
for(var j=i+1;j<bars.length;j+=1){
bars[j].style.backgroundColor="red";

await new Promise((resolve) =>
setTimeout(()=>{
resolve();},speed.max-speed.value));

if(run==false)
await pauseHandler();


var val1=arr[j];
var val2=arr[k];

if(val1<val2){
if(k!==i){
bars[k].style.backgroundColor="skyblue";}
k=j;
}

else{
bars[j].style.backgroundColor="skyblue";}

if(time==1)break;

}

var temp1=bars[k].style.height;
var temp2=arr[k];

if(time==1){
    for(p=0;p<ARRAY_SIZE;p+=1){
        bars[p].style.height=arrCopy[p]*3;
        bars[p].style.backgroundColor="rgb(0,183,255)";
        arr[p]=arrCopy[p];
    }
    document.getElementById('out').innerHTML='';
    break;
}


bars[k].style.height=bars[i].style.height;
bars[i].style.height=temp1;
arr[k]=arr[i];
arr[i]=temp2;

await new Promise((resolve)=>
setTimeout(()=>{
resolve();},speed.max-speed.value));

bars[k].style.backgroundColor="skyblue";
bars[i].style.backgroundColor="green";
result.push("The " +suffix(i+1) +" smallest element after "+suffix(i+1)+" "+"pass is: "+arr[i]);
text+=result[i]+ "<br>";
document.getElementById("out").innerHTML=result[i];
}
if(time==0)document.getElementById("out").innerHTML=text;
else if(time==1)time=0;

}


//insertion sort
async function InsertionSort(animationSpeed){

    stop.disabled=false;
    time=0;

var result=[];var text="";

bars[0].style.backgroundColor="lightgreen";
for(var i=1;i<bars.length;i+=1){
var j=i-1;
var temp1=arr[i];
var temp2=bars[i].style.height;
bars[i].style.backgroundColor="pink";
document.getElementById("out").innerHTML="The element selected is: "+arr[i];
await new Promise((resolve) =>
setTimeout(()=>{
resolve();},speed.max-speed.value));
if(arr[j]<temp1)
document.getElementById("out").innerHTML=arr[j] + "<"+temp1 +" So no move";

while(j>=0&&arr[j]>temp1){
document.getElementById("out").innerHTML=arr[j] + ">"+temp1 +" So move the element";
//bars[j].style.backgroundColor="red";

await new Promise((resolve) =>
setTimeout(()=>{
resolve();},speed.max-speed.value));

if(run==false)
    await pauseHandler();

bars[j+1].style.height=bars[j].style.height;
arr[j+1]=arr[j];
j=j-1;
await new Promise((resolve) =>
setTimeout(()=>{
resolve();},speed.max-speed.value));

for(var k=i;k>=0;k--){
bars[k].style.backgroundColor = "lightgreen";}

if(time==1)
    break;

await new Promise((resolve) =>
setTimeout(()=>{
resolve();},speed.max-speed.value));
}

arr[j+1]=temp1;
bars[j+1].style.height=temp2;

if(time==1){
    time=0;
    for(p=0;p<ARRAY_SIZE;p+=1){
        bars[p].style.height=arrCopy[p]*3;
        bars[p].style.backgroundColor="rgb(0,183,255)";
        arr[p]=arrCopy[p];
    }
    document.getElementById('out').innerHTML='';
    break;
}

await new Promise((resolve)=>
setTimeout(()=>{
resolve();},speed.max-speed.value));

//bars[].style.backgroundColor="skyblue";
bars[i].style.backgroundColor="lightgreen";
//document.getElementById("out").innerHTML=result[i];
}


}



//merge sort

function SortedMerge(start,end){

    if(time==0){
    
    let mid=parseInt((start+end)/2);

    let start1=start;let end1=mid;
    let start2=mid+1;let end2=end;
    let index=start;

    bars[start].style.backgroundColor="yellow";
    bars[end].style.backgroundColor="red";
    

     while(start1<=end1&&start2<=end2){
        if(arr[start1]<=arr[start2]){
            elements[index]=arr[start1];
            index=index+1;
            start1=start1+1;
        }

        else if(arr[start1]>arr[start2]){
            elements[index]=arr[start2];
            index=index+1;
            start2=start2+1;
        }
        
     }

     while(start1<=end1){
        elements[index]=arr[start1];
        index=index+1;
        start1=start1+1;
     }
     
     while(start2<=end2){
        elements[index]=arr[start2];
        index=index+1;
        start2=start2+1;
     }


     index=start;
     while(index<=end){
        arr[index]=elements[index];
        index=index+1;
     }

     index=start;
     for(index=start;index<=end;index++)
         bars[index].style.height=arr[index]*3;}
     
     else if(time==1){
        for(p=0;p<ARRAY_SIZE;p+=1){
        bars[p].style.height=arrCopy[p]*3;
        bars[p].style.backgroundColor="rgb(0,183,255)";
        elements[p]=arrCopy[p];
    }
    document.getElementById('out').innerHTML='';
    return;
}
     
     
}

async function MergeSort(start,end){
    stop.disabled=false;
    
    if(time==0){
    if(start<end){

    let mid=parseInt((start+end)/2);


    await MergeSort(start,mid);
    await MergeSort(mid+1,end);
    await SortedMerge(start,end);
    
    await timeout(speed.max-speed.value);

    if(run==false)await pauseHandler();

    bars[start].style.backgroundColor="lightgreen";
    bars[end].style.backgroundColor="lightgreen";
    }
}
    else if(time==1)
    return;
    
    
}



//quick Sort

async function partition(l,r,animationSpeed){

    let pivot=arr[r];
    let i=l-1;
    bars[r].style.backgroundColor = "red";

    for(j=l;j<=r-1;j+=1){
        bars[j].style.backgroundColor = "yellow";
         await timeout(speed.max-speed.value);
        if(arr[j]<pivot){
            //await timeout(animationSpeed);
            i++;
            temp1=arr[i];
            arr[i]=arr[j];
            arr[j]=temp1;
            bars[i].style.height=arr[i]*3;
            bars[j].style.height=arr[j]*3;
            bars[i].style.backgroundColor = "orange";
            if (i != j) bars[j].style.backgroundColor = "pink";

        await timeout(speed.max-speed.value);
        if(run==false) await pauseHandler();
        
    }
    else bars[j].style.backgroundColor = "pink"
    if(time==1){ 
        for(p=0;p<ARRAY_SIZE;p+=1){
        bars[p].style.height=arrCopy[p]*3;
        bars[p].style.backgroundColor="rgb(0,183,255)";
        arr[p]=arrCopy[p];
    }
    document.getElementById('out').innerHTML='';
    return;}
    }
    
    t1=arr[i+1];
    arr[i+1]=arr[r];
    arr[r]=t1;
    bars[i+1].style.height=arr[i+1]*3;
    bars[r].style.height=arr[r]*3;
    bars[r].style.backgroundColor = "pink";
    bars[i+1].style.backgroundColor = "crimson";
  
    await timeout(speed.max-speed.value);

    for(var x=0;x<ARRAY_SIZE;x++)
        bars[x].style.backgroundColor="lightgreen";

    return i+1;

}



async function quickSort(l,r,animationSpeed){

stop.disabled=false;

if(time==0){
if(l<r){
await timeout(speed.max-speed.value);
var pivot =await partition(l,r,speed.max-speed.value);
await quickSort(l,pivot-1,speed.max-speed.value);
await quickSort(pivot+1,r,speed.max-speed.value);
}
}

else if (time==1)
    return;

}
