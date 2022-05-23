import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl } from "class-validator";

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'nome do produto',
    example: 'Pizza de Strogonoff',
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: 'descrição do produto',
    example: 'Queijo, carne de gado, tomate e especiarias...',
  })
  description: string;
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'preço do produto',
    example: 67.90,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'imagem do produto',
    example: 'https://i.imgur.com/hNE75Iw.png',
  })
  image: string;

}
