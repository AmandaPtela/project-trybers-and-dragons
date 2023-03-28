import Character from './Character';

const daedra = new Character('Daedra');
// const corki = new Character('Corki');

/* console.log('Defesa Daedra', daedra.defense);
console.log('Ataque', 20);
console.log('Dano Luta', 20 - daedra.defense); */
daedra.levelUp();

export default Character;