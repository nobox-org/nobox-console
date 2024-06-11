'use client'
import {Input} from '@/app/components/form/input';

type ControlType = {
    name: string;
    type: string;
    required: boolean;
    placeholder: string;
    description: string;
    default: string;
}


export const getControl: any = (props: ControlType) => {
    const { type, name, required } = props;
    const FormControls: any = {
        "input": <Input type='text' title={name} required={required} />,
    }; 
    return FormControls[type];
}
