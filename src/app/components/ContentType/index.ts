import TextIcon from './text';
import NumberIcon from './number';
import ImageIcon from './image';
import EditorIcon from './editor';
import ObjectIcon from './object';
import BoolIcon from './bool';
import ArrayIcon from './array';

export enum AllowedContentType {
    TEXT = 'text',
    NUMBER = 'number',
    IMAGE = 'image',
    EDITOR = 'editor',
    RICHTEXT = 'richtext',
    ARRAY = 'array',
    OBJECT = 'object'
}
export const ContentTypeIcon = (contentType: string) => {
    const icon: any  = {
        text: TextIcon,
        number: NumberIcon,
        image: ImageIcon,
        editor: EditorIcon, 
        object: ObjectIcon,
        checkbox: BoolIcon,
        array: ArrayIcon,
    };    
    return icon[contentType] ? icon[contentType]() : '';
}