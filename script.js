function ExpandMenu(){
    document.getElementById("side-menu").style.display = "block";
}

document.getElementById("menubutton").addEventListener("click", ExpandMenu);

function CollapseMenu(){
    document.getElementById("side-menu").style.display = "none";
}

document.getElementById("side-menu").addEventListener("click", CollapseMenu);