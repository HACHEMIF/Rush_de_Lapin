import isNumber from "./isnumber";

function validation(entree: number) {
    // d'abord, on s'occupe du parametre
    const entreeEnString = entree.toString();
    const tableau = entreeEnString.split('');
    const tailleTableau = tableau.length;

    // on recupere la clé.
    const cle: number = parseInt(tableau[tailleTableau - 1], 10);

    let somme: number = 0;

    for (let i = tailleTableau - 2; i >= 0; i--) {
        // tableau string => number
        let chiffre = parseInt(tableau[i], 10);
        let chiffreDouble;

        // si i pair pour x2
        if (i%2 === 0) { chiffreDouble = chiffre * 2;

            // si chiffreDouble supérieur à 9, somme de ses unités
            if (chiffreDouble > 9) { chiffreDouble -= 9; }
            somme += chiffreDouble;
        } else { somme += chiffre; }
    }

    // on passe au mod10. Formule : c = 10 - (s mod 10) mod 10
    let resultat;
    resultat = 10 - (somme%10);

    return (resultat === cle) ? console.log("OK") : console.log("KO");
}

function cleImplementation(entree: number) {
    // c'est presque la même chose que pour validation()
    let tableau = entree.toString().split('');
    const tailleTableau = tableau.length;
    let somme: number = 0;

    for (let i = tailleTableau - 1; i >= 0; i--) {
        let chiffre = parseInt(tableau[i], 10);
        let chiffreDouble: number;
        if (i % 2 === 0) {
            chiffreDouble = chiffre * 2;
            if (chiffreDouble > 9) { 
                chiffreDouble -= 9; 
            }
            somme += chiffreDouble;
        } else { 
            somme += chiffre; 
        }
    }
    let resultat = 10 - (somme % 10);
    console.log(resultat);
}

try {
    const parametre = process.argv.slice(2);

    if (parametre.length > 2) { throw "Wrong use of the program. Too much parameters"; } 
    else {
        const premierParametre = parametre[0];
        const deuxiemeParametre = parametre[1];

        if (!isNumber(deuxiemeParametre)) {
            throw "Wrong use of the program. Only numbers.";
        } else {
            const nombre: number = parseInt(deuxiemeParametre, 10);
            switch (premierParametre) {
                case '-c':
                    validation(nombre);
                    break;
                case '-f':
                    cleImplementation(nombre);                    
                    break;
                default:
                    throw "Wrong use of the program. Wrong first command.";
            }
        }
    }
} catch (error) {
    console.error(error);    
}