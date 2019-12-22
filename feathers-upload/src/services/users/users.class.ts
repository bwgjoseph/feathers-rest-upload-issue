import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';

class Users extends Service {
  constructor(options: Partial<MemoryServiceOptions>, _app: Application) {
    super(options);
  }
}

export default Users;
