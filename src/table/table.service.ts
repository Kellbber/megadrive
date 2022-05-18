import { Injectable } from "@nestjs/common";

@Injectable()
export class TableService{

  findAll() {
    return 'Buscar todas as salas;'
  }

  create(){
    return 'Criar uma sala';
  }
  
}


