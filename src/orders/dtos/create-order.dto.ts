import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsUUID()
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsUUID()
  @IsNotEmpty()
  @IsString()
  productId: string;
}
