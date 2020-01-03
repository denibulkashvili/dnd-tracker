import {MigrationInterface, QueryRunner} from "typeorm";

export class SpellAndClass1577956761653 implements MigrationInterface {
    name = 'SpellAndClass1577956761653'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "class_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "hitDie" varchar NOT NULL, "spellAbility" varchar NOT NULL, "source" varchar NOT NULL, "features" varchar NOT NULL)`, undefined);
        await queryRunner.query(`CREATE TABLE "spell_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "level" integer NOT NULL, "name" varchar NOT NULL, "school" varchar NOT NULL, "castingTime" varchar NOT NULL, "duration" varchar NOT NULL, "range" varchar NOT NULL, "components" varchar NOT NULL, "description" varchar NOT NULL, "source" varchar NOT NULL, "classes" varchar NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "spell_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "class_entity"`, undefined);
    }

}
