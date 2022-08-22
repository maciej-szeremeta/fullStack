import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe, } from '@nestjs/common';
import { CreateWorkoutDto, } from './dto/create-workout.dto';
import { UpdateWorkoutDto, } from './dto/update-workout.dto';

@Controller('/workouts')
export class WorkoutController {

   // @ GET All Workouts
   // @ Auth All
   @Get('/')
  async getAllWorkouts() {
    return { msg:'GET All Workouts', };
  }

   // @ GET One Workout
   // @ Auth All
   @Get('/:id')
   @UsePipes(ValidationPipe)
   async getOneWorkout(
      @Param('id') id: string
   ) {
     return { msg:`GET One Workout nr ${id}`, };
   }

   // @ POST Workout
   // @ Auth User
   @Post('/')
   @UsePipes(ValidationPipe)
   async addWorkout(
      @Body() workout: CreateWorkoutDto
   ) {
     return { msg:'Add Workout', payload:workout, };
   }

   // @ DELETE Workout
   // @ Auth User
   @Delete('/:id')
   @UsePipes(ValidationPipe)
   async deleteWorkout(
      @Param('id') id: string
   ) {
     return { msg:`Delete One Workout nr ${id}`, };
   }

   // @ Update Workout
   // @ Auth User
   @Patch('/:id')
   @UsePipes(ValidationPipe)
   async updateWorkout(
      @Param('id') id: string,
      @Body() workout: UpdateWorkoutDto
   ) {
     return { msg:`Update Workout nr ${id}"`, payload:workout, };
   }
}