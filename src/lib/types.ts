export interface FindProjectArgs {
    projects: any[];
    projectId: string;
}

export type CompatibleStructureFieldType = "TEXT" | "NUMBER" | "BOOLEAN" | "ARRAY";

export enum PageTypes {
    recordSpacesList = "record-spaces-list",
    recordsList = "records-list"
}

export enum PagePathNames {
    recordSpacePathName = "record-spaces",
    recordsPathName = "records"
}