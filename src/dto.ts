import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class UserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsNumber()
  age: number;
}

export class PartialUserDto extends PartialType(UserDto) {}
