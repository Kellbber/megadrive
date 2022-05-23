import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de usuário *Deve ser único*',
    example: "ronaldonazario"
  })
  nickname: string;


  @IsString()
  @ApiProperty({
    description: 'Nome do usuário de *exibição*',
    example: 'Ronaldo Nazário',
  })
  name: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'senha do usuário para login',
    example: 'Abc@123456'
  })
  password: string;

  @ApiProperty({
    description: "verificar se a senha é igual.",
    example: 'Abc@123456'
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: "Imagem do usuário",
    example: 'https://avatars.githubusercontent.com/u/96138394'
  })
  image: string;
}
