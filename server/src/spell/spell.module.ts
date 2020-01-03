import { Module } from '@nestjs/common'
import { SpellService } from './spell.service'
import { SpellResolver } from './spell.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SpellEntity } from './spell.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SpellEntity])],
  providers: [SpellService, SpellResolver],
})
export class SpellModule {}
