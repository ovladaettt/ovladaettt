if(localStorage.getItem("tag") != ''){
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("main").style.backgroundImage = `url('https://source.unsplash.com/random/${width}x${height}?${localStorage.getItem("tag")}')`;  
    var selid = document.getElementById("tag");
    selid.value = localStorage.getItem("tag");
}
else{
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("main").style.backgroundImage = `url('https://source.unsplash.com/random/${width}x${height}?dark')`;  
    var selid = document.getElementById("tag");
    selid.value = "#Dark";
}


function refresh(){
    location.reload();
}

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
}, 500);
}


function like(){
    if(document.getElementById("heart").style.color == "red"){
        document.getElementById("heart").style.color = "white";
    }
    else{
        document.getElementById("heart").style.color = "red";
    }
}

function settag(){
    var e = document.getElementById("tag");
    var strUser = e.value;
    localStorage.setItem("tag", strUser);
    location.reload();
}
