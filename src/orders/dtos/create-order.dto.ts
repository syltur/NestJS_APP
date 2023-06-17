import { Length, IsString, IsNotEmpty } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  client: string;

  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 50)
  address: string;
}
