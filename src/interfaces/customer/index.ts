import { TransporterInterface } from 'interfaces/transporter';
import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  transporter_id?: string;
  vehicle_id?: string;
  created_at?: any;
  updated_at?: any;

  transporter?: TransporterInterface;
  vehicle?: VehicleInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  transporter_id?: string;
  vehicle_id?: string;
}
