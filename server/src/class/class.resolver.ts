import { Resolver } from '@nestjs/graphql'
import { ClassService } from './class.service'
import { ClassEntity } from './class.entity'
import { AddClassInput, EditClassInput } from './class.input'

@Resolver('Class')
export class ClassResolver {
  constructor(private readonly classService: ClassService) {}

  async classess(): Promise<ClassEntity[]> {
    return this.classService.classess()
  }

  async classById(id: number): Promise<ClassEntity> {
    return this.classService.classById(id)
  }

  async addClass(input: AddClassInput): Promise<ClassEntity> {
    return this.classService.addClass(input)
  }

  async editClass(input: EditClassInput): Promise<ClassEntity> {
    return this.classService.editClass(input)
  }

  async deleteClass(id: number): Promise<ClassEntity> {
    return this.classService.deleteClass(id)
  }
}
