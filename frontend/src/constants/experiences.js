const experiences = [
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
    }
]

export default experiences;