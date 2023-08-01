import * as yup from 'yup';

export const driverValidationSchema = yup.object().shape({
  trip_info: yup.string().required(),
  loading_slip: yup.string().required(),
  e_bill: yup.string().required(),
  user_id: yup.string().nullable(),
});
