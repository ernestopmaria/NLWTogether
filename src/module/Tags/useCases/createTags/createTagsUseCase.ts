import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/AppError/AppError"
import { ITagRepository } from "../../repositories/ITagsRepository"


@injectable()
class CreateTagsUseCase{
  constructor(
    @inject("TagRepositories")
    private tagRepository:ITagRepository  ){}

  async execute (name:string):Promise<void>{
     if(!name){
      throw new AppError("name is incorrect")  
      }
  const existsName= await this.tagRepository.findByName(name)    
    if(existsName){
      throw new AppError("this name already exists!!")
    }
    await this.tagRepository.create(name) 
  }
}

export {CreateTagsUseCase}