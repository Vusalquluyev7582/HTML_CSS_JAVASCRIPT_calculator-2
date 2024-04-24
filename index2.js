let düymə = document.getElementsByTagName("button");
// console.log(düymə);

// düymə[0].addEventListener("click", yazdır);
// function yazdır() {
//     console.log("Klik olundu");
//     console.log(this.value);
// }

// for(var i=0; i<16; i++) {
// düymə[i].addEventListener("click", yazdır);

// function yazdır() {
//     console.log(this.value);
// }
// }

let ekran = document.getElementsByClassName("ekran1")[0];

// for (var i = 0; i < 16; i++) {
//     düymə[i].addEventListener("click", yazdır);

//     function yazdır() {
//         ekran.value = ekran.value + this.value;
//     }
// }

// for (var i = 0; i < 16; i++) {
//     if (i != 12 && i != 14) {
//         düymə[i].addEventListener("click", yazdır);
//     }

//     function yazdır() {
//         ekran.value = ekran.value + this.value;
//     }
// }


let hesabla = document.getElementById("hesabla")
    // for (var i = 0; i < 16; i++) {
    //     if (i != 12 && i != 14) {
    //         düymə[i].addEventListener("click", yazdır);
    //     }

//     function yazdır() {
//         ekran.value = ekran.value + this.value;
//     }
// }

// hesabla.addEventListener("click", hesab);
// function hesab() {
//     // ekran.value = ""
//     ekran.value = eval(ekran.value)
// }


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