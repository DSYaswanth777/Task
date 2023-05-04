//**React Imports */
import React, { useEffect, useRef, useState } from "react";
//**Datatable imports */
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-buttons/js/dataTables.buttons";
import "datatables.net-buttons-dt";
//**Table function */
function MyTable(props) {
  //**Ref */
  const tableRef = useRef(null);
//**Data setter */
  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      data: props.data,
      columns: props.columns,
      responsive: true,
      lengthMenu: [
        [25, 50, 100, -1],
        [25, 50, 100, "All"],
      ],
      pageLength: 25,
      searching: true,
      searchableCaseInsensitive: true,
    });
    return () => {
      table.destroy();

    };
  }, [props.data, props.columns]);

  return (
    <table
      ref={tableRef}
      className="display responsive nowrap"
      style={{ width: "100%" }}
    ></table>
  );
}

const Table = (props) => {
  //**Table Columns */
  const columns = [
    { title: "Name", data: "name" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Sex", data: "sex" },
    { title: "Mobile Number", data: "mobileNumber", defaultContent: "-" },
    { title: "Govt ID", data: "input", defaultContent: "-" },
    { title: "Guardian Detail", data: "guardianDetail", defaultContent: "-" },
    { title: "Email", data: "email" },
    {
      title: "Emergency Contact Number",
      data: "emergencyContactNumber",
      defaultContent: "-",
    },
    { title: "Address", data: "address", defaultContent: "-" },
    { title: "State", data: "state", defaultContent: "-" },
    { title: "City", data: "city", defaultContent: "-" },
    { title: "Country", data: "country", defaultContent: "-" },
    { title: "Pin Code", data: "pinCode", defaultContent: "-" },
    { title: "Religion", data: "religion", defaultContent: "-" },
    { title: "Martial Status", data: "martialStatus", defaultContent: "-" },
    { title: "Blood Group", data: "bloodGroup", defaultContent: "-" },
    { title: "Nationality", data: "nationality", defaultContent: "-" },
  ];
  //**State */
  const [data, setData] = useState([]);
//**API calling to fetch the Data */
  useEffect(() => {
    fetch("http://localhost:5000/api-data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    console.log("Data loaded:", props.data);
  }, [props.data]);
  return (
    <div className="mt-5 m-2">
      <div className="d-flex  me-5">
        <MyTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Table;
