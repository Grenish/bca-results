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
    <div>
      <h2>GPA Calculator</h2>
      <button onClick={handleAddCourse}>Add Course</button>
      <button onClick={calculateGpa}>Calculate GPA</button>
      <br />
      <ul>
        {Object.keys(collection).map((item) => (
          <li key={item}>
            {item}: {collection[item].grade} (Credits: {collection[item].credit})
          </li>
        ))}
      </ul>
      <h3>GPA: {gpa}</h3>
    </div>
  );
};

export default GpaCalculator;
