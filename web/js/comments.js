/* José Miguel Feixas Galdeano - Curso 22/23 */

/**
 * Declaración de variables para guardar elementos del DOM
 */

let openCommentsButton = document.getElementById("openCommentsButton");
let closeCommentsButton = document.getElementById("closeCommentsButton");
let sendCommentButton = document.getElementById("sendCommentButton");
let comments = document.getElementById("commentsSidebar");

/**
 * Declaración de funciones
 */

function openComments() {
    comments.style.display = "block";
};

function closeComments() {
    comments.style.display = "none";
};

/**
 * Funcionalidades
 */

openCommentsButton.onclick = function(){ openComments() };
closeCommentsButton.onclick = function(){ closeComments() };

