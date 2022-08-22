import { Injectable, NotFoundException, } from '@nestjs/common';
import { CreateWorkoutRes, GetAllWorkoutsRes, GetOneWorkoutRes, UpdateWorkoutRes, } from '../interfaces/workout';
import { CreateWorkoutDto, } from './dto/create-workout.dto';
import { Workout, } from './entities/workout.entity';

@Injectable()
export class WorkoutService {

  async addWorkout(workout: CreateWorkoutDto):Promise<CreateWorkoutRes> {

    const { title, reps, load, } = workout;
    
    const newWorkout = new Workout();
    newWorkout.title = title;
    newWorkout.reps = reps;
    newWorkout.load = load;
    await newWorkout.save();
    return this.filterWorkout(newWorkout);
  };

  filterWorkout(workout: Workout):CreateWorkoutRes {
    const { id, title, reps, load, } = workout;

    return {
      id, title, reps, load,
    };
  };

  async getAllWorkouts():Promise<GetAllWorkoutsRes> {
    return await Workout.find({ order: {
      createdAt: -1,
    }, });
  }

  async getOneWorkout(id: string):Promise<GetOneWorkoutRes> {
    const workout:Workout = await Workout.findOneBy({ id, });
    if (!workout) {
      throw new NotFoundException('Brak takiego ćwiczenia');
    }
    return workout;
  }

  async deleteWorkout(id: string):Promise<string> {
    const workout:Workout = await Workout.findOneBy({ id, });
    if (!workout) {
      throw new NotFoundException('Brak takiego ćwiczenia');
    }
    workout.remove();
    return workout.id;
  }

  async updateWorkout(id: string, workout: CreateWorkoutDto):Promise<UpdateWorkoutRes> {
    
    const foundWorkout:Workout = await Workout.findOneBy({ id, });
    if (!foundWorkout) {
      throw new NotFoundException('Brak takiego ćwiczenia');
    }
    const { title, reps, load, } = workout;
    
    const newWorkout:Workout = new Workout();
    newWorkout.title = title || foundWorkout.title;
    newWorkout.reps = reps || foundWorkout.reps;
    newWorkout.load = load || foundWorkout.load;
    await newWorkout.save();
    return this.filterWorkout(newWorkout);
  };
}
