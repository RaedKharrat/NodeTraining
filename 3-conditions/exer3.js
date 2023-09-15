// Créez une fonction nommée aprec qui :
// prend une note sur 20 en argument
// renvoie Hideux si la note est entre 0 et 7 exclus
// renvoie Moche si la note entre 7 et 10 exclus
// renvoie Nice si la note entre 10 et 15 exclus
// renvoie GG si la note entre 15 et 20 inclus
// renvoie BUG si la note n'est pas correcte

function aprec(a)
{
    if (a <=7)
    {
    console.log("Hideux");
    }
    else if(a>7 & a<=10)
    {
        console.log("moche");
    }
    else if(a>10 & a<=15)
    {
        console.log("Nice");
    }
    else if(a>15 & a<=20)
    {
        console.log("gg");
    }
    else 
    {
        console.log("Bugggg");
    }


}

aprec(18);
