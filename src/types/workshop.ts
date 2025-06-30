export interface childMods {
    publishedfileid: string,
    sortorder: number,
    file_type: number
}

export interface WorkshopMod {
    title: string,
    image: string,
    url: string,
    children?: string[] | null,
}