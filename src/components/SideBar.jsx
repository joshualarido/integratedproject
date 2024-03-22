import { GoHome } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineExperiment } from "react-icons/ai";
import { MdMusicVideo } from "react-icons/md";
import { PiCross } from "react-icons/pi";
import { LiaPaintBrushSolid } from "react-icons/lia";
import { PiTranslate } from "react-icons/pi";
import { MdOutlineCreditCard } from "react-icons/md";

import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="navbar fixed top-0 left-0 h-full w-64 flex flex-col bg-gray-700 p-4 py-6
                        shadow-2xl float-left z-10 justify-between">
            <div className="nav-top">
                <h1 className="nav-title text-white font-bold font-redhat text-xl
                               px-3">Integrated Project</h1>
                <h2 className="nav-subtitle text-gray-400 font-redhat text-sm
                               pt-2 pb-1 px-3">12 St. Caecilia, Group 3</h2>
                <div className="nav-links">
                    <div className="general-links">
                        <a href="/integratedproject/" className="nav-item"><SideBarIcon icon={<GoHome />}/> Home</a>
                    </div>
                    <div className="project-links">
                        <h2 className="nav-subtitle text-gray-400 font-redhat text-sm
                               pt-2 pb-1 px-3">Projects</h2>
                        <a href="/integratedproject/game" className="nav-item"><SideBarIcon icon={<IoGameControllerOutline />}/> Construct 2 Game</a>
                        <a href="/integratedproject/tempe" className="nav-item"><SideBarIcon icon={<AiOutlineExperiment />}/> Tempeh Production</a>
                        <a href="/integratedproject/dance" className="nav-item"><SideBarIcon icon={<MdMusicVideo />}/> Dance Music Video</a>
                        <a href="/integratedproject/religion" className="nav-item"><SideBarIcon icon={<PiCross />}/> Religious Ceremony</a>
                        <a href="/integratedproject/art" className="nav-item"><SideBarIcon icon={<LiaPaintBrushSolid />}/> Art Mosaic</a>
                        <a href="/integratedproject/cny" className="nav-item"><SideBarIcon icon={<PiTranslate />}/> CNY Report</a>
                    </div>
                </div>
            </div>
            <div className="nav-bottom">
                <div className="credit-links">
                    <h3 className="credit-subtitle text-gray-500 font-redhat text-sm
                               px-3 pt-1">Joshua Larido © 2024</h3>
                </div>
            </div>
        </div>
    );
};

const SideBarIcon = ({icon}) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default SideBar;