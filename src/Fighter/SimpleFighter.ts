export default interface SimpleFighter {
  lifePoints: number;
  strength: number;

  receiveDamage(attackPoints: number): number;
  attack(enemy: SimpleFighter): void;
}