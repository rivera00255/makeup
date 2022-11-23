import Picture from './Picture';

class User {
  username: string;
  email: string;
  password: string;
  phone: string;
  postcode: string;
  address1: string;
  address2?: string;
  photo?: Picture;
  createdAt: Date;
}

export default User;
