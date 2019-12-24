import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1577170369031 implements MigrationInterface {
    name = 'Init1577170369031'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "monster_entity" ("name" varchar NOT NULL, "imgUrl" varchar, "type" varchar, "source" varchar, "challenge" varchar NOT NULL DEFAULT ('0'), "HP" integer NOT NULL DEFAULT (0), "hitDie" varchar NOT NULL DEFAULT ('1d1+0'), "AC" integer NOT NULL DEFAULT (10), "acType" varchar, "initiativeModifier" integer NOT NULL DEFAULT (0), "STR" integer NOT NULL DEFAULT (10), "DEX" integer NOT NULL DEFAULT (10), "CON" integer NOT NULL DEFAULT (10), "INT" integer NOT NULL DEFAULT (10), "WIS" integer NOT NULL DEFAULT (10), "CHA" integer NOT NULL DEFAULT (10), "speed" varchar NOT NULL DEFAULT ('30 ft'), "senses" varchar, "damageVulnerabilities" varchar, "damageResistances" varchar, "damageImmunities" varchar, "conditionImmunities" varchar, "languages" varchar, "description" varchar, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "traitsTraitname" varchar, "traitsTraitdescription" varchar, "actionsActionname" varchar, "actionsActiondescription" varchar)`, undefined);
        await queryRunner.query(`CREATE TABLE "npc_entity" ("name" varchar NOT NULL, "imgUrl" varchar, "type" varchar, "source" varchar, "challenge" varchar NOT NULL DEFAULT ('0'), "HP" integer NOT NULL DEFAULT (0), "hitDie" varchar NOT NULL DEFAULT ('1d1+0'), "AC" integer NOT NULL DEFAULT (10), "acType" varchar, "initiativeModifier" integer NOT NULL DEFAULT (0), "STR" integer NOT NULL DEFAULT (10), "DEX" integer NOT NULL DEFAULT (10), "CON" integer NOT NULL DEFAULT (10), "INT" integer NOT NULL DEFAULT (10), "WIS" integer NOT NULL DEFAULT (10), "CHA" integer NOT NULL DEFAULT (10), "speed" varchar NOT NULL DEFAULT ('30 ft'), "senses" varchar, "damageVulnerabilities" varchar, "damageResistances" varchar, "damageImmunities" varchar, "conditionImmunities" varchar, "languages" varchar, "description" varchar, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "traitsTraitname" varchar, "traitsTraitdescription" varchar, "actionsActionname" varchar, "actionsActiondescription" varchar)`, undefined);
        await queryRunner.query(`CREATE TABLE "pc_entity" ("name" varchar NOT NULL, "imgUrl" varchar, "type" varchar, "source" varchar, "challenge" varchar NOT NULL DEFAULT ('0'), "HP" integer NOT NULL DEFAULT (0), "hitDie" varchar NOT NULL DEFAULT ('1d1+0'), "AC" integer NOT NULL DEFAULT (10), "acType" varchar, "initiativeModifier" integer NOT NULL DEFAULT (0), "STR" integer NOT NULL DEFAULT (10), "DEX" integer NOT NULL DEFAULT (10), "CON" integer NOT NULL DEFAULT (10), "INT" integer NOT NULL DEFAULT (10), "WIS" integer NOT NULL DEFAULT (10), "CHA" integer NOT NULL DEFAULT (10), "speed" varchar NOT NULL DEFAULT ('30 ft'), "senses" varchar, "damageVulnerabilities" varchar, "damageResistances" varchar, "damageImmunities" varchar, "conditionImmunities" varchar, "languages" varchar, "description" varchar, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "playerName" varchar, "traitsTraitname" varchar, "traitsTraitdescription" varchar, "actionsActionname" varchar, "actionsActiondescription" varchar)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "pc_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "npc_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "monster_entity"`, undefined);
    }

}
