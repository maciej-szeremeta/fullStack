import { Workout, } from '../workout/entities/workout.entity';

export type CreateWorkoutRes = Pick<Workout, 'id' | 'title' | 'reps' | 'load'>;

// 400 BadRequest - Validation Error

export type GetAllWorkoutsRes = Workout[] | [];

export type GetOneWorkoutRes = Workout;

// 404 NotFoundException - 'Brak takiego ćwiczenia'

export type UpdateWorkoutRes = Pick<Workout, 'id' | 'title' | 'reps' | 'load'>;;