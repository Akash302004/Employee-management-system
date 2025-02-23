import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S No.",
    selector: (row) => row.sno,
    width: "80px",
  },
  {
    name: "Emp ID",
    selector: (row) => row.employeeId,
    width: "120px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    width: "150px",
  },
  {
    name: "Leave Type",
    selector: (row) => row.leaveType,
    width: "160px",
  },
  {
    name: "Department",
    selector: (row) => row.department,
    width: "160px",
  },
  {
    name: "Days",
    selector: (row) => row.days,
    width: "100px",
  },
  {
    name: "Status",
    selector: (row) => row.status,
    width: "140px",
  },
  {
    name: "Action",
    selector: (row) => row.action,
    width: "160px",
  },
];

export const LeaveButtons = ({ id }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/admin-dashboard/view-leave/${id}`); // Corrected route path
  };

  return (
    <button
      className="px-4 py-1 bg-teal-500 rounded text-white hover:bg-teal-600"
      onClick={handleView}
    >
      View
    </button>
  );
};