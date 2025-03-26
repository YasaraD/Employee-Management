import React, { useEffect, useState } from "react";
import axiosInstance from "../axios"; // Import the Axios instance

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]); // State to store employees
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch employees from the backend API
  useEffect(() => {
    axiosInstance
      .get("employees") // Make a GET request to retrieve employees
      .then((response) => {
        setEmployees(response.data); // Update state with employees data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading text while fetching data
  }

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position} - ${employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
