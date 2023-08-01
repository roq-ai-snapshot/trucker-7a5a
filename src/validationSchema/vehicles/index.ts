import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  vehicle_info: yup.string().required(),
  trip_cost: yup.number().integer().required(),
  reminder: yup.string().nullable(),
  position: yup.string().required(),
  organization_id: yup.string().nullable(),
});
