import { Tag } from "../entities/Tag";

interface ITagRepository{
   create(name:string, id?:string ):Promise<Tag>
   list():Promise<Tag[]>
   findByName(name:string):Promise<Tag>
}

export {ITagRepository}