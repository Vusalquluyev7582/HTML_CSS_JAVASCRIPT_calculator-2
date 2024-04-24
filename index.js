let düymə = document.getElementsByTagName("button");
let ekran = document.getElementsByClassName("ekran1")[0];
let hesabla = document.getElementById("hesabla")
let təmizlə = document.getElementById("təmizlə")

for (var i = 0; i < 16; i++) {

    if (i != 12 && i != 14) {
        düymə[i].addEventListener("click", yazdır);
    }

    function yazdır() {
        ekran.value = ekran.value + this.value;
    }

}


hesabla.addEventListener("click", hesab);

function hesab() {
    // ekran.value = ""
    ekran.value = eval(ekran.value)
}


təmizlə.addEventListener("click", təmiz);

function təmiz() {
    ekran.value = ""
}

function təmiz() {
    ekran.value = ""
}