//alert("Boonjour la li2");
//var x =10;
//let y =3.5;
//alert(x);
/*let nombre = prompt("Veuillez donner un nombre :");
let i =1 ;
while(i <= 10 ){
alert(nombre + "*"+ i+"=" + nombre * i);
i++;
}
CREER UN COMPTE GETLAB*/
function valider(){
    let mp1 = document.getElementById("mp1").value;
    var mp2 = document.getElementById("mp2").value;
    if(mp1 == mp2){
        alert("Les deux mots de passe sont identiques");
    }
    else{
        alert("Veuillez entrer un bon mot de passe");
    }
}


