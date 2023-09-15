// On souhaite stocker les positions d"une série de 20 objets mobiles (mobs) dans un jeu vidéo. Pour cela on va créer 2 tableaux :
// posX qui contient la série des abscisses des objets
// posY qui contient la série des ordonnées des objets
// Créez une fonction initXY :
// qui prend en 1er argument l'abscisse du 1er objet
// qui prend en 2ème argument l'ordonnée du 1er objet
// qui calcule les abscisses et ordonnés des objects de la série sachant qu'il doivent être espacés de 40 pixels (+40) les uns des autres en abscisse et de 30 pixels (+30) en ordonnée
function initXY(x1, y1) {
    const posX = [];
    const posY = [];
  
    for (let i = 0; i < 20; i++) 
    {
      posX.push(x1 + i * 40); 
      posY.push(y1 + i * 30); 
    } 
    return { posX, posY };
  }
  const { posX, posY } = initXY(10, 20);

  console.log(posX);
  console.log(posY);
  