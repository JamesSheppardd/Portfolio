// import all the text
import * as text from "../Common/assets/text-files/text-files";

const determineTextDocument = (filename) => {
    switch(filename){
        case "About Me":
            return <text.AboutMeText className={`text-document__${filename}`} filename={filename} />;
        case "Current Weather App":
            return <text.CurrentWeatherApp className={`text-document__${filename}`} filename={filename} />;
        case "Python":
            return <text.PythonText className={`text-document__${filename}`} filename={filename} />;
        case "HTML/CSS/JS":
            return <text.WebDevText className={`text-document__${filename}`} filename={filename} />;
        default:
            break;
    }
}

export default determineTextDocument;