import { newObject } from "./Window";
const openFolder = (object={}, setObjects, setCurrentFolderName) => {
    // If is a folder
    if(object.type === "File Folder") {
      switch(object.name.toLowerCase()){
        case "c#":
          setObjects(() => [newObject("Current Weather App", 300000000, "Text Document", "22 August 2020")]);
          setCurrentFolderName(() => object.name);
          break;
        case "html/css/js & react":
          setObjects(() => [newObject("Portfolio", 500000, "Text Document", "22 August 2021")]);
          setCurrentFolderName(() => object.name);
          break;
        default:
          break;
      }
    }
  }

export default openFolder