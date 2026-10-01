function crearTarjetas() {
    let contenido="";
    let divTarjetas=document.getElementById("divTarjetas");
    let desde=document.getElementById("txtDesde").value;
    let hasta=document.getElementById("txtHasta").value;
    let salto=document.getElementById("txtSalto").value;

    switch (Math.sign(Number(salto))) {
        case 1:
            for (let i = Number(desde); i <= Number(hasta); i += Number(salto)) {
                contenido = contenido + "<div class='item'>" + i + "</div>";
            }
            break;
        case 2:
            for (let i = Number(desde); i >= Number(hasta); i += Number(salto)) {
                contenido = contenido + "<div class='item'>" + i + "</div>";
            }
            break;
        default:
            contenido = "";
    }

    divTarjetas.innerHTML = contenido;
}
