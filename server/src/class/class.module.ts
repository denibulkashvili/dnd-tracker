import { Module } from '@nestjs/common'
import { ClassService } from './class.service'
import { ClassResolver } from './class.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClassEntity } from './class.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ClassEntity])],
  providers: [ClassService, ClassResolver],
})
export class ClassModule {}
