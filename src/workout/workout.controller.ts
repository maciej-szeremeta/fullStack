import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe, } from '@nestjs/common';
import { CreateWorkoutRes, GetAllWorkoutsRes, GetOneWorkoutRes, UpdateWorkoutRes, } from '../interfaces/workout';
import { CreateWorkoutDto, } from './dto/create-workout.dto';
import { UpdateWorkoutDto, } from './dto/update-workout.dto';
import { WorkoutService, } from './workout.service';

@Controller('/workouts')
export class WorkoutController {

  constructor(private readonly workoutService: WorkoutService) { }

   // @ GET All Workouts
   // @ Auth All
   @Get('/')
  async getAllWorkouts():Promise<GetAllWorkoutsRes> {
    return this.workoutService.getAllWorkouts();
  }

   // @ GET One Workout
   // @ Auth All
   @Get('/:id')
   @UsePipes(ValidationPipe)
   async getOneWorkout(
      @Param('id') id: string
   ):Promise<GetOneWorkoutRes> {
     return this.workoutService.getOneWorkout(id);
   }

   // @ POST Workout
   // @ Auth User
   @Post('/')
   @UsePipes(ValidationPipe)
   async addWorkout(
      @Body() workout: CreateWorkoutDto
   ):Promise<CreateWorkoutRes> {
     return this.workoutService.addWorkout(workout);
   }

   // @ DELETE Workout
   // @ Auth User
   @Delete('/:id')
   @UsePipes(ValidationPipe)
   async deleteWorkout(
      @Param('id') id: string
   ):Promise<string> {
     return this.workoutService.deleteWorkout(id);
   }

   // @ Update Workout
   // @ Auth User
   @Patch('/:id')
   @UsePipes(ValidationPipe)
   async updateWorkout(
      @Param('id') id: string,
      @Body() workout: UpdateWorkoutDto
   ):Promise<UpdateWorkoutRes> {
     return this.workoutService.updateWorkout(id, workout);
   }
}