import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { PcEntity } from './pc.entity'
import { InjectRepository } from '@nestjs/typeorm'
import {
  AddPcInput,
  AddNpcInput,
  AddMonsterInput,
  EditPcInput,
  EditNpcInput,
  EditMonsterInput,
} from './character.input'
import { NpcEntity } from './npc.entity'
import { MonsterEntity } from './monster.entity'

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(PcEntity)
    private readonly pcRepository: Repository<PcEntity>,
    @InjectRepository(NpcEntity)
    private readonly npcRepository: Repository<NpcEntity>,
    @InjectRepository(MonsterEntity)
    private readonly monsterRepository: Repository<MonsterEntity>,
  ) {}

  //  PC CRUD
  async playerCharacters(): Promise<PcEntity[]> {
    return this.pcRepository.find()
  }

  async playerCharacterById(id: number): Promise<PcEntity> {
    return this.pcRepository.findOneOrFail(id)
  }

  async addPC(input: AddPcInput): Promise<PcEntity> {
    return this.pcRepository.save(this.pcRepository.create({ ...input }))
  }

  async editPC(input: EditPcInput): Promise<PcEntity> {
    return this.pcRepository.save({ ...input })
  }

  async deletePC(id: number): Promise<PcEntity> {
    const pc = await this.pcRepository.findOneOrFail(id)
    await this.pcRepository.delete(id)
    return pc
  }

  // NPC CRUD
  async nonPlayerCharacters(): Promise<NpcEntity[]> {
    return this.npcRepository.find()
  }

  async nonPlayerCharacterById(id: number): Promise<NpcEntity> {
    return this.npcRepository.findOneOrFail(id)
  }

  async addNPC(input: AddNpcInput): Promise<NpcEntity> {
    return this.npcRepository.save(this.npcRepository.create({ ...input }))
  }

  async editNPC(input: EditNpcInput): Promise<NpcEntity> {
    return this.npcRepository.save({ ...input })
  }

  async deleteNPC(id: number): Promise<NpcEntity> {
    const npc = await this.npcRepository.findOneOrFail(id)
    await this.npcRepository.delete(id)
    return npc
  }

  // Monster CRUD
  async monsters(): Promise<MonsterEntity[]> {
    return this.monsterRepository.find()
  }

  async monsterById(id: number): Promise<MonsterEntity> {
    return this.monsterRepository.findOneOrFail(id)
  }

  async addMonster(input: AddMonsterInput): Promise<MonsterEntity> {
    return this.monsterRepository.save(this.monsterRepository.create({ ...input }))
  }

  async editMonster(input: EditMonsterInput): Promise<MonsterEntity> {
    return this.monsterRepository.save({ ...input })
  }

  async deleteMonster(id: number): Promise<MonsterEntity> {
    const monster = await this.monsterRepository.findOneOrFail(id)
    await this.monsterRepository.delete(id)
    return monster
  }
}
