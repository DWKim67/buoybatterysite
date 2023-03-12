import TimelineJson from "../JSONS/TimelineParagraph.json"

function IdeaPage() {
    let Logo = require('../Images/timeline.jfif');
    return(
        <div id="mainMenu">
            {
                TimelineJson.map ( info => {
                    return(
                        <div>
                            <img src={Logo} alt="TimeLine" />
                            <p>{info.paragraph}</p>
                            </div>
                    )
                })
            }
        </div>
    )
}
export default IdeaPage
