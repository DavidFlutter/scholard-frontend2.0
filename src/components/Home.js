import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Home = ({filesNames}) => {
    const {setProjectName,setIsWorkingOnProject}  = useContext(GlobalContext);
  return (
    <div className='Home'>
        <h2>Files</h2>
            <input type="text" placeholder='Search in Your files' className='search-inp' />
            <section className='blank'>
                <span className='title'>blank project</span>
                <div className="projs">
                    <div className="proj" 
                        onClick={() => {
                            setProjectName("New Project")
                            setIsWorkingOnProject(true)
                        }}
                    >
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
                    {filesNames ? filesNames.map((filesName, index) => (
                        <div className="proj" key={index}>
                            <div className="inner-pic">
                                <span>+</span>
                            </div>
                            <div className="text-content">
                                {filesName}
                            </div>
                        </div> 
                    )) : <>
                        <div className="proj">
                            <div className="inner-pic">
                                <span>+</span>
                            </div>
                            <div className="text-content">
                                ""
                            </div>
                        </div> 
                    </>}
                </div>
            </section>
            <section className='folders'>
                <span className='title'>Folders</span>
                <div className="projs">
                    <img className='folder-icon' src={require("../images/folder.png")} alt="" />
                </div>
            </section>
    </div>
  )
}

export default Home



