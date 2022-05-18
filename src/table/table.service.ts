import { Injectable } from '@nestjs/common';
import { Table } from 'src/entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

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


  update(id: string, dto: UpdateTableDto): Promise<Table> {
    const data: Partial<Table> ={...dto};
    
   return this.prisma.table.update({
     where: {id: id},
    data,
   })
  }
}
