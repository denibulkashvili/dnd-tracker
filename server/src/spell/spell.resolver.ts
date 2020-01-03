import { Resolver } from '@nestjs/graphql'
import { SpellService } from './spell.service'
import { SpellEntity } from './spell.entity'
import { AddSpellInput, EditSpellInput } from './spell.input'

@Resolver('Spell')
export class SpellResolver {
  constructor(private readonly spellService: SpellService) {}

  async spells(): Promise<SpellEntity[]> {
    return this.spellService.spells()
  }

  async spellById(id: number): Promise<SpellEntity> {
    return this.spellService.spellById(id)
  }

  async spellsByLevel(level: number): Promise<SpellEntity[]> {
    return this.spellService.spellsByLevel(level)
  }

  async spellsByClass(classString: string): Promise<SpellEntity[]> {
    return this.spellService.spellsByClass(classString)
  }

  async addSpell(input: AddSpellInput): Promise<SpellEntity> {
    return this.spellService.addSpell(input)
  }

  async editSpell(input: EditSpellInput): Promise<SpellEntity> {
    return this.spellService.editSpell(input)
  }

  async deleteSpell(id: number): Promise<SpellEntity> {
    return this.spellService.deleteSpell(id)
  }
}
