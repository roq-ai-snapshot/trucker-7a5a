import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DriverInterface {
  id?: string;
  trip_info: string;
  loading_slip: string;
  e_bill: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DriverGetQueryInterface extends GetQueryInterface {
  id?: string;
  trip_info?: string;
  loading_slip?: string;
  e_bill?: string;
  user_id?: string;
}
