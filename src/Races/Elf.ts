import Race from './Race';

abstract class Elf extends Race {
  maxLifePoints: number;
  static instancesQuantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Elf.instances();
  }

  static instances(): void {
    this.instancesQuantity += 1;
  }
}
export default Elf;