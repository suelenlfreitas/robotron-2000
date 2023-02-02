const robotron = document.querySelector(".robotron");

robotron.addEventListener("click", dizOi);

function dizOi(nome) {
    console.log(nome);
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi("Pedro")