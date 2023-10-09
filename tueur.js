"use strict"

class Personnage {
  
  constructor(nom, pointsDeVie, probabiliteAttaque, probabiliteContreAttaque, degats) {
    this.nom = nom; 
    this.pointsDeVie = pointsDeVie; 
    this.probabiliteAttaque = probabiliteAttaque; 
    this.probabiliteContreAttaque = probabiliteContreAttaque; 
    this.degats = degats; 
  }

  
  attaquer(cible) {
    
    if (Math.random() < this.probabiliteAttaque) {
      
      console.log(`${this.nom} attaque ${cible.nom} et inflige ${this.degats} points de dégâts.`);
      
      cible.encaisserDegats(this.degats);
    } else {
      
      console.log(`${this.nom} rate son attaque contre ${cible.nom}.`);
    }
  }

  
  encaisserDegats(degats) {
    
    if (Math.random() < this.probabiliteContreAttaque) {
      
      console.log(`${this.nom} contre-attaque et encaisse ${degats} points de dégâts.`);
      
      this.pointsDeVie -= degats;
    } else {
      
      console.log(`${this.nom} encaisse ${degats} points de dégâts.`);
    }

    
    if (this.pointsDeVie <= 0) {
      
      console.log(`${this.nom} est vaincu.`);
    }
  }
}

let Jason = new Personnage ("Jason",100, 0.7, 0.3, 30)

// je n'ai pas eu le temps de finir à temps 
