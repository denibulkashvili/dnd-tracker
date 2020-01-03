import { SpellEntity } from '../../src/spell/spell.entity'

export const SpellSeed: SpellEntity[] = [
  {
    id: 1,
    level: 1,
    name: 'Acid Splash',
    school: 'C',
    castingTime: '1 action',
    duration: 'Instantaneous',
    range: '60 feet',
    components: 'V, S',
    description:
      'The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.',
    source: "Elemental Evil Player's Companion",
    classes: 'Druid, Ranger, Wizard, Fighter (Eldritch Knight)',
  },
]
