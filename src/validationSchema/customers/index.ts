import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  transporter_id: yup.string().nullable(),
  vehicle_id: yup.string().nullable(),
});
