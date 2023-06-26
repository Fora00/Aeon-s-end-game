export interface ISettingItem {
    id?: number
    settingID?: number
    name: string
    wave?: Record<string, unknown>
    market?: Record<string, unknown>
}

export interface ISettingList {
    id?: number
    title: string
}
