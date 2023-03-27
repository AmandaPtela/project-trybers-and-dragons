import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  type_: EnergyType;
  static instancesQuantity = 0;

  constructor(name: string) {
    super(name);
    this.type_ = 'stamina';
    Warrior.instancesQuantity += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instancesQuantity;
  }

  get energyType() {
    return this.type_;
  }
}
export default Warrior;