import "./topbar.css";
import AuthNav from "./auth-nav";

export default function Topbar() {
  return (
    <div className="topbarContainer">
<div className="topbarLeft">

       </div>

      <div className="topbarCenter">
      <div className="searchbar">
          <input
            placeholder="Search"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
          <AuthNav />
        <div className="topbarIcons">
          <div className="topbarIconItem">
           
          </div>
          <div className="topbarIconItem">
          
          </div>
          <div className="topbarIconItem">
           
          </div>
        </div>
       
      </div>
    </div>
  );
}
