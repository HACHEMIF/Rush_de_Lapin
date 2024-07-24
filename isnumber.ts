export default function isNumber(str) 
{
    // Utiliser la fonction globale isNaN pour vérifier si la chaîne est convertie en NaN
    // Si la chaîne est un nombre, isNaN renverra false
    // Si la chaîne n'est pas un nombre, isNaN renverra true
    return !isNaN(str);
}