let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Bitcoin");
        habilidades[1].classList.add("Ethereum");
        habilidades[2].classList.add("Tether");
        habilidades[3].classList.add("USD coin");
        habilidades[4].classList.add("BNB");
        habilidades[5].classList.add("Binance USD");
        habilidades[6].classList.add("XRP");
        habilidades[7].classList.add("Caedano");
        habilidades[8].classList.add("Solana");
        habilidades[9].classList.add("Dogecoin");
    }
}
function selectPayment(method) {
    document.getElementById("selectedMethod").innerText = method;
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 