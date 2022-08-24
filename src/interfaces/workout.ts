
export interface WorkoutEntity{
   id: string;
   title: string;
   reps: number;
   load: number;
   createdAt: Date;
   updatedAt: Date;
}

export type CreateWorkoutRes = Omit<WorkoutEntity, 'createdAt'| 'updatedAt'>;

// 400 BadRequest - Validation Error

export type GetAllWorkoutsRes = WorkoutEntity[] | [];

export type GetOneWorkoutRes = WorkoutEntity;

// 404 NotFoundException - 'Brak takiego ćwiczenia'

export type UpdateWorkoutRes = Omit<WorkoutEntity, 'createdAt'| 'updatedAt'>;