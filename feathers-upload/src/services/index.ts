import { Application } from '../declarations';
import event from './event/event.service';
import users from './users/users.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(event);
}
