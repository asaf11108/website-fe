export * from './cars.service';
import { CarsService } from './cars.service';
export * from './people.service';
import { PeopleService } from './people.service';
export const APIS = [CarsService, PeopleService];
