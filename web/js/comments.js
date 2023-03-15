/*let openCommentsButton = document.getElementById("openCommentsButton");
let comments = document.getElementById("commentsSidebar");*/

function openNav() {
    document.getElementById("commentsSidebar").style.display = "block";
};

document.getElementById("openCommentsButton").onclick = function(){openNav()};

