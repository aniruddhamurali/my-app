const experienceModalContents = {
    "Goldman Sachs Jun 2022 - Aug 2022": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Risk Division
                    </li>
                </ul>
                <hr></hr>
            </div>
        </div>
    ),
    "Georgia Tech Feb 2021 - Present": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Building machine learning models to predict if a conversation on Reddit is civil 
                        or incivil (Python, Scikit-learn, TFIDF, BERT).
                    </li>
                    <li>
                        Investigating how different linguistic features (aspersion, provocation, vulgarity, 
                        stereotypes, etc.) correlate with civility and affect conversations.
                    </li>
                    <li>
                        Leading and facilitating team meetings, delegating research tasks, writing research 
                        paper to submit to conferences (CSCW, ICWSM). 
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python
                    <br></br>
                    Frameworks: BERT, Scikit-learn, Pandas, NumPy, Matplotlib
                </p>
            </div>
        </div>
    ),
    "Capital One Jun 2021 - Aug 2021": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Developed Neo, a web-based machine learning banking chatbot assistant that can 
                        perform intents such as validating accounts and retrieving transactions. Built 
                        natural language processing (NLP) models with Rasa to recognize intents and entities
                         in user messages and determine what the chatbot should do next (dialogue management). 
                    </li>
                    <li>
                        Wrote Rasa actions that retrieve account data from data orchestrator via GraphQL 
                        and formulate responses when the user message indicates a banking-related intent. 
                        Created chatbot UI with React.js, react-chatbot-kit, and Bootstrap and displayed 
                        customer profiles from AWS DynamoDB database. Deployed application on Jenkins CICD 
                        pipeline with Docker container. 
                    </li>
                    <li>
                        Presented and demoed chatbot to senior leaders. Leveraged Agile workflow.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python, JavaScript, HTML, CSS
                    <br></br>
                    Frameworks: Rasa, React.js, React-chatbot-kit, Bootstrap, GraphQL, jQuery
                    <br></br>
                    Other: Docker, AWS (S3 Bucket & DynamoDB)
                </p>
            </div>
        </div>
    ),
    "Bits of Good Aug 2020 - Dec 2020": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Developed home page of General Solution, a platform that connects volunteers and 
                        donors to nonprofits that work with Bits of Good.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: JavaScript
                    <br></br>
                    Frameworks: React.js, Material UI
                </p>
            </div>
        </div>
    ),
    "Georgia Tech Jun 2020 - Apr 2021": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Developed website that aggregates, displays and evaluates COVID-19 forecasts from 
                        official forecasters and users, using React.js and Bootstrap, data visualization 
                        (including drawable chart) with D3.js.
                    </li>
                    <li>
                        Wrote RESTful COVID-19 Aggregator API, automated data collection, data processing, 
                        and storage of COVID-19 forecast data with Python, Pandas, Flask, MongoDB and Github API. Researched loss functions, created scheme for evaluating forecast models.
                    </li>
                    <li>
                        Managed and delegated tasks to team of volunteers from the Coronavirus Visualization 
                        Team (CVT).
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python, JavaScript, HTML, CSS
                    <br></br>
                    Frameworks: Flask, React.js, Pandas, NumPy, Bootstrap, D3.js, Github API, jQuery
                    <br></br>
                    Other: MongoDB, Heroku
                </p>
            </div>
        </div>
    ),
    "Zenabi Data Aug 2018 - Aug 2019": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Analyzed Miami Dolphins game data using Python. Came up with offensive strategies. 
                        Presented to Miami Dolphins coaching staff in Miami, Florida.
                    </li>
                    <li>
                        Built machine learning model and web dashboard to predict attendance of an International
                        Champions Cup (ICC) match. Model predicted about 5700 seats closer to actual attendance
                        than the ICC’s expectations - this could help increase revenue. Data analyzed in Excel and R.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python, R, JavaScript, HTML, CSS
                    <br></br>
                    Frameworks: Scikit-learn, Pandas, jQuery
                </p>
            </div>
        </div>
    ),
    "Yale University School of Medicine May 2019 - Jun 2019": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Research group studied the role of mitochondria and energy efficiency in 
                        neurodegenerative disease states, in learning, and in memory formation in healthy 
                        brains. We also studied how inhibiting opening of the leak channel in the mitochondria
                        may ameliorate stroke, neurodegenerative and developmental brain diseases. I analyzed
                        images of activity between neurons to collect data for this research project.
                    </li>
                </ul>
                <hr></hr>
            </div>
        </div>
    ),
};

export default experienceModalContents;