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
        case "Changelog":
            return <div className={`text-document__${filename}`} filename={filename} >
                <h1 style={{textAlign: "center"}}>Changelog:</h1>
                <p style={{overflowX: "hidden", color: "grey"}}>---------------------------------------------------------------------------------------------------------</p>
                {changelogText(text.changelogTxt)}
                
            </div>;
        
        default:
            break;
    }
}

const changelogText = (arr) => {
    // Get changelog from localStorage
    arr = localStorage.getItem("changelog");
    arr = JSON.parse(arr);
    let text = []
    arr.forEach((o, ind) => {
        text[ind] = `${o.date}  -  ${o.text}\n`;
    });
    return <ul style={{fontSize: '20px'}}>
        <li>{text[0]}</li>
        <li>{text[1]}</li>
        <li>{text[2]}</li>
        <li>{text[3]}</li>
        <li>{text[4]}</li>
        <li>{text[5]}</li>
        <li>{text[6]}</li>
        <li>{text[7]}</li>
        <li>{text[8]}</li>
        <li>{text[9]}</li>
        <li>{text[10]}</li>
        <li>{text[11]}</li>
        <li>{text[12]}</li>
    </ul>

    // const text = `• ${el.date}  -  ${el.text}`;
    // console.log(text)
    // return text
} 

export default determineTextDocument;