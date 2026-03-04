import { useEffect, useState } from "react";
import students from "../static/static-data";

export const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [studentsData, setStudentsData] = useState(students);
  const [formData, setFormData] = useState({
    rollNumber: "",
    name: "",
    age: "",
    email: "",
    marks: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

 
  const handleEdit = (rollNumber) => {
    const studentToEdit = studentsData.find(
      (student) => student.rollNumber === rollNumber,
    );
    setFormData(studentToEdit);
    setIsEditing(true);
  };

 
  const handleUpdate = () => {
    const updatedStudents = studentsData.map((student) =>
      student.rollNumber === formData.rollNumber ? formData : student,
    );

    setStudentsData(updatedStudents);
    setIsEditing(false);
  };

 
  const handleDelete = (rollNumber) => {
    const filteredStudents = studentsData.filter(
      (student) => student.rollNumber !== rollNumber,
    );
    setStudentsData(filteredStudents);
  };

  return (
    <div className="bg-white w-11/12 h-screen max-w-6xl mx-auto shadow-xl p-6">
      <div className="text-center mb-6">
        <p className="text-2xl font-semibold">Welcome! {username}</p>
      </div>

      
      {isEditing && (
        <div className="mb-6 flex gap-3 flex-wrap">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
            className="border p-2"
          />
          <input
            type="text"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="Age"
            className="border p-2"
          />
          <input
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email"
            className="border p-2"
          />
          <input
            type="text"
            value={formData.marks}
            onChange={(e) =>
              setFormData({ ...formData, marks: e.target.value })
            }
            placeholder="Marks"
            className="border p-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      )}

     
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th>Roll No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {studentsData.map((student) => (
            <tr key={student.rollNumber} className="text-center border-t">
              <td>{student.rollNumber}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.marks}</td>
              <td className="space-x-2">
                <button
                  onClick={() => handleEdit(student.rollNumber)}
                  className="bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(student.rollNumber)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 