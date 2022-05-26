import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsUUID } from "class-validator";

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'id do usuário que está criando',
    example: '87987266546'
  })
  userId: string;
  @ApiProperty({
    description: 'numero da mesa que esta realizando pedido',
    example: '1'
  })
  @IsInt()
  @IsPositive()
  tableNumber: number;
  @IsUUID(undefined, {each:true})
  @ApiProperty({
    description: 'lista com os ids do produtos que estao no pedido',
    example: '["id do produto"]'
  })
  products: string[];
}
