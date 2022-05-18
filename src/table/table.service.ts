import { Injectable } from "@nestjs/common";
import { Table } from "src/entities/table.entity";
import { CreateTableDto } from "./dto/create-table.dto";

@Injectable()
export class TableService{
  tables: Table[] = [];

  findAll() {
    return 'Buscar todas as salas;'
  }

  create(createTableDto: CreateTableDto){
    const table: Table ={ id: 'random_id', ...createTableDto}

    this.tables.push(table);
    return table;
  }

}


