import { Injectable } from "@nestjs/common";
import { CreateTableDto } from "./dto/create-table.dto";

@Injectable()
export class TableService{

  findAll() {
    return 'Buscar todas as salas;'
  }

  create(createTableDto: CreateTableDto){
    return 'Criar uma sala' + JSON.stringify(createTableDto);
  }

}


