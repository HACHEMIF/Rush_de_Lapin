export function bunnyroad(instructions: string[]) {
    let position = {
        x: 0, 
        y: 0
    }; 
    for (const iterator of instructions) {
        if (iterator === "droite") { position.x += 1; } 
        else if (iterator === "gauche") { position.x -= 1; }
        if (iterator === "nord") { position.y += 1; } 
        else if (iterator === "sud") { position.y -= 1; }
    }
    return position;
}

try {
    const instructions = ['droite', 'droite', 'gauche', 'droite', 'nord', 'sud', 'nord'];
    const positionFinale = bunnyroad(instructions);
    console.log(`Le lapin est à la position (${positionFinale.x}, ${positionFinale.y})`);
} catch (error) {
    console.error(error);
}