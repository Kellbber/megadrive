import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateOrderProductDto{

  @IsUUID()
  @ApiProperty({
    description: 'ID do produto',
    example: '5bd43fff-e902-4cdb-a446-c4145ad2f684'
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade de items no pedido',
    example: 1
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Obs do produto',
    example: 'sem cebola'
  })
  description: string;



}
