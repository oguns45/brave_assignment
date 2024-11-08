import {model, Schema, Types} from 'mongoose'

export interface TodoInterface {
    title: string;
    completed?: boolean;
    user: Types.ObjectId;
    createdAt: Date
  }

  export interface UserInterface {
    email: string;
    password: string;
    username: string;
    _id?:Types.ObjectId
    createdAt: Date
}
export interface INoteInterface{

  title: string;
  content:string;
  updated: Date;
  date?:Date;
  time?:Date;
  user?:Types.ObjectId;

  createdAt: Date

}
