function firstChange(){
    document.getElementById("testMeow").style.color="red";
}

function secondChange(){
    document.getElementById("testMeow").innerHTML = "2nd Change Now in File";
}

function math(){
    let addition = 7 + 3;
    return addition;
}

math.id = mathTest;

function displayMath(){
    document.addEventListener("load", math());
}
