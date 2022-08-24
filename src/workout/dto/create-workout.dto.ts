import { IsNotEmpty, IsNumber, IsString, Length, Min, } from 'class-validator';

export class CreateWorkoutDto {
  @IsNotEmpty({ message: 'Title nie może być puste.', })
  @Length(3, 255, { message:'Title musi mieć co najmniej 4 znaki', })
  @IsString({ message: 'Title musi być tekstem.', })
    title: string;

  @IsNotEmpty({ message: 'Reps nie może być puste.', })
  @Min(1, { message:'Reps musi być większa niż 0.', })
  @IsNumber({ allowNaN: false, }, { message: 'Reps musi być liczbą.', })
    reps: number;

  @IsNotEmpty({ message: 'Load nie może być puste.', })
  @Min(1, { message:'Load musi być większa niż 0.', })
  @IsNumber({ allowNaN: false, }, { message: 'Load musi być liczbą.', })
    load: number;
}