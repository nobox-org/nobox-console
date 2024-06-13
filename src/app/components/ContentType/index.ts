import TextIcon from './text';
import NumberIcon from './number';
import ImageIcon from './image';
import EditorIcon from './editor';

export enum AllowedContentType {
    TEXT = 'text',
    NUMBER = 'number',
    IMAGE = 'image',
    EDITOR = 'editor',
    RICHTEXT = 'richtext',
}
export const ContentTypeIcon = (contentType: string) => {
    const icon: any  = {
        text: TextIcon,
        number: NumberIcon,
        image: ImageIcon,
        editor: EditorIcon, 
    };    
    return icon[contentType]();
}