// @ts-ignore
import CheckList from "@editorjs/checklist";
// @ts-ignore
import Code from "@editorjs/code";
// @ts-ignore
import Delimiter from "@editorjs/delimiter";
// @ts-ignore
import Embed from "@editorjs/embed";
// @ts-ignore
import Image from "@editorjs/image";
// @ts-ignore
import InlineCode from "@editorjs/inline-code";
// @ts-ignore
import Link from "@editorjs/link";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Quote from "@editorjs/quote";
// @ts-ignore
import SimpleImage from "@editorjs/simple-image";
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
// @ts-ignore
import Header from "@editorjs/header"
import "./style.scss";

export const EDITOR_TOOLS = {
    code: Code,
    header: {
        class: Header,
        config: {
            placeholder: 'Enter a Header',
            levels: [1, 2, 3, 4, 5],
            defaultLevel: 1
        },
        inlineToolbar: true,
    },
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
        config: {
            placeholder: 'Write here or use "/" to access commands',
        },
    },
    checklist: {
        class: CheckList,
        inlineToolbar: true,
    },
    embed: {
        class: Embed,
        inlineToolbar: true,
    },
    image: {
        class: Image,
        inlineToolbar: true,
    },
    inlineCode: {
        class: InlineCode,
        inlineToolbar: true,
    },
    link: {
        class: Link,
        inlineToolbar: true,
    },
    list: {
        class: List,
        inlineToolbar: true,
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
    },
    simpleImage: {
        class: SimpleImage,
        inlineToolbar: true,
    },
    delimiter: {
        class: Delimiter,
        inlineToolbar: true,
    }
};