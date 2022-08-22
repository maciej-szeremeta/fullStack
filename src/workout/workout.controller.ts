import { Controller, Get, } from '@nestjs/common';

@Controller('/workouts')
export class WorkoutController {

   // @ GET All Workouts
   // @ Auth All
   @Get('/')
  getAllWorkouts() {
    return { msg:'GET All Workouts', };
  }

   // @ GET One Workout
   // @ Auth All
   @Get('/:id')
   getOneWorkout() {
     return { msg:'GET One Workout', };
   }
}