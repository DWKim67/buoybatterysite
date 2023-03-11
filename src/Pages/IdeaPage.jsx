import ReasonforSolnJson from "../JSONS/ReasonforSoln.json"

function IdeaPage() {
    let Logo = require('../Images/ImplementatationTime.png');
    return(
        <div id="mainMenu">
            <div id="solution">
                <h1>Why our Solution is Better</h1>
                {
                    ReasonforSolnJson.map ( info => {
                        return(
                            <div id="reasons">
                                <h3>{info.header}</h3>
                                <p>{info.paragraph}</p>
                            </div>
                        )
                    })
                }
                <img src={Logo} alt="TimeLine" />
            </div>
        </div>
        
    )
}
export default IdeaPage
