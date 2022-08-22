import { WorkoutController, } from './workout/workout.controller';
import { Module, } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions, } from '@nestjs/typeorm';
import { config, } from 'ormconfig.autosync';
import { AppController, } from './app.controller';
import { AppService, } from './app.service';
import { WorkoutService, } from './workout/workout.service';

@Module({
  imports: [ TypeOrmModule.forRoot(config as TypeOrmModuleOptions), ],
  controllers: [ AppController, WorkoutController, ],
  providers: [ AppService, WorkoutService, ],
})
export class AppModule {}
