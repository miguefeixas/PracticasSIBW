const openCommentsButton = document.getElementById("openCommentsButton");
const comments = document.getElementById("commentsSidebar");


function openNav() {
    comments.style.display = "block";
};

openCommentsButton.onclick = function(){openNav()};
