import Base from '../common/base.interface';

interface User extends Base {
  email: string;
  password: string;
}

export default User;
