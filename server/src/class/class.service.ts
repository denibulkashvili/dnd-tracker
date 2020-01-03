import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ClassEntity } from './class.entity'
import { Repository } from 'typeorm'
import { AddClassInput, EditClassInput } from './class.input'

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassEntity)
    private readonly classRepository: Repository<ClassEntity>,
  ) {}

  async classess(): Promise<ClassEntity[]> {
    return this.classRepository.find()
  }

  async classById(id: number): Promise<ClassEntity> {
    return this.classRepository.findOneOrFail(id)
  }

  async addClass(input: AddClassInput): Promise<ClassEntity> {
    return this.classRepository.save(this.classRepository.create(input))
  }

  async editClass(input: EditClassInput): Promise<ClassEntity> {
    const exists = await this.classRepository.findOneOrFail(input.id)
    if (!exists) {
      throw new Error("The class doesn't exist.")
    }
    return this.classRepository.save(input)
  }

  async deleteClass(id: number): Promise<ClassEntity> {
    const deleted = await this.classRepository.findOneOrFail(id)
    await this.classRepository.delete(id)
    return deleted
  }
}
