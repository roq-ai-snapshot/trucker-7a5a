import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SupplierInterface {
  id?: string;
  supply_info: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SupplierGetQueryInterface extends GetQueryInterface {
  id?: string;
  supply_info?: string;
  user_id?: string;
}
