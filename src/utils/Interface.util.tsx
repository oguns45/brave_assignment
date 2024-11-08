import { NullExpression } from "mongoose";
import { ChangeEvent, RefObject } from "react";
import { Url } from "url";

export interface IStorage{
    keepData(key: string, data:any | string): void,
    fetchData(key: string): string | null
}

export interface IPasswordInput{
    showFocus?: boolean,
    ref?:RefObject<HTMLInputElement>
    readonly?: boolean,
    className?: string,
    defaultValue?: string,
    autoComplete?: boolean,
    hasIcon?: boolean,
    icon: string,
    id: string,
    name: string,
    placeholder?: string,
    onChange(e:ChangeEvent<HTMLInputElement>):void

}

export interface IPasswordInput{
    showFocus?: boolean,
    ref?:RefObject<HTMLInputElement>
    readonly?: boolean,
    className?: string,
    defaultValue?: string,
    autoComplete?: boolean,
    hasIcon?: boolean,
    icon: string,
    id: string,
    name: string,
    placeholder?: string,
    onChange(e:ChangeEvent<HTMLInputElement>):void

}

// Interface.util.ts
export interface IButton {
    text: string,
    to: string, // Path for routing,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Optional onClick with correct type

    
}
export interface IIconButton{
    width?:string,
    height?:string,
    icon:{
        type: 'web'|'image',
        name?: string,
        url?: string
    }
}


// src/types.ts
export interface Note {
    _id: string;
    title: string;
    content: string;
  }
  