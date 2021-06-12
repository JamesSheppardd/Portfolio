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
        case "Portfolio":
            return <text.PortfolioText className={`text-document__${filename}`} filename={filename} />;
        case "C#":
            return <text.CSText className={`text-document__${filename}`} filename={filename} />;
        case "GML":
            return <text.GMLText className={`text-document__${filename}`} filename={filename} />;
        case "Calculator":
            return <text.CalculatorText className={`text-document__${filename}`} filename={filename} />;
        case "Solar System Simulation":
            return <text.SolarSystemText className={`text-document__${filename}`} filename={filename} />;
        case "Project B":
            return <text.ProjectB className={`text-document__${filename}`} filename={filename} />;
         case "The Only Way Is Up":
            return <text.OnlyWayIsUp className={`text-document__${filename}`} filename={filename} />;
         
        default:
            break;
    }
}

export default determineTextDocument;