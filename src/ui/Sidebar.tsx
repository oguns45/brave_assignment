
import React from 'react';
import { FaHome } from "react-icons/fa";
import { PiNote } from "react-icons/pi";
import { FcSupport } from "react-icons/fc";
import { BiSolidLogOutCircle } from "react-icons/bi";


interface SidebarProps {
  activeView: 'home' | 'notes' | 'details'| 'Settings' | 'support';
  onSelect: (view: 'home' | 'notes'| 'Settings' | 'support'| 'details') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onSelect }) => {
  return (
    <div className="sider">
      <div className="profile">
        <div className="avatar">U</div>
        <div className="user-info">
          <h3>User Name</h3>
          <p>user@example.com</p>
        </div>
      </div>
      <nav className="menu">
        <div className= "avatar-buton">
          <FaHome />
          <button className={`menu-item ${activeView === 'home' ? 'active' : ''}`} onClick={() => onSelect('home')}>Home</button>
        </div>
        <div className= "avatar-buton">
          <PiNote />
          <button className={`menu-item ${activeView === 'notes' ? 'active' : ''}`} onClick={() => onSelect('notes')}>Notes</button>
        </div>
        <div className= "avatar-buton">
          <FcSupport />
          <button className={`menu-item ${activeView === 'support' ? 'active' : ''}`} onClick={() => onSelect('support')}>Support</button>
        </div>
        <div className= "avatar-buton" >
          <BiSolidLogOutCircle />
          <a className='logout' href="./">Log out</a>
        </div>
        
        
        
        
        {/* //<button className={`menu-item ${activeView === 'notes' ? 'active' : ''}`} onClick={() => onSelect('setting')}>Settings</button> */}
        
      </nav>
    </div>
  );
};

export default Sidebar;
