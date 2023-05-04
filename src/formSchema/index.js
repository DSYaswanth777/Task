//**Importing Yup libarary */
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, {
      message: "*letters and spaces",
    })
    .required(),
  dateOfBirth: yup
  .mixed()
  .test('isValid', 'Invalid date of birth', (value) => {
    if (!value) {
      return false;
    }
    const isDobValid = /^\d{2}\/\d{2}\/\d{4}$/.test(value) || /^[1-9][0-9]{0,1}$/.test(value);
    if (!isDobValid) {
      return false;
    }
    return true;
  })
    .required(),
  sex: yup.string().required(),
  mobileNumber: yup.string().matches(/^((\+)?(\d{2}[-])?(\d{10}){1})?$/, {
    message: "Mobile number must be an Indian number",
  }),
  type: yup.string(),
  input: yup.string().when("type", {
    is: "aadhar",
    then: () => yup.string().matches(/^\d{12}$/,{message:"must 12 digit aadhar number"}),
    otherwise:()=> yup.string().matches(/^[A-Za-z0-9]{10}$/,{message:"10 Digit Pan card"})
  }),
  guardian: yup.string(),
  guardianDetail: yup.string().matches(/^[a-zA-Z ]+$/, {
    message: "*letters and spaces",
  }),
  email: yup.string().matches(/^[\w.-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,}$/, {
    message: "Email must be Valid",
  }),
  emergencyContactNumber: yup
    .string()
    .matches(/^((\+)?(\d{2}[-])?(\d{10}){1})?$/, {
      message: "Emergency contact number must be an Indian number",
    }),
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
  pinCode: yup.string(),
  religion: yup.string(),
  martialStatus: yup.string(),
  bloodGroup: yup.string(),
  nationality: yup.string(),
});
export default schema;
