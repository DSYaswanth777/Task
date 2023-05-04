import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-buttons/js/dataTables.buttons";
import "datatables.net-buttons-dt";
function MyTable(props) {
  const tableRef = useRef(null);

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

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api-data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  console.log("Table", data);
  const columns = [
    { title: "Name", data: "name" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Sex", data: "sex" },
    { title: "Mobile Number", data: "mobileNumber", defaultContent: "-" },
    { title: "Govt ID", data: "govtId", defaultContent: "-" },
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

  return (
    <div className="App">
      <div className="d-flex container w-100">
        <MyTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Table;
