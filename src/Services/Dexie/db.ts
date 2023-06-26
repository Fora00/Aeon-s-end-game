import Dexie, { Table } from 'dexie'
import { ISettingItem, ISettingList } from 'TS/interfaces'

export class SettingDexie extends Dexie {
    settingItems!: Table<ISettingItem, number>
    settingLists!: Table<ISettingList, number>

    constructor() {
        super('myDatabase')
        this.version(1).stores({
            settingItems: '++id, name, wave,market',
            settingLists: '++id, title',
        })
    }

    deleteList(settingListsId: number) {
        return this.transaction(
            'rw',
            this.settingItems,
            this.settingLists,
            () => {
                this.settingItems.where({ settingListsId }).delete()
                this.settingLists.delete(settingListsId)
            }
        )
    }
}

export const db = new SettingDexie()

export function resetDatabase() {
    return db.transaction('rw', db.settingItems, db.settingLists, async () => {
        await Promise.all(db.tables.map((table) => table.clear()))
    })
}
