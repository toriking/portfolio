let num = 0;
setInterval(function(){
    if(num <= 95){
        document.getElementById("html").innerText = num + "%";
        num++;
    }
    if(num <= 90){
        document.getElementById("css").innerText = num + "%";
    }
    if(num <= 50){
        document.getElementById("javascript").innerText = num + "%";
    }
    if(num <= 30){
        document.getElementById("java").innerText = num + "%";
    }
    if(num <= 30){
        document.getElementById("python").innerText = num + "%";
    }
    
},50);