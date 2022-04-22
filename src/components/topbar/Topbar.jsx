import "./topbar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          {menuOpen ? <a href="#intro" className="logo1">
            inspired.
          </a> : <a href="#intro" className="logo2">
            creative.
          </a> }
          <div className="itemContainer">
            <PersonOutlineIcon className="icon" />
            <span>424-558-9310</span>
          </div>
          <div className="itemContainer">
            <MailOutlineIcon className="icon" />
            <span>mmboardley@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
