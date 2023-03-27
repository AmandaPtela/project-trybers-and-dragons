import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  type_: EnergyType;
  static instancesQuantity = 0;

  constructor(name: string) {
    super(name);
    this.type_ = 'mana';
    Necromancer.instancesQuantity += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instancesQuantity;
  }

  get energyType() {
    return this.type_;
  }
}
export default Necromancer;