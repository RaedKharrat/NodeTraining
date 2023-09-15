// Reprenez la fonction myFct du dossier 'fonctions' et complétez là pour qu'elle renvoie -999999999 si un argument n'est pas un nombre
// 💡 Utilisez typeof( varia ) pour connaitre le type de la variable varia. Si varia est un nombre typeof retourne la chaîne de caractère "number".
// 💡 Vous pouvez tester si deux conditions sont vraies simultanément avec un AND logique (condition1 ET condition2) comme ceci : ( test1 && test2 ).
// 💡 Vous pouvez tester si l'une OU l'autre des conditions sont vraies avec un OR logique (condition1 OU condition2) comme ceci : ( test1 || test2 ).
function myFct(arg1, arg2) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
      return arg1 * arg2 + arg1 + arg2;
    } else {
      return -999999999;
    }
  }
  
  const x = myFct(4, 6);
  console.log(x);
  
  const y = myFct(9, "pa5ir");
  console.log(y); 
  