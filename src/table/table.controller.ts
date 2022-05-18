import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Table } from 'src/entities/table.entity';
import { CreateTableDto } from './dto/create-table.dto';
import { TableService } from './table.service';
@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todas as Salas'
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma sala única por ID'
  })
  findOne(@Param('id') id:string): Promise<Table>{
    return this.tableService.findOne(id)
  }
  @Post()
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }
}
