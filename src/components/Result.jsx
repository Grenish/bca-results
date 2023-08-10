import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  business,
  cProgrammingI,
  fde,
  cProgrammingLabI,
  mathsI,
  html,
  htmlLab,
} from "../data/sem-1";
import {
  cProgrammingII,
  mathsII,
  dbms,
  dbmsLab,
  cProgrammingIILab,
  php,
  phplabII,
  pbl,
} from "../data/sem-2";
import { Loader } from "../loader";

const Result = () => {
  const [id, setId] = useState("");
  const [tableData, setTableData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleFolderChange = (event) => {
    setSelectedFolder(event.target.value);
  };

  const handleSearch = () => {
    setShowLoader(true);

    let selectedData;

    if (selectedFolder === "Sem-1") {
      selectedData = [
        business,
        cProgrammingI,
        fde,
        mathsI,
        html,
        htmlLab,
        cProgrammingLabI,
      ];
    } else if (selectedFolder === "Sem-2") {
      selectedData = [
        cProgrammingII,
        mathsII,
        dbms,
        php,
        phplabII,
        dbmsLab,
        cProgrammingIILab,
        pbl,
      ];
    }

    const filteredData = selectedData
      .map((subjectData) => {
        console.log("subjectData:", subjectData);

        const marks =
          selectedFolder === "Sem-1" ? subjectData.marks : subjectData.marks2;

        if (marks) {
          return marks.filter((item) => item.REGNO === id);
        }
        return [];
      })
      .flat();


    setTimeout(() => {
      setShowLoader(false);
      setTableData(filteredData);
    }, Math.floor(Math.random() * (5000 - 2000) + 2000));
  };

  return (
    <div className="bg-gray-200">
      <Link to="/" className="p-2">
        Go Back
      </Link>

      <div className=" min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-md shadow-lg w-full sm:w-[50%]">
          <h2 className="text-2xl font-bold mb-4 text-center">Search Form</h2>
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Your ID:
            </label>
            <input
              type="text"
              id="id"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              value={id}
              onChange={handleIdChange}
              placeholder="Your Reg No."
            />
            <select
              name="semester"
              className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              value={selectedFolder}
              onChange={handleFolderChange}
            >
              <option>Select Semester</option>
              <option value="Sem-1">Semester 1</option>
              <option value="Sem-2">Semester 2</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full"
            onClick={handleSearch}
          >
            Search
          </button>

          {showLoader && <Loader />}
          {tableData.length > 0 && !showLoader && (
            <div className="mt-8 h-auto overflow-x-auto">
              <h2 className="text-2xl font-bold">Table Data for ID: {id}</h2>
              <div className="sm:overflow-hidden">
                <table className="table-auto w-full sm:w-auto mt-4">
                  <thead>
                    <tr>
                      <th className="px-2 py-1 sm:px-4 sm:py-2">Subject</th>
                      <th className="px-2 py-1 sm:px-4 sm:py-2">
                        Internal Marks
                      </th>
                      <th className="px-2 py-1 sm:px-4 sm:py-2">UM</th>
                      <th className="px-2 py-1 sm:px-4 sm:py-2">Total Marks</th>
                      <th className="px-2 py-1 sm:px-4 sm:py-2">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        <td className="border px-2 py-1 sm:px-4 sm:py-2">
                          {item.SUBJECT}
                        </td>
                        <td className="border px-2 py-1 sm:px-4 sm:py-2">
                          {item.INT}
                        </td>
                        <td className="border px-2 py-1 sm:px-4 sm:py-2">
                          {item.UM}
                        </td>
                        <td className="border px-2 py-1 sm:px-4 sm:py-2">
                          {item.TOT}
                        </td>
                        <td className="border px-2 py-1 sm:px-4 sm:py-2">
                          {item.GRADE}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
