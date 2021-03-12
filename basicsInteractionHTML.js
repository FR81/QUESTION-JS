// pour recuperer un élément de la page HTML via son ID

const title1 = document.getElementById("titolo1");

// on store la variable

const titleOriginal = title1.innerHTML;
console.log(titleOriginal);

// pour modifier le contenu de l'élément on travail comme avec un objet!!!
// on utilise la proprieté innerHTML ou innerText, la différence est que innerHTML affiche la 
// version HTML alors que Text affiche le string en version texte brute

title1.innerHTML = "haha on t'a \n modifié";

// innerText

const title2 = document.getElementById("titolo2");
title2.innerText = "haha on t'a \n modifié";

// pour recuperer un élément de la page HTML via sa classe

const paragrafi = document.getElementsByClassName("paragrafo");

// il y en a plusieur dans le même objet

for (i=0;i<paragrafi.length;i++){

    console.log(paragrafi[i]);

}

// pour recuperer un élément de la page HTML via son tag

const paraTag = document.getElementsByTagName("p");
console.log(paraTag);

/* pour le bouton, la methode de séléction de l'élément est différente car le bouton est une catégorie "input" 
qui n'est pas enfermée par les symboles <input> ..... </inout> donc pour acceder au bouton comme object on procède ainsi: */

const myButton = document.getElementById("myButton");

// pour accéder aux valeurs de myButton on ne utilise pas le .innerHTML mais la proprieté .value

console.log(myButton.value);

// idem pour le texte box

var myText = document.getElementById("newText");

// EVENTS

/* on utilise le bouton pour modifier le titre par le biai de la methode addEventListener("type d'évenement",nom fonction)
dans ce cas on utilise une fonction anonime function*/

myButton.addEventListener("click",function(){

title1.innerHTML = myText.value;

});

// si on click sur le titre on revient au text initial

// QUESTION FOR TEACHER
// Why we dont need to put a parameter into the function and we can call the variable from outside?

title1.addEventListener("click",function(){

    title1.innerHTML = titleOriginal;

});
