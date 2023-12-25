import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const CreateProjectModal = () => {
    const {setIsCModalOpen, setProjectName, projectName, setIsWorkingOnProject} = useContext(GlobalContext);

    const handleSaveProject = () => {
        // post project details to api

        setIsCModalOpen(false);
        setIsWorkingOnProject(true);
    }
  return (
    <div className='CreateProjectModal'>
        <div className="backdrop">
            <div className="tile">
                <section className="names">
                    <div className="inp">
                        <label>Project name</label>
                        <input type="text" 
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                    </div>
                    <div className="inp">
                        <label>Document name</label>
                        <input type="text" />
                    </div>
                </section>
                <section className="members">
                    <div className="inp">
                        <label>Members</label>
                        <input type="text" />
                    </div>
                   <div className="button">
                        <div className="spacer"></div>
                         <button className="add-member-btn">
                            Add member
                        </button>
                    </div>
                </section>
                <section className="invite">
                    <div className="inp">
                        <label>Invite link</label>
                        <input type="text" />
                    </div>
                    <button className="invite-btn">
                        Invite
                    </button>
                </section>
                <section className="buttons">
                    <button className="cancel-btn" 
                        onClick={() => setIsCModalOpen(false)}
                    >
                        Cancel
                    </button>
                    <button className="save-btn"
                        onClick={() => handleSaveProject()}
                    >
                        Save
                    </button>
                </section>
            </div>
        </div>
    </div>
  )
}

export default CreateProjectModal