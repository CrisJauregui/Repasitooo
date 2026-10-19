import { IsInt, isNotEmpty, IsNotEmpty, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateBookDto {
  // TODO 1: Add the validators required by the exercise. Do not convert body numbers.

  @IsNotEmpty()
  @MaxLength(80)
  @IsString()
  title!: string;

  @IsNotEmpty()
  @Max(20)
  @Min(0)
  @IsInt()
  availableCopies!: number;

  @IsNotEmpty()
  @Min(1)
  @IsInt()
  categoryId!: number;
}
