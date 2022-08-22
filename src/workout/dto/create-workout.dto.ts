import { IsNotEmpty, IsString, } from 'class-validator';

export class CreateWorkoutDto {
   @IsNotEmpty({ message: 'Body nie może być puste.', })
   @IsString({ message: 'Body musi być tekstem.', })
     body: string;
}