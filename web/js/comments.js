/* José Miguel Feixas Galdeano - Curso 22/23 */

/**
 * Declaración de variables para guardar elementos del DOM
 */

const openCommentsButton = document.getElementById("openCommentsButton");
const closeCommentsButton = document.getElementById("closeCommentsButton");
const sendCommentButton = document.getElementById("sendCommentButton");
const commentsSidebar = document.getElementById("commentsSidebar");
const comments = document.getElementById("comments");
const authorEmail = document.getElementById("authorEmail");
const authorName = document.getElementById("authorName");
const commentTextArea = document.getElementById("commentTextArea");
const reEmail = /\S+@\S+\.\S+/;
const reBadWords = /imb[é,e]cil|est[ú,u]pid[o,a]|tont[o,a]|subnormal|malnacid[o,a]/gi;
// g: hace una búsqueda global, no para después del primer match
// i: no distingue entre mayus y minus

/**
 * Declaración de funciones
 */

function openComments() {
    commentsSidebar.style.display = "block";
};

function closeComments() {
    commentsSidebar.style.display = "none";
};

function clearFields() {
    authorName.value = "";
    authorEmail.value = "";
    commentTextArea.value = "";
}

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
            <p class="name">${ authorName.value }</p>
            <p class="date">${ time } - ${ date }</p>
            <p>${ commentTextArea.value }</p>
        </div>
        `
        // Se limpian los campos tras enviar el comentario
        clearFields();
    }
};

function checkValidEmail(email) {
    return reEmail.test(email);
};

function checkFields() {
    return ((authorName.value != "") && (commentTextArea.value != ""));
};

function checkBadWords() {
    let text = commentTextArea.value;
    // https://stackoverflow.com/questions/42236181/iterating-through-words-in-a-string
    let words = text.split(" ");

    if(reBadWords.test(words)) {
        let badWordLength;
        let replacement = "";
        // Recorremos las palabras hasta encontrar la que se censura y obtenemos su longitud
        // con una función de callback.
        words.map(word => {
            if (reBadWords.test(word))
                badWordLength = word.length;
        });
        for (let i = 0; i < badWordLength; i += 1)
            replacement += "*";
        commentTextArea.value = text.replace(reBadWords, replacement);
    }
};

/**
 * Funcionalidades
 */

openCommentsButton.onclick = function(){ openComments() };
closeCommentsButton.onclick = function(){ closeComments() };
sendCommentButton.onclick = function(){ addComment() };
commentTextArea.onkeyup = function(){ checkBadWords() };

