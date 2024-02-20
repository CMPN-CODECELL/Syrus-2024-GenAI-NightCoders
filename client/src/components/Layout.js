import {React, useState} from 'react'
import "../styles/LayoutStyles.css"
import { UserMenu, adminMenu } from '../Data/data'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Avatar, Badge, message } from 'antd'
import Logo from '../images/logo.jpg'; // Import your logo image here
import mobileMenu from '../images/mobile-menu-icon.png'; // Import your mobile menu icon here

const Layout = ({children}) => {
  const location = useLocation()
  const {user}=useSelector(state=>state.user)
  const navigate=useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

  //logout function
  const handleLogout=()=>{
    localStorage.clear()
    message.success('Logout Successfully')
    navigate("/login")
  }

  // ============== doctor menu ========================
const doctorMenu =[
    {
        name:'Home',
        path:'/',
        icon:'fa-sharp fa-solid fa-house',
    },
    {
        name:'View Doctors',
        path:'/viewDoctors',
        icon:'fa-sharp fa-solid fa-house',
    },
    {
        name: 'Appointments',
        path:'/doctor-appointments',
        icon:"fa-solid fa-list",
    },
    {
        name:'Profile',
        path:`/doctor/profile/${user?.id}`,
        icon:'fa-solid fa-user'
    },
    
]

  // ============== doctor menu ========================

  //rendering menu list
  const  SidebarMenu = user?.isAdmin 
                        ? adminMenu 
                        : user?.isDoctor
                        ? doctorMenu
                        : UserMenu;
  return (
    <>
        <nav className="bg-[#ff8fa3] fixed top-0 w-full z-50">
            <div className="flex justify-between p-2">
                {/* Website Logo */}
                <div className="flex items-center">
                        <img src={Logo} className="rounded-full w-14 h-14 mx-2 border-2" alt="Logo" />
                        <h1 className="text-black mx-1 my-1 text-2xl">Tvacha</h1>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex flex-row items-center mr-12">
                    <ul className="flex flex-row space-x-9 text-blue">
                        {SidebarMenu.map(menu => {
                            const isActive = location.pathname === menu.path;
                            return (
                                <li className={`p-2 rounded hover:bg-[#F9D0BE] hover:text-black ${isActive && "bg-[#F9D0BE] text-black"}`}>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </li>
                            );
                        })}
                        <li className="p-2 rounded hover:bg-[#F9D0BE] hover:text-black" onClick={handleLogout}>
                            <Link to="/login">Logout</Link>
                        </li>
                    </ul>
                </div>
                
                 {/* User Notification */}
                 <div className="bg-white p-2 md:p-3 rounded-lg shadow-md flex flex-row items-center justify-between cursor-pointer">
                    {/* Badge with Bell Icon */}
                    <Badge count={user && user.notification.length} onClick={() => navigate('/notification')}>
                        <i className="fas fa-bell"></i>
                    </Badge>
                     {/* Vertical Line */}
                    <div className="h-6 bg-black mx-3  md:w-0.5 "></div>
                    {/* User Name Link */}
                    <Link to="/" className="text-blue-500 ml-2">{user?.name}</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                            
                   
                    <button className="p-2 bg-[#F9D0BE] rounded mobile-menu-button" onClick={toggleMobileMenu}>
                        <img src={mobileMenu} className="w-4 h-4" alt="Mobile Menu" />
                    </button>
                </div>
            </div>

            {/* Mobile NavBar */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#F9D0BE]">
                    <ul className="text-center py-1">
                        {SidebarMenu.map(menu => {
                            const isActive = location.pathname === menu.path;
                            return (
                                <li className={`p-2 ml-12 mr-12 bg-[#f56556] m-1 rounded ${isActive && "bg-[#F9D0BE] text-black"}`}>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </li>
                            );
                        })}
                        <li className="p-2 ml-12 mr-12 bg-[#f56556] m-1 rounded" onClick={handleLogout}>
                            <Link to="/login">Logout</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
        <div className='body'>{children}</div>
    </>
  )
}

export default Layout