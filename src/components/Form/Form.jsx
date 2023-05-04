import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "reactstrap";
import "../scss/Form.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export default function App() {
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

    govtId: yup.string(),

    garudian: yup.string(),
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
    pinCode: yup
      .string(),
    religion: yup.string(),
    martialStatus: yup.string(),
    bloodGroup: yup.string(),
    nationality: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mt-5">
        <h4 className="mb-3">Personal Details</h4>
        <div className="d-flex justify-content-between mb-5">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="error text-danger">{errors.name.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="dob">Date of Birth or Age</label>
            <input
              type="text"
              placeholder="Date Of Birth"
              {...register("dateOfBirth", { required: true })}
            />
            {errors.dateOfBirth && (
              <span className="error text-danger">
                {errors.dateOfBirth.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="sex">Sex</label>
            <Controller
              name="sex"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Enter Sex </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              )}
            />
            {errors.sex && (
              <span className="error text-danger">{errors.sex.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="">Mobile</label>
            <input
              type="tel"
              placeholder="Mobile number"
              {...register("mobileNumber", { required: false })}
            />
            {errors.mobileNumber && (
              <span className="error text-danger">
                {errors.mobileNumber.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="govtId">Govt Issued ID</label>
            <Controller
              name="govtId"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">ID Type</option>
                  <option value="aadhar">Aadhar</option>
                  <option value="pan">Pan</option>
                </select>
              )}
            />
            {errors.govtId && (
              <span className="error text-danger">{errors.govtId.message}</span>
            )}
            <input />
          </div>
        </div>
        <h4 className="mb-3">Contact Details</h4>
        <div className="d-flex justify-content-between mb-5">
          <div>
            <label htmlFor="garudian">Garudian Details</label>
            <Controller
              name="garudian"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Enter Label</option>
                  <option value="mother">Mother</option>
                  <option value="father">Father</option>
                  <option value="other">Other</option>
                </select>
              )}
            />
            {errors.garudian && (
              <span className="error text-danger">
                {errors.garudian.message}
              </span>
            )}
            {/* <input /> */}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: false })}
            />
            {errors.email && (
              <span className="error text-danger">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label>Emergency Contact Number</label>
            <input
              type="number"
              placeholder="Emergency Contact Number"
              {...register("emergencyContactNumber", { required: false })}
            />
            {errors.emergencyContactNumber && (
              <span className="error text-danger">
                {errors.emergencyContactNumber.message}
              </span>
            )}
          </div>
        </div>
        <h4 className="mb-3">Address Details</h4>
        <div className="d-flex justify-content-between mb-5">
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: false })}
            />
            {errors.address && (
              <span className="error text-danger">
                {errors.address.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="state">State</label>
            <Controller
              name="state"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Enter State</option>
                  <option value="Andhra">Andhra</option>
                  <option value="Maydhya pradesh">Madhya Pradesh</option>
                </select>
              )}
            />
            {errors.state && (
              <span className="error text-danger">{errors.state.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="city">City</label>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Enter City/Village/Town</option>
                  <option value="hyderabad">Hydrebad</option>
                  <option value="mumbai">Mumbai</option>
                </select>
              )}
            />
            {errors.city && (
              <span className="error text-danger">{errors.city.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">India</option>
                  <option value="india">India</option>
                  <option value="china">China</option>
                </select>
              )}
            />
            {errors.country && (
              <span className="error text-danger">
                {errors.country.message}
              </span>
            )}
          </div>
          <div>
            <label>Pincode</label>

            <input
              type="number"
              name="pinCode"
              min={6}
              max={6}
              placeholder="Enter Pin code"
              {...register("pinCode", { required: false })}
            />
            {errors.pinCode && (
              <span className="error text-danger">
                {errors.pinCode.message}
              </span>
            )}
          </div>
        </div>
        <h4 className="mb-3">Other Details</h4>
        <div className="d-flex justify-content-between mb-5">
          <div>
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              placeholder="Enter Occupation"
              {...register("occupation", { required: false })}
            />
            {errors.occupation && (
              <span className="error text-danger">
                {errors.occupation.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="religion">Religion</label>
            <Controller
              name="religion"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Enter Religion</option>
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                </select>
              )}
            />
            {errors.religion && (
              <span className="error text-danger">
                {errors.religion.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="martialStatus">Martial Status</label>
            <Controller
              name="martialStatus"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Enter Martial Status</option>
                  <option value="married">Married</option>
                  <option value="single">Single</option>
                </select>
              )}
            />
            {errors.martialStatus && (
              <span className="error text-danger">
                {errors.martialStatus.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="bloodGroup">Blood Group</label>
            <Controller
              name="bloodGroup"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Group</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                </select>
              )}
            />
            {errors.bloodGroup && (
              <span className="error text-danger">
                {errors.bloodGroup.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="nationality">Nationality</label>
            <Controller
              name="nationality"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Country</option>
                  <option value="india">India</option>
                  <option value="china">China</option>
                </select>
              )}
            />
            {errors.nationality && (
              <span className="error text-danger">
                {errors.nationality.message}
              </span>
            )}
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-end mt-3">
          <Button color="danger" outline>
            Cancel
            <br />
            (Esc)
          </Button>
          <Button type="submit" color="success">
            Submit <br />
            (Ctrl+S)
          </Button>
        </div>
      </div>
    </form>
  );
}
