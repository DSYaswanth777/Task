//**React Imports */
import React, { useEffect, useState } from "react";
//**React Hook Form Imports */
import { useForm, Controller } from "react-hook-form";
//**React Strap components import */
import { Button } from "reactstrap";
//**External css import for styling*/
import "../../assets/css/Form.css";
//**Importing Yup resolver for reac-hook-form with yup validation */
import { yupResolver } from "@hookform/resolvers/yup";
//**Importing Form Schema */
import schema from "../../formSchema";
import { toast } from "react-toastify";

export default function FormData() {
  //**State for option selection */
  const [selectedOption, setSelectedOption] = useState("");
//**Form Data state intilaztion */
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    sex: '',
    mobileNumber: '',
    guardian: '',
    email: '',
    emergencyContactNumber: '',
    address: '',
    state: '',
    city: '',
    country: '',
    pinCode: '',
    religion: '',
    martialStatus: '',
    bloodGroup: '',
    nationality: '',
    guardianDetail: "",
    input: "",
    type: ""
  });
  //**Use Form Intilaztion and it's methods */
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
//**Options for Govt Issued ID */
  const options = [
    { label: "Aadhar", value: "aadhar" },
    { label: "PAN", value: "pan" }
  ];
//**Submit handler */
  const onSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    fetch('http://localhost:5000/api-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        toast.success('Data saved successfully!');
      })
      .catch(error => console.error(error));
  }
  //**Handle Change function for onchange function */
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  //**Key press actions */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        handleSubmit(onSubmit)();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleSubmit, onSubmit,]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
      <div className="container mt-5 bg-light p-4 rounded">
        {/* Personal Details */}
        <h4 className="mb-3">Personal Details</h4>
        <div className="d-flex gap-3 mb-3">
          <div>
            <label htmlFor="name" className="labelTxt me-3 ">Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              style={{ width: "350px" }}
              className='me-2'
            />
            {errors.name && (
              <span className="error text-danger">{errors.name.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="dob" className="labelTxt me-3 ">Date of Birth or Age</label>
            <input
              type="text"
              placeholder="Date Of Birth or Age in years"
              {...register("dateOfBirth", { required: true })}
              style={{ width: "220px" }}
            />
            {errors.dateOfBirth && (
              <span className="error text-danger">
                {errors.dateOfBirth.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="sex" className="labelTxt me-3">Sex</label>
            <Controller
              name="sex"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <select {...field}
                  style={{ width: "150px" }}

                >
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


        </div>
        <div className="d-flex mb-3 gap-3">
          <div>
            <label htmlFor="tel" className="labelTxt me-3">Mobile</label>
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
            <label className="labelTxt me-2">Govt Issued ID</label>
            <select {...register("type")} defaultValue="" onChange={(e) => setSelectedOption(e.target.value)} className='me-2'>
              <option value="" disabled>ID Type</option>
              {options.map(({ label, value }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <input type="text" {...register("input")}
            style={{width:"250px"}}
              placeholder={selectedOption === "aadhar" ? "Enter 12 digit Aadhar number" : "Enter 10 character PAN number"}
            />
            {errors.input && <span className="text-danger">{errors.input.message}</span>}
          </div>
        </div>
        {/* Contact Details */}
        <h4 className="mb-3">Contact Details</h4>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <label className="labelTxt me-2">Guardian</label>
            <Controller
              name="guardian"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field} className='me-2'>
                  <option value="">Enter Type</option>
                  <option value="mother">Mother</option>
                  <option value="father">Father</option>
                  <option value="stepFather">Step Father</option>
                  <option value="stepFather">Step Mother</option>
                  <option value="grandMother">Grand Mother</option>
                  <option value="grandFather">Grand Father</option>
                  <option value="legalGuardian">Grand Mother</option>
                </select>
              )}
            />
            <input
              type="text"
              placeholder="Enter Guardian Name"
              {...register("guardianDetail", { required: false })}
            />
            {errors.guardianDetail && (
              <span className="error text-danger">{errors.guardianDetail.message}</span>
            )}
          </div>
          <div>
            <label className="labelTxt me-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email", { required: false })}
            />
            {errors.email && (
              <span className="error text-danger">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label className="labelTxt me-2">Emergency Contact Number</label>
            <input
              type="number"
              placeholder="Enter emergency No"
              {...register("emergencyContactNumber", { required: false })}
            />
            {errors.emergencyContactNumber && (
              <span className="error text-danger">
                {errors.emergencyContactNumber.message}
              </span>
            )}
          </div>
        </div>
        {/* Address Details */}
        <h4 className="mb-3">Address Details</h4>
        <div className="d-flex gap-3 mb-3">
          <div>
            <label htmlFor="address" className="labelTxt me-2">Address</label>
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
            <label htmlFor="state" className="labelTxt me-2">State</label>
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
            <label htmlFor="city" className="labelTxt me-2">City</label>
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
        </div>
        <div>
          <div className="d-flex gap-3 mb-3">

            <div>
              <label htmlFor="country" className="labelTxt me-2">Country</label>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: false }}
                render={({ field }) => (
                  <select {...field}>
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                  </select>
                )}
              />
            </div>
            {errors.country && (
              <span className="error text-danger">
                {errors.country.message}
              </span>
            )}
            <div>
              <label className="labelTxt me-2">Pincode</label>
              <input
                type="number"
                name="pinCode"

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
        </div>
        {/* Other Details */}
        <h4 className="mb-3">Other Details</h4>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <label htmlFor="occupation" className="labelTxt me-2">Occupation</label>
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
            <label htmlFor="religion" className="labelTxt me-2">Religion</label>
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
            <label htmlFor="martialStatus" className="labelTxt me-2">Martial Status</label>
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
            <label htmlFor="bloodGroup" className="labelTxt me-2">Blood Group</label>
            <Controller
              name="bloodGroup"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field} style={{width:"100px"}}>
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
        </div>
        <div>
          <label htmlFor="nationality" className="labelTxt me-2">Nationality</label>
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
        {/* Buttons */}
        
        <div className="d-flex gap-3 justify-content-end mt-3">
          <Button color="danger" outline>
            Cancel
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
