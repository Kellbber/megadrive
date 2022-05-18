import { Controller, Get, Post } from "@nestjs/common";
import { create } from "domain";

@Controller('table')
export class TableController {
  @Get()
  findAll(){
    return 'Buscar todas as salas;'
  }
  @Post()
  create(){
    return 'Criar uma sala';
  }

}




