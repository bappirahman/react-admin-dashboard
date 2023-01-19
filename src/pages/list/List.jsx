import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";

const List = ({ dark, setDark }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar dark={dark} setDark={setDark} />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
