const experiences = [
    {
        "name": "Georgia Institute of Technology",
        "role": "Research Assistant, Dr. Diyi Yang",
        "location": "Atlanta, GA",
        "timeframe": "Feb 2021 - Present",
        "image": "images/Georgia-Tech.jpg",
        "tasks": [
            "Building machine learning models to predict if a conversation on Reddit is civil or incivil (Python, Scikit-learn, TFIDF, BERT).",
            "Investigating how different linguistic features (aspersion, provocation, vulgarity, stereotypes, etc.) correlate with civility and affect conversations.",
            "Leading and facilitating team meetings, delegating research tasks, writing research paper to submit to conferences (CSCW, ICWSM)." 
        ]
    },
    {
        "name": "Capital One",
        "role": "Software Engineering Intern",
        "location": "McLean, VA",
        "timeframe": "Jun - Aug 2021",
        "image": "images/Capital-One.jpg",
        "tasks": [
            "Developed Neo, a web-based machine learning banking chatbot assistant that can perform intents such as validating accounts and retrieving transactions. Built natural language processing (NLP) models with Rasa to recognize intents and entities in user messages and determine what the chatbot should do next (dialogue management).",
            "Wrote Rasa actions that retrieve account data from data orchestrator via GraphQL and formulate responses when the user message indicates a banking-related intent. Created chatbot UI with React.js, react-chatbot-kit, and Bootstrap and displayed customer profiles from AWS DynamoDB database. Deployed application on Jenkins CICD pipeline with Docker container.",
            "Presented and demoed chatbot to senior leaders. Leveraged Agile workflow."
        ]
    },
    {
        "name": "Georgia Institute of Technology",
        "role": "Research Assistant, Dr. Jacob Abernethy",
        "location": "Atlanta, GA",
        "timeframe": "Jun 2020 - Apr 2021",
        "image": "images/Georgia-Tech.jpg",
        "tasks": [
            "Developed website that aggregates, displays and evaluates COVID-19 forecasts from official forecasters and users, using React.js and Bootstrap, data visualization (including drawable chart) with D3.js.",
            "Wrote RESTful COVID-19 Aggregator API, automated data collection, data processing, and storage of COVID-19 forecast data with Python, Pandas, Flask, MongoDB and Github API. Researched loss functions, created scheme for evaluating forecast models.",
            "Managed and delegated tasks to team of volunteers from the Coronavirus Visualization Team (CVT)."
        ]
    },
    {
        "name": "Zenabi Data",
        "role": "Data Science Intern",
        "location": "Westport, CT",
        "timeframe": "Aug 2018 - Aug 2019",
        "image": "images/Zenabi-Data.jpg",
        "tasks": [
            "Analyzed Miami Dolphins game data using Python. Came up with offensive strategies. Presented to Miami Dolphins coaching staff in Miami, Florida.",
            "Built machine learning model (Python, Scikit-learn) and web dashboard to predict attendance of an International Champions Cup (ICC) match. Model predicted ~5700 seats closer to actual attendance than ICC’s expectations - could help increase revenue. Data analyzed in Excel and R."
        ]
    }
]

export default experiences;