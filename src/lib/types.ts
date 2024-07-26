export interface FindProjectArgs {
    projects: any[];
    projectId: string;
}

export type CompatibleStructureFieldType = "TEXT" | "NUMBER" | "BOOLEAN" | "ARRAY" | "OBJECT";

export enum PageTypes {
    recordSpacesList = "record-spaces-list",
    recordsList = "records-list"
}

export enum PagePathNames {
    recordSpacePathName = "record-spaces",
    recordsPathName = "records"
}

export enum FieldType {
    Number = "number",
    String = "string",
    Boolean = "boolean",
    Array = "array"
}
export enum InputTypes {
    NUMBER = 'number',
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email',
    RADIO = 'radio',
    CHECKBOX = 'checkbox',
    SELECT = 'select',
    DATE = 'date',
    EDITOR ='editor'
}
