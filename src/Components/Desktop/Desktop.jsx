import { useState } from "react";
import DesktopButton from "./DesktopButton";
import Window from "../Windows/Window";
// text files
import determineTextDocument from "./determine-text-document";

// Assets
import * as images from "../Common/assets/images/images.jsx";

const Desktop = (props) => {
    const [projectFolder, setProjectFolder] = useState(false);
    const [languagesFolder, setLanguagesFolder] = useState(false);
    const [socialsFolder, setSocialsFolder] = useState(false);
    const [folderOpen, setFolderOpen] = useState(false);
    const [textContent, setTextContent] = useState(undefined);
    const [textOpen, setTextOpen] = useState(false);
    const [filename, setFilename] = useState(undefined);
    
    

    const triggerOpenProjectsFolderState = (setTo) => {
        setProjectFolder(prevFileExplorer => setTo === undefined ? setTo : !prevFileExplorer);
    }

    const triggerOpenLanguagesFolderState = (setTo) => {
        setLanguagesFolder(prevFileExplorer => setTo === undefined ? setTo : !prevFileExplorer);
    }
    const triggerOpenSocialsFolderState = (setTo) => {
        setSocialsFolder(prevFileExplorer => setTo === undefined ? setTo : !prevFileExplorer);
    }

    const triggerOpenFolderState = (newFolder) => {
        setFolderOpen(prevFolder => !prevFolder);
        console.log(folderOpen);
    }

    const triggerOpenTextDocument = (newContent) => {
        setTextContent(() => determineTextDocument(newContent));
        setTextOpen(prevState => !prevState);
        
    }

    const triggerSetFilename = (name) => {
        setFilename(() => name);
        
    }

    const activeWindowCSS = (window) => {
        console.log("change on ")
    }

    return (
        <div className="desktop" style={{activeWindowCSS}}>
            {/* About Me button */}
            <DesktopButton className="desktop__about-me" text="About Me" icon={images.aboutMeIcon} iconClass="desktop__about-me__icon" textClass="desktop__about-me__text" formClass="desktop__about-me" openWindow={triggerOpenTextDocument} setFilename={triggerSetFilename}/>
            {/* Projects button */}
            <DesktopButton className="desktop__projects" text="Projects" icon={images.folderIcon} iconClass="desktop__projects__icon" textClass="desktop__projects__text" formClass="desktop__projects" openWindow={triggerOpenProjectsFolderState}/>
            {/* Languages button */}
            <DesktopButton className="desktop__languages" text="Languages" icon={images.folderIcon} iconClass="desktop__languages__icon" textClass="desktop__languages__text" formClass="desktop__languages" openWindow={triggerOpenLanguagesFolderState}/>
            {/* CV button */}
            <DesktopButton className="desktop__cv" text="CV" icon={images.textFileIcon} iconClass="desktop__cv__icon" textClass="desktop__cv__text" formClass="desktop__cv" openWindow={triggerOpenTextDocument} setFilename={triggerSetFilename}/>
            {/* GitHub button */}
            <DesktopButton className="desktop__github" text="GitHub" icon={images.gitHubLogo} iconClass="desktop__github__icon" textClass="desktop__github__text" formClass="desktop__github" link="https://github.com/JamesSheppardd" />
            {/* Contact Me button */}
            <DesktopButton className="desktop__contact" text="Contact Me" icon={images.mailIcon} iconClass="desktop__contact__icon" textClass="desktop__contact__text" formClass="desktop__contact" link="mailto:James@jamessheppard.net"/>
            

            {/* Opening Projects folder */}
            { projectFolder && <Window 
                className="file-explorer__projects"
                leftPos="20" 
                topPos="1" 
                currentFolderName="Projects"
                triggerWindow={triggerOpenProjectsFolderState}
                openFolder={triggerOpenFolderState}
                isFileExplorer={true}
                openText={triggerOpenTextDocument}
                setFilename={triggerSetFilename}
                objects={[
                    {"name": "C#", "size": 0, "type": "File Folder", "modified": "16 February 2021"}, 
                    {"name": "Gamemaker Language (GML)", "size": 0, "type": "File Folder", "modified": "16 February 2021"},
                    {"name": "HTML/CSS/JS & React", "size": 0, "type": "File Folder", "modified": "16 February 2021"},
                    {"name": "Python", "size": 0, "type": "File Folder", "modified": "16 February 2021"}
                ]}
            /> }

            {/* Opening Languages folder */}
            { languagesFolder && <Window 
                className="file-explorer"
                leftPos="20" 
                topPos="1" 
                currentFolderName="Languages"
                triggerWindow={triggerOpenLanguagesFolderState}
                openFolder={triggerOpenFolderState}
                isFileExplorer={true}
                openText={triggerOpenTextDocument}
                setFilename={triggerSetFilename}
                objects={[
                    {"name": "Python", "size": 2000, "type": "Text Document", "modified": "22 February 2021"}, 
                    {"name": "HTML/CSS/JS", "size": 700000, "type": "Text Document", "modified": "22 February 2021"},
                    {"name": "C#", "size": 90000, "type": "Text Document", "modified": "22 February 2021"},
                    {"name": "GML", "size": 80000, "type": "Text Document", "modified": "22 February 2021"}
                ]}
            /> }

            {/* Opening Socials folder */}
            { socialsFolder && <Window 
                className="file-explorer"
                leftPos="20" 
                topPos="1" 
                currentFolderName="Socials"
                triggerWindow={triggerOpenSocialsFolderState}
                openFolder={triggerOpenFolderState}
                isFileExplorer={true}
                openText={triggerOpenTextDocument}
                setFilename={triggerSetFilename}
                objects={[
                    {"name": "TEST", "size": 2000, "type": "Text Document", "modified": "ayer"}, 
                    {"name": "test 2", "size": 700000, "type": "File Folder", "modified": "nachste woche"},
                    {"name": "Homework", "size": 0, "type": "File Folder", "modified": "0:06 AM"}
                ]}
            /> }

            { textOpen && <Window 
                className="text-document"
                leftPos="30" 
                topPos="3" 
                currentFolderName={filename}
                triggerWindow={triggerOpenTextDocument}
                isFileExplorer={false}
                content={textContent}
            /> }
        </div>
    )
}

export default Desktop;