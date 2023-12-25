import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import CreateProjectModal from '../components/CreateProjectModal';
import GlobalContext from '../context/GlobalContext';
import ChatTile from '../components/ChatTile';
import Home from '../components/Home';
import TextEditor from '../components/TextEditor';

const FilesPage = () => {
    const [filesNames, setFilesNames] = useState(null);
    const [isCModalOpen, setIsCModalOpen] = useState(false);
    const [isWorkingOnProject, setIsWorkingOnProject] = useState(false);
    const [projectName, setProjectName] = useState("");

    const getFiles = async () => {
        // Get projects from api
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const titles = data.map(item => item.company.catchPhrase)
        
        console.log(titles);
        setFilesNames(titles);
    }

    useEffect(() => {
        getFiles();
    }, [])
  return (
    <GlobalContext.Provider value={{isCModalOpen, setIsCModalOpen, isWorkingOnProject, setIsWorkingOnProject, projectName, setProjectName}}>
        <div className='FilesPage'>
            {isCModalOpen && <CreateProjectModal></CreateProjectModal>}
            <SideBar></SideBar>
            <div className="main-screen">
                <div className="wrapper">
                    {isWorkingOnProject ? 
                        <TextEditor></TextEditor>
                    :
                        <Home filesNames={filesNames}></Home>
                    }
                </div>
                <ChatTile></ChatTile>
            </div>
        </div>
    </GlobalContext.Provider>
  )
}

export default FilesPage