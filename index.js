
document.getElementById("dec").onclick= function(){
    let count ;
    count = document.getElementById("h1id").textContent;
    count = Number(count);
    count=count-1;
    document.getElementById("h1id").textContent=count;
}
document.getElementById("inc").onclick= function(){
    let count ;
    count = document.getElementById("h1id").textContent;
    count = Number(count);
    count=count+1;
    document.getElementById("h1id").textContent=count;
}
document.getElementById("res").onclick= function(){
    let count ;
   
    count = document.getElementById("h1id").textContent;
    count = Number(count);
    count=0;
    document.getElementById("h1id").textContent=count;
}