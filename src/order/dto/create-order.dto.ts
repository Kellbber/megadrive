import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsUUID } from "class-validator";

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'id do usuário que está criando',
    example: 'eebb5acb-2c07-4d22-bf4e-8072073fc34a'
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
    example: '["5bd43fff-e902-4cdb-a446-c4145ad2f684"]'
  })
  products: string[];
}

