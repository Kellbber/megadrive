import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Table } from 'src/entities/table.entity';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { TableService } from './table.service';
@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todas as Salas',
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma sala única por ID',
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tableService.findOne(id);
  }
  @Post()
  @ApiOperation({
    summary: 'Criar uma mesa',
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar uma sala por ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    return this.tableService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation ({
    summary: 'Remover uma sala por ID'
  })
  delete(@Param('id') id: string) {
    this.tableService.delete(id)
  }
}
