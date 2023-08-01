import { CustomerInterface } from 'interfaces/customer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TransporterInterface {
  id?: string;
  service_info: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  customer?: CustomerInterface[];
  user?: UserInterface;
  _count?: {
    customer?: number;
  };
}

export interface TransporterGetQueryInterface extends GetQueryInterface {
  id?: string;
  service_info?: string;
  user_id?: string;
}
