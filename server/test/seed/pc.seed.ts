import { PcEntity } from '../../src/character/pc.entity'

export const PcSeed: PcEntity[] = [
  {
    id: 1,
    name: 'Jing Long',
    imgUrl: '',
    type: '',
    source: '',
    challenge: '1',
    HP: 12,
    hitDie: '',
    AC: 12,
    acType: '',
    initiativeModifier: 0,
    STR: 12,
    DEX: 16,
    CON: 14,
    INT: 14,
    WIS: 16,
    CHA: 12,
    speed: '25 ft',
    senses: '',
    damageVulnerabilities: '',
    damageResistances: '',
    damageImmunities: '',
    conditionImmunities: 'frightened',
    languages: 'Halfling, Common',
    traits: {
      traitName: 'Lucky',
      traitDescription: "Halflings can re-roll natural 1's",
    },
    actions: {
      actionName: 'Unarmed Strike',
      actionDescription: 'Make one Unarmed Strike as a Bonus Action.',
    },
    description: '',
  },
]
