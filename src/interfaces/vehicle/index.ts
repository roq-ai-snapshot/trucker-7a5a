import { CustomerInterface } from 'interfaces/customer';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  vehicle_info: string;
  trip_cost: number;
  reminder?: string;
  position: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  customer?: CustomerInterface[];
  organization?: OrganizationInterface;
  _count?: {
    customer?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_info?: string;
  reminder?: string;
  position?: string;
  organization_id?: string;
}
