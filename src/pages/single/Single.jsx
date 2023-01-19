import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductTable from "../../components/table/ProductTable";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/295289983_1114142129460444_1284094838920178514_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFt44pRafMIaJ9CDy3IYKrSPffDX3prJY0998NfemsljXLSXdyTerb1NGoUlpElJ7Z3BECSyJlLtzigiIk4jw9_&_nc_ohc=G85awpirsJwAX-8LrCc&_nc_ht=scontent.fdac15-1.fna&oh=00_AfBF6OsfUMfsE0Jv5zOWWbMCo4GFUArD9w8uLFp-tNRPVA&oe=63CC9717"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Bappi Rahman</h1>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1222225</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Dhaka, Bangladesh</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transaction</div>
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
