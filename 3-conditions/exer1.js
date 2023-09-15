// Ecrivez une fonction nommée isTooLong qui :
// prend une chaîne de caractères comme argument
// renvoie vrai si la longueur de la chaîne dépasse 10 caractères
// renvoie faux dans les autres cas
// 💡 Utilisez str.length pour connaitre la taille chaîne de caractères str
function isTooLong(ch) {
    if (ch.length > 10) {
      return true;
    } else {
      return false;
    }
  }
  

  console.log(isTooLong("yo")); 
  console.log(isTooLong("chaineeeeeeeeeeeeeeeeeeeeeeeee")); 
  