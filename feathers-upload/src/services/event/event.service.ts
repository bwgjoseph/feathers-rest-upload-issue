// Initializes the `event` service on path `/event`
import { ServiceAddons } from '@feathersjs/feathers';
import multerware from '../../middleware/multerware';
import { Application } from '../../declarations';
import Event from './event.class';
import hooks from './event.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'event': Event & ServiceAddons<Event>;
  }
}

export default function (app: Application) {
  const options = {
    startId: 1,
  };

  // Initialize our service with any options it requires
  app.use('/event',
    multerware.array('files'),
    (req, res, next) => {
      if (req.feathers) {
        req.feathers.file = req.files;
      }
      next();
    },
    // If don't cast to any here, will complain
    new Event(options, app) as any);

  // Get our initialized service so that we can register hooks
  const service = app.service('event');

  service.hooks(hooks);
}
