import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = ({ dark, setDark }) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          {dark ? (
            <div className="item">
              <DarkModeOutlinedIcon
                className="icon"
                onClick={() => setDark(false)}
              />
            </div>
          ) : (
            <div className="item">
              <LightModeIcon className="icon" onClick={() => setDark(true)} />
            </div>
          )}
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/295289983_1114142129460444_1284094838920178514_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFt44pRafMIaJ9CDy3IYKrSPffDX3prJY0998NfemsljXLSXdyTerb1NGoUlpElJ7Z3BECSyJlLtzigiIk4jw9_&_nc_ohc=ZU-eDgpcuT0AX-AENp0&_nc_ht=scontent.fdac15-1.fna&oh=00_AfCea5Uw07tdNBhv5iAygGTQimgZmZCesxbOIoeak0LyNQ&oe=63C6A857"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
