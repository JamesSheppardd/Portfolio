import { newObject } from "./Window";
const openFolder = (object={}, setObjects, setCurrentFolderName) => {
    // If is a folder
    if(object.type === "File Folder") {
      switch(object.name.toLowerCase()){
        case "c#":
          setObjects(() => [
            newObject("Current Weather App", 300000000, "Text Document", "22 August 2020")
          ]);
          setCurrentFolderName(() => object.name);
          break;

        case "javascript & typescript":
          setObjects(() => [
            newObject("Portfolio", 5300000, "Text Document", "18 February 2021"), 
            newObject("Calculator", 12000000, "Text Document", "20 March 2021"),
            newObject("Solar System Simulation", 82200000, "Text Document", "3 May 2021")
          ]);
          setCurrentFolderName(() => object.name);
          break;
        case "gamemaker language (gml)":
          setObjects(() => [
            newObject("Project B", 7823000, "Text Document", "11 January 2018"),
            newObject("The Only Way Is Up", 331000000, "Text Document", "1 May 2020")
          ]);
          setCurrentFolderName(() => object.name);
          break;
        
        default:
          break;
      }
    }
  }

export default openFolder