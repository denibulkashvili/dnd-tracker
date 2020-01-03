import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like } from 'typeorm'
import { SpellEntity } from './spell.entity'
import { AddSpellInput, EditSpellInput } from './spell.input'

@Injectable()
export class SpellService {
  constructor(
    @InjectRepository(SpellEntity)
    private readonly spellRepository: Repository<SpellEntity>,
  ) {}

  async spells(): Promise<SpellEntity[]> {
    return this.spellRepository.find()
  }

  async spellById(id: number): Promise<SpellEntity> {
    return this.spellRepository.findOneOrFail(id)
  }

  async spellsByLevel(level: number): Promise<SpellEntity[]> {
    return this.spellRepository.find({ level })
  }

  async spellsByClass(classString: string): Promise<SpellEntity[]> {
    return this.spellRepository.find({ classes: Like(`%${classString}%`) })
  }

  async addSpell(input: AddSpellInput): Promise<SpellEntity> {
    return this.spellRepository.save(this.spellRepository.create(input))
  }

  async editSpell(input: EditSpellInput): Promise<SpellEntity> {
    const spell = await this.spellRepository.findOneOrFail(input.id)
    if (!spell) {
      throw new Error("The spell doesn't exist.")
    }
    return this.spellRepository.save(input)
  }

  async deleteSpell(id: number): Promise<SpellEntity> {
    const spell = await this.spellRepository.findOneOrFail(id)
    await this.spellRepository.delete(id)
    return spell
  }
}
