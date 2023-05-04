import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-buttons/js/dataTables.buttons'; // Add this line
import 'datatables.net-buttons-dt';
function MyTable(props) {
  const tableRef = useRef(null);

  useEffect(() => {
    const table =  $(tableRef.current).DataTable({
      data: props.data,
      columns: props.columns,
      responsive: true,
      dom: 'Blfrtip', // Add the buttons to the top
      buttons: [
        {
          extend: 'excel', // Add an Excel extraction button
          text: 'Export to Excel',
          exportOptions: {
            columns: ':visible'
          }
        },
      //   {
      //     extend: 'print', // Add a Print button
      //     text: 'Print',
      //     exportOptions: {
      //       columns: ':visible'
      //     }
      //   }
      ],  
      lengthMenu: [ [25, 50, 100, -1], [25, 50, 100, "All"] ],
      pageLength: 25, // Set the default number of rows per page
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
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 35,
      mobile: 9100297633,
      address: "asdfghjkqwertyuiosdcfvgbhnsdfghj",
      govtId: 537617659599,
      garudian: "mother",
      nationality: "Indian",
      sex:"male"
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 28,
      mobile: 9391857572,
      address: "Enter your address",
      govtId: 537617659599,
      garudian: "father",
      nationality: "Indian",
      sex:"male"
    },
    {
      id: 3,
      name: "Bob Smith",
      age: 42,
      mobile: 9100297633,
      address: "asdfghjkqwertyuasdfghjkqwertyuiosdcfvgbhnsdfghjiosdcfvgbhnsdfghj",
      govtId: 537617659599,
      garudian: "mother",
      nationality: "Indian",
      sex:"male"
    },
  ];

  const columns = [
    { title: "Name", data: "name" },
    { title: "Age", data: "age" },
    {title:"Sex",data:"sex"},
    { title: "Mobile", data: "mobile" },
    { title: "Address", data: "address" },
    { title: "GovtID", data: "govtId" },
    { title: "Guardian Details", data: "garudian" },
    { title: "Nationality", data: "nationality" },
    
    

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
