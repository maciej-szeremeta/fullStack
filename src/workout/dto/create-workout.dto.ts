import { IsInt, IsNotEmpty, IsString, } from 'class-validator';

export class CreateWorkoutDto {
  @IsNotEmpty({ message: 'Title nie może być puste.', })
  @IsString({ message: 'Title musi być tekstem.', })
    title: string;

  @IsNotEmpty({ message: 'Reps nie może być puste.', })
  @IsInt({ message: 'Reps musi być liczbą.', })
    reps: number;

  @IsNotEmpty({ message: 'Reps nie może być puste.', })
  @IsInt({ message: 'Reps musi być liczbą.', })
    load: number;
}