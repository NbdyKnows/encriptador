
function encriptar(){
    var texto = document.getElementById("input_texto").value.toLowerCase();
    //i -> para mayúsculas y minúsculas
    //g -> para toda la linea
    //m -> para multiples líneas
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagen_derecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("text2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}

function desencriptar(){
    var texto = document.getElementById("input_texto").value.toLowerCase();
    //i -> para mayúsculas y minúsculas
    //g -> para toda la linea
    //m -> para multiples líneas
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagen_derecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("text2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}

function copiar(){
    var texto = document.querySelector("#text2");
    texto.select();
    document.execCommand("copy");
    alert("¡Se copió el texto!");
}

