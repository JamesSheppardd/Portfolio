import { useState } from "react";
import DesktopButton from "./DesktopButton";
import Window from "../Windows/Window";
// text files
import determineTextDocument from "./determine-text-document";

// Assets
import * as images from "../Common/assets/images/images.jsx";

// Apps
const Desktop = (props) => {
    const [projectFolder, setProjectFolder] = useState(false);
    const [languagesFolder, setLanguagesFolder] = useState(false);
    const [socialsFolder, setSocialsFolder] = useState(false);
    const [folderOpen, setFolderOpen] = useState(false);
    const [textContent, setTextContent] = useState(undefined);
    const [changeContent, setChangeContent] = useState(undefined);
    const [textOpen, setTextOpen] = useState(false);
    const [changeOpen, setChangeOpen] = useState(false);
    const [filename, setFilename] = useState(undefined);
    const [app, setApp] = useState(undefined);
    const [appOpen, setAppOpen] = useState(false);

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
        console.log(folderOpen)
    }

    const triggerOpenTextDocument = (newContent) => {
        setTextContent(() => determineTextDocument(newContent));
        setTextOpen(prevState => !prevState);
        
    }

    const triggerChangelogDocument = (newContent) => {
        setChangeContent(() => determineTextDocument(newContent));
        setChangeOpen(prevState => !prevState);
        props.openChangelog()
        
    }

    const triggerOpenApp = (newApp) => {
        setApp(() => newApp);
        setAppOpen(prevState => !prevState);
        
    }

    const triggerSetFilename = (name) => {
        setFilename(() => name);
        
    }

    const activeWindowCSS = (window) => {
        console.log("change on ")
    }

    return (
        <div className="desktop" style={{activeWindowCSS}}>
            <div className="desktop-buttons">
                {/* About Me button */}
                <DesktopButton className="desktop__about-me" text="About Me" icon={images.aboutMeIcon} iconClass="desktop__about-me__icon" textClass="desktop__about-me__text" formClass="desktop__about-me" openWindow={triggerOpenTextDocument} setFilename={triggerSetFilename}/>
                {/* Projects button */}
                <DesktopButton className="desktop__projects" text="Projects" icon={images.folderIcon} iconClass="desktop__projects__icon" textClass="desktop__projects__text" formClass="desktop__projects" openWindow={triggerOpenProjectsFolderState}/>
                {/* Languages button */}
                <DesktopButton className="desktop__languages" text="Languages" icon={images.folderIcon} iconClass="desktop__languages__icon" textClass="desktop__languages__text" formClass="desktop__languages" openWindow={triggerOpenLanguagesFolderState}/>
                {/* CV button */}
                {/*<DesktopButton className="desktop__cv" text="CV" icon={images.textFileIcon} iconClass="desktop__cv__icon" textClass="desktop__cv__text" formClass="desktop__cv" openWindow={triggerOpenTextDocument} setFilename={triggerSetFilename}/>*/}
                {/* Solar System */}
                <DesktopButton className="desktop__solar-system" text="Solar System" icon={images.earthIcon} iconClass="desktop__ss__icon" textClass="desktop__ss__text" formClass="desktop__ss" openWindow={triggerOpenApp} setFilename={triggerSetFilename}/>
                {/* GitHub button */}
                <DesktopButton className="desktop__github" text="GitHub" icon={images.gitHubLogo} iconClass="desktop__github__icon" textClass="desktop__github__text" formClass="desktop__github" link="https://github.com/JamesSheppardd" />
                {/* Contact Me button */}
                <DesktopButton className="desktop__contact" text="Contact Me" icon={images.mailIcon} iconClass="desktop__contact__icon" textClass="desktop__contact__text" formClass="desktop__contact" link="mailto:James@jamessheppard.net"/>
                {/* Changelog button */}
                <DesktopButton className="desktop__changelog" text="Changelog" icon={images.textFileIcon} iconClass="desktop__changelog__icon" textClass="desktop__changelog__text" formClass="desktop__changelog" openWindow={triggerChangelogDocument} setFilename={triggerSetFilename}/>
            
            </div>

            {/* Opening Projects folder */}
            { projectFolder && <Window 
                className="file-explorer__projects"
                leftPos="5" 
                topPos="5" 
                currentFolderName="Projects"
                triggerWindow={triggerOpenProjectsFolderState}
                openFolder={triggerOpenFolderState}
                isFileExplorer={true}
                isApp={false}
                openText={triggerOpenTextDocument}
                setFilename={triggerSetFilename}
                objects={[
                    {"name": "C#", "size": 0, "type": "File Folder", "modified": "16 February 2021"}, 
                    {"name": "Gamemaker Language (GML)", "size": 0, "type": "File Folder", "modified": "16 February 2021"},
                    {"name": "JavaScript & TypeScript", "size": 0, "type": "File Folder", "modified": "16 February 2021"},
                    {"name": "Python", "size": 0, "type": "File Folder", "modified": "16 February 2021"},
                    {"name": "6502 Assembly", "size": 0, "type": "File Folder", "modified": "30 July 2021"}
                ]}
            /> }

            {/* Opening Languages folder */}
            { languagesFolder && <Window 
                className="file-explorer"
                leftPos="8" 
                topPos="3" 
                currentFolderName="Languages"
                triggerWindow={triggerOpenLanguagesFolderState}
                openFolder={triggerOpenFolderState}
                isFileExplorer={true}
                isApp={false}
                openText={triggerOpenTextDocument}
                setFilename={triggerSetFilename}
                objects={[
                    {"name": "Python", "size": 2000, "type": "Text Document", "modified": "22 February 2021"}, 
                    {"name": "HTML/CSS/JS", "size": 700000, "type": "Text Document", "modified": "22 February 2021"},
                    {"name": "C#", "size": 90000, "type": "Text Document", "modified": "22 February 2021"},
                    {"name": "GML", "size": 80000, "type": "Text Document", "modified": "22 February 2021"},
                    {"name": "6502 Assembly", "size": 40000, "type": "Text Document", "modified": "30 July 2021"}
                ]}
            /> }

            {/* Opening App */}
            { appOpen && <Window 
                className="app-ss-window"
                leftPos="5" 
                topPos="9" 
                currentFolderName="Solar System"
                triggerWindow={triggerOpenApp}
                isFileExplorer={false}
                isApp={true}
                setFilename={triggerSetFilename}
            /> }

            {/* Opening Socials folder */}
            { socialsFolder && <Window 
                className="file-explorer"
                leftPos="10" 
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
                leftPos="20" 
                topPos="10" 
                currentFolderName={filename}
                triggerWindow={triggerOpenTextDocument}
                isFileExplorer={false}
                isApp={false}
                app={app}
                content={textContent}
            /> }

            { (changeOpen || props.changelog.changelog) && <Window 
                className="changelog-document"
                leftPos="27" 
                topPos="16" 
                currentFolderName={filename}
                triggerWindow={triggerChangelogDocument}
                isFileExplorer={false}
                isApp={false}
                app={app}
                content={changeContent}
            /> }

            
        </div>
    )
}

export default Desktop;