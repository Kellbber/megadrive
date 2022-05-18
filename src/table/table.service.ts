import { Injectable } from '@nestjs/common';
import { Table } from 'src/entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TableService {

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  findOne(id: string): Promise<Table>{
    return this.prisma.table.findUnique({
      where: {
        id: id

      }
    })
  }
  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({
      data,
    });
  }
}
