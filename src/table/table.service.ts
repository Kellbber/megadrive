import { Injectable } from '@nestjs/common';
import { Table } from 'src/entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TableService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.table.findMany();
  }

  create(dto: CreateTableDto) {
    const data: Table = { ...dto };

    return this.prisma.table.create({
      data,
    });
  }
}
