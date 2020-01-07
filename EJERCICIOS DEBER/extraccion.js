var texto1 = prompt("Ingrese una frase: ");
var texto2 = prompt("ingrese cuales caracteres desea eliminar: ");
var frase = texto1.toLowerCase();
var excluir = texto2.toLowerCase();
var deposito = [];
var cont = 0;
var cont1 = 0;

function extraer() {
    if (cont > excluir.length - 1) {
        console.log("frase inicial: " + texto1);
        console.log("texto extraido: " + texto2);
        console.log("el resultado de la extraccion es:" + frase.toString());
    } else {
        if (cont1 > frase.length - 1) {
            frase = deposito;
            deposito = [];
            cont1 = 0;
            cont++;
            extraer();
        } else {
            if (excluir[cont] != frase[cont1]) {
                deposito.push(frase[cont1]);
            }
            cont1++;
            extraer();
        }
    }
}
extraer();
/*for (let i = 0; i < excluir.length; i++) {
    for (let j = 0; j < frase.length; j++) {
        if (excluir[i]==frase[j]) {
            cont++;
        } else {
            deposito.push(frase[j]);
            cont++;
        }        
    }
        if (deposito=="") {
            
    } else {
        frase=deposito;
        deposito="";
    }       
}*/