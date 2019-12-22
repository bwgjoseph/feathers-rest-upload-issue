// import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';

class Event extends Service {
  // constructor(options: Partial<MongooseServiceOptions>, _app: Application) {
  constructor(options: Partial<MemoryServiceOptions>, _app: Application) {
    super(options);
  }
}

export default Event;
