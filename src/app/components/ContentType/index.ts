import TextIcon from './text';
import NumberIcon from './number';
import ImageIcon from './image';
import EditorIcon from './editor';

export enum AllowedContentType {
    TEXT,
    NUMBER,
    IMAGE,
    EDITOR,
    RICHTEXT,
}
export const ContentTypeIcon = (contentType: string) => {
    const icon: any  = {
        TEXT: TextIcon,
        NUMBER: NumberIcon,
        IMAGE: ImageIcon,
        EDITOR: EditorIcon,
    };    
    return icon[contentType]();
}