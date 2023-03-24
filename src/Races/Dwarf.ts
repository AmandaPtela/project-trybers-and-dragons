import Race from "./Race";

abstract class Dwarf extends Race {
  maxLifePoints: number;
  static instancesQuantity: number = 0;

  constructor( name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.instances();
  }
  static instances(): void {
    this.instancesQuantity += 1;
  }
}
export default Dwarf;