function ExpandOrCollapseMenu(){
    document.getElementById("side-menu").classList.toggle("menu-expand-collapse");
    document.getElementById("menubutton").classList.toggle("fa-bars-staggered");
}
document.getElementById("menubutton").addEventListener("click", ExpandOrCollapseMenu);
document.getElementById("main").addEventListener("click", ExpandOrCollapseMenu);