import { IsNotEmpty, IsString, } from 'class-validator';

export class UpdateWorkoutDto {
   @IsNotEmpty({ message: 'Body nie może być puste.', })
   @IsString({ message: 'Body musi być tekstem.', })
     body: string;
}