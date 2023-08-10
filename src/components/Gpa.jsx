import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gpa = () => {
  const [collection, setCollection] = useState({});
  const [gpa, setGpa] = useState(0);
  const [fields, setFields] = useState([{ name: "", grade: "", credit: "" }]);

  const getPointFromGrade = (grade) => {
    switch (grade) {
      case "S":
        return 10.0;
      case "A":
        return 9.0;
      case "B":
        return 8.0;
      case "C":
        return 7.0;
      case "D":
        return 6.0;
      case "E":
        return 5.0;
      default:
        return 0.0;
    }
  };

  const handleAddCourse = () => {
    const updatedCollection = {};
    fields.forEach((field) => {
      if (field.name && field.grade && field.credit) {
        updatedCollection[field.name] = {
          grade: field.grade,
          credit: parseInt(field.credit, 10),
        };
      }
    });
    calculateGpa(updatedCollection);
    setCollection(updatedCollection);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  const handleAddField = () => {
    setFields([...fields, { name: "", grade: "", credit: "" }]);
  };

  const calculateGpa = () => {
    let decPoint, decCredit;
    let totalPoint = 0.0,
      totalCredit = 0.0;

    Object.keys(collection).forEach((item) => {
      decPoint = getPointFromGrade(collection[item].grade);

      if (decPoint >= 0 && collection[item].grade[0] !== "P") {
        decCredit = collection[item].credit;
        totalPoint += decPoint * decCredit;
        totalCredit += decCredit;
      }
    });

    const gpaValue = totalPoint / totalCredit;
    setGpa(isNaN(gpaValue) ? 0 : Math.round(gpaValue * 100) / 100);
  };

  return (
    <div className="bg-gray-200">
      <Link to="/" className="p-2">Go Back</Link>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-auto">
          <h2 className="text-2xl font-semibold mb-4">GPA Calculator</h2>
          <div className="mb-4 space-y-2">
            {fields.map((field, index) => (
              <div
                key={index}
                className="flex md:space-x-2 md:w-full p-1 gap-2 md:gap-0"
              >
                
                <input
                  type="text"
                  placeholder="Subject name"
                  className="border rounded w-full md:w-36 p-2 mb-2 md:mb-0"
                  value={field.name}
                  onChange={(e) =>
                    handleFieldChange(index, "name", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Grade"
                  className="border rounded w-full md:w-36 p-2 mb-2 md:mb-0"
                  value={field.grade}
                  onChange={(e) =>
                    handleFieldChange(index, "grade", e.target.value)
                  }
                />
                <select
                  name="credits"
                  id="credits"
                  value={field.credit}
                  onChange={(e) =>
                    handleFieldChange(index, "credit", e.target.value)
                  }
                  className="border rounded p-2 w-full md:w-14 mb-2 md:mb-0"
                >
                  <option value="credits" selected disabled>Credits</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            ))}
            <button
              onClick={handleAddField}
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
            >
              Add Field
            </button>
          </div>
          <button
            onClick={handleAddCourse}
            className="bg-green-500 text-white rounded px-4 py-2 mt-2 w-full md:w-auto hover:bg-green-600"
          >
            Calculate GPA
          </button>

          {/* information text */}
          <div className="p-2 bg-lavender w-full md:w-[240px] rounded-2xl my-3">
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Note:</span> Double Click to
              calculate GPA
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-4">GPA: {gpa}</h3>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-auto">
          
        </div>
      </div>
    </div>
  );
};

export default Gpa;
