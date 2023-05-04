import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, {
      message: "*letters and spaces",
    })
    .required(),
  dateOfBirth: yup
    .string()
    .matches(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/, {
      message: "*must be dd/mm/yyyy format",
    })
    .required(),
  sex: yup.string().required(),
  mobileNumber: yup.string().matches(/^((\+)?(\d{2}[-])?(\d{10}){1})?$/, {
    message: "Mobile number must be an Indian number",
  }),
  idType: yup.string().required("Please select an ID type"),
  idNumber: yup.string().when("idType", {
    is: "aadhar",
    then: yup
      .string()
      .matches(/^\d{12}$/, "Aadhar number must be 12 digits")
      .required("Please enter Aadhar number"),
    otherwise: yup
      .string()
      .matches(
        /^[A-Z\d]{10}$/,
        "PAN number must be 10 alphanumeric characters in uppercase"
      ),
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
