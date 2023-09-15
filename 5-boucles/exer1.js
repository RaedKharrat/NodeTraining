// Créez une fonction puissance qui :
// prend deux arguments
// réalise le calcul du premier argument élevé à la puissance du deuxième sans utiliser les fonctions mahtématiques de JS
// 💡 Utilisez une boucle par exemple x^n = x * x * x *x * ... n fois
function puissance(arg1, arg2) {
    var arg22 = Math.abs(arg2);
    var resultat = 1; 
    
    for (let i = 0; i < arg22; i++) {
      resultat *= arg1;
    }
    
    if (arg2 < 0) { 
      resultat = 1 / resultat;
    }
    
    return resultat;
  }
  
  console.log(puissance(9, 6)); 
  