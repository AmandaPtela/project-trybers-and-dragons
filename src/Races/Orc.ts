import Race from "./Race";
abstract class Orc extends Race {
  maxLifePoints: number;
  static instancesQuantity: number = 0;

  constructor( name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Orc.instances();
  }
  static instances(): void {
    this.instancesQuantity += 1;
  }
}
export default Orc;