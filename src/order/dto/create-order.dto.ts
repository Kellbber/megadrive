import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsPositive, IsUUID, ValidateNested } from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'id do usuário que está criando',
    example: 'eebb5acb-2c07-4d22-bf4e-8072073fc34a',
  })
  userId: string;
  @ApiProperty({
    description: 'numero da mesa que esta realizando pedido',
    example: '1',
  })
  @IsInt()
  @IsPositive()
  tableNumber: number;
  @ValidateNested({
    each: true,
  })
  @Type(()=>CreateOrderProductDto)
  @ApiProperty({
    description: 'lista com os ids do produtos que estao no pedido',
    type: [CreateOrderProductDto],
  })
  products: CreateOrderProductDto[];
}
