"use strict"


let santeMentale = 10
let nbrFeux = 30

let tableauMusique = ["Anissa - Wejden","Wonderwall - Oasis","Highway to Hell - ACDC","About a Girl - Nirvana","Purple Rain - Prince"]

function choisirMusique (){
    nbrFeux++;
    const musiquechoisie = Math.floor(Math.random() * 5 ) + 1;
    
    if (musiquechoisie === 1){
        santeMentale -= 1;
        console.log("Anissa passe à la radio, Kirikou saute du taxi et pert 1 point de santé mentale")
    }else if (musiquechoisie === 2){
      santeMentale = santeMentale
      console.log("Wonderwall passe à la radio, Kirikou bouge la tête et continue son trajet");
    }else if (musiquechoisie === 3){
      santeMentale = santeMentale
      console.log("Highway to Hell passe à la radio, Kirikou bouge la tête et continue son trajet")
    }else if (musiquechoisie === 4){
      santeMentale = santeMentale
      console.log("About a Girl passe à la radio, Kirikou bouge la tête et continue son trajet");
    }else if (musiquechoisie === 5){
      santeMentale = santeMentale
      console.log("Purple Rain passe à la radio, Kirikou bouge la tête et continue son trajet");
    }
}

for(let Feux = 1; Feux <= nbrFeux; Feux ++)


while (santeMentale > 0 && nbrFeux < 30) {
    const musique = choisirMusique();
    console.log(`La musique est ${musique}. Santé mentale actuelle : ${santeMentale}`);
  }
  
  if (santeMentale <= 0) {
    console.log("Le joueur a épuisé sa santé mentale.");
  } else {
    console.log("Le joueur a terminé l'aventure avec une santé mentale finale de : " + santeMentale);
  }
  
  console.log(`Nombre d'essais effectués : ${nbrFeux}`);

//je ne sais pas comment je peux faire pour que tout les tours apparaissent et je ne sais pas trop d'où ca pourrait venir si c'est une erreur