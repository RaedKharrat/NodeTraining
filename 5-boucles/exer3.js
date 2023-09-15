// 💡 On peut aussi manipuler les tableaux comme des flux en utilisant les fonctions pop, push, shift et unshift.
// Vous disposez d'un tableau contenant des nombres aléatoires et vous devez créer une fonction sortNumbers(tInit, tInf, tSup) qui va ranger :
// tous les éléments de tInit inférieurs à 10 dans le tableau tInf
// et tous les éléments de tInit supérieurs ou égaux à 10 dans le tableau tSup
// 💡 la fonction doit fonctionner quel que soit le tableau tInit


function sortNumbers(tInit, tInf, tSup) {
    for (let i = 0; i < tInit.length; i++) {
      if (tInit[i] < 10) {
        tInf.push(tInit[i]);
      } else {
        tSup.push(tInit[i]);
      }
    }
  }
  const tInit = [5, 12, 3, 9 ,69 ,53 , 10];
  const tInf = [];
  const tSup = [];
  
  sortNumbers(tInit, tInf, tSup);
  
  console.log("ili a9al ml 10:", tInf); 
  console.log("ili akber ml 10:", tSup); 
  