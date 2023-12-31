import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const SideBar = () => {
    const {setIsCModalOpen} = useContext(GlobalContext)
  return (
    <div className="side-bar">
        <h1>
            Scholard
        </h1>
        <button className="new-proj-btn"
            onClick={() => setIsCModalOpen(true)}
        >
            New project
        </button>
        <button className='sidebar-btn'>
            Project Name
        </button>
        <button className='sidebar-btn'>
            Files
        </button>
        <button className='sidebar-btn'>
            Settings
        </button>
        <div className="spacer"></div>
        <div className="user-details">
            <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D" alt="user" />
            <div className="text-content">
                <span>Email</span>
                <span>Account setting</span>
            </div>
        </div>
    </div>
  )
}

export default SideBar