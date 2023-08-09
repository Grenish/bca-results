import React, { useState } from 'react';

const GpaCalculator = () => {
  const [collection, setCollection] = useState({});
  const [gpa, setGpa] = useState(0);

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
    const newItem = prompt("Enter course name:");
    const newGrade = prompt("Enter grade (S, A, B, C, D, E, F):");
    const newCredit = parseInt(prompt("Enter credit (e.g., 4):"), 10);

    setCollection((prevCollection) => ({
      ...prevCollection,
      [newItem]: { grade: newGrade, credit: newCredit },
    }));
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
    setGpa(Math.round(gpaValue * 100) / 100);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">GPA Calculator</h2>
        <div className="mb-4">
          <button
            onClick={handleAddCourse}
            className="bg-blue-500 text-white rounded px-4 py-2 mr-2 hover:bg-blue-600"
          >
            Add Course
          </button>
          <button
            onClick={calculateGpa}
            className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
          >
            Calculate GPA
          </button>
        </div>
        <ul className="mb-4">
          {Object.keys(collection).map((item) => (
            <li key={item} className="mb-2">
              {item}: {collection[item].grade} (Credits: {collection[item].credit})
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold">GPA: {gpa}</h3>
      </div>
    </div>
  );
};

export default GpaCalculator;
