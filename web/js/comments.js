/* José Miguel Feixas Galdeano - Curso 22/23 */

/**
 * Declaración de variables para guardar elementos del DOM
 */

let openCommentsButton = document.getElementById("openCommentsButton");
let closeCommentsButton = document.getElementById("closeCommentsButton");
let sendCommentButton = document.getElementById("sendCommentButton");
let commentsSidebar = document.getElementById("commentsSidebar");
let comments = document.getElementById("comments");
let authorEmail = document.getElementById("authorEmail");
let authorName = document.getElementById("authorName");
let commentTextArea = document.getElementById("commentTextArea");
let reEmail = /\S+@\S+\.\S+/;
let reBadWords = /imb[é,e]cil|est[ú,u]pid[o,a]|subnormal|malnacid[o,a]/gi;

/**
 * Declaración de funciones
 */

function openComments() {
    commentsSidebar.style.display = "block";
};

function closeComments() {
    commentsSidebar.style.display = "none";
};

function addComment() {
    let timestamp = new Date();
    let date = timestamp.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
    let time = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (!checkFields()) {
        alert("Por favor, complete todos los campos.");
    } else if (!checkValidEmail(authorEmail.value)) {
        alert("Por favor, introduzca un email válido");
    } else {
        // Enviar comentario
        comments.innerHTML += `
        <div class="comment">
            <p>${ authorName.value }</p>
            <p>${ time } - ${ date }</p>
            <p>${ commentTextArea.value }</p>
        </div>
        `
    } 
};

function checkValidEmail(email) {
    return reEmail.test(email);
};

function checkFields() {
    return ((authorName.value != "") && (commentTextArea.value != ""));
};

function checkBadWords() {
    // TODO
}

/**
 * Funcionalidades
 */

openCommentsButton.onclick = function(){ openComments() };
closeCommentsButton.onclick = function(){ closeComments() };
sendCommentButton.onclick = function(){ addComment() };
commentTextArea.onkeyup = function(){ checkBadWords() };

