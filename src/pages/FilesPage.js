import React from 'react'


const FilesPage = () => {
    const nums = [1,2,3,4,5]
  return (
    <div className='FilesPage'>
        <div className="side-bar">
            <h1>
                Scholard
            </h1>
            <button className="new-proj-btn">
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
        <div className="main-screen">
            <div className="wrapper">
                <h2>Files</h2>
                <input type="text" placeholder='Search in Your files' className='search-inp' />
                <section className='blank'>
                    <span className='title'>blank project</span>
                    <div className="projs">
                        <div className="proj">
                            <div className="inner-pic">
                                <span>+</span>
                            </div>
                            <div className="text-content">
                                Open blank file
                            </div>
                        </div>
                    </div>
                </section>
                <section className='suggested'>
                    <span className='title'>suggested</span>
                    <div className="projs">
                        {nums.map(num => (
                            <div className="proj">
                                <div className="inner-pic">
                                    <span>+</span>
                                </div>
                                <div className="text-content">
                                    Impact of Gaslift on the Economy
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='folders'>
                    <span className='title'>Folders</span>
                    <div className="projs">
                        <img className='folder-icon' src={require("../images/folder.png")} alt="" />
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default FilesPage