// db.ts

import Dexie, { Table } from 'dexie'

import { ISetting } from 'TS/interfaces'

export class SettingDexie extends Dexie {
    // 'friends' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    setting!: Table<ISetting>

    constructor() {
        super('myDatabase')
        this.version(1).stores({
            setting: '++id, name, wave,market', // Primary key and indexed props
        })
    }
}

export const db = new SettingDexie()
