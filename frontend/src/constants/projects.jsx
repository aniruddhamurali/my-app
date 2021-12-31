import projectModalContents from "./projectModalContents";

const projects = [
    {
        "title": "COVID-19 Tracker",
        "description": "Tracks relevant Covid-19 data",
        "image": "/images/covid19tracker.png",
        "carousel": [
            "/images/covid19tracker.png", 
            "/images/covid19tracker2.png", 
            "/images/covid19tracker3.png", 
            "/images/covid19tracker4.png", 
            "/images/covid19tracker5.png"
        ],
        "tags": ["full-stack", "machine-learning", "front-end"],
        "about": projectModalContents["COVID-19 Tracker"]
    },
    {
        "title": "Musks Musings",
        "description": "Predicts what to do with TSLA stock given Elon Musk tweet",
        "image": "/images/elonmusk-tsla.png",
        "carousel": [
            "/images/musk-musings-clustering.png",
            "/images/musk-musings-neural-net-result.png"
        ],
        "tags": ["machine-learning"],
        "about": projectModalContents["Musks Musings"]
    },
    {
        "title": "Breast Cancer Diagnosis (CNN)",
        "description": "Image recognition for Invasive Ductal Carcinoma",
        "image": "/images/neural-network.jpg",
        "carousel": [
            "/images/neural-network.jpg"
        ],
        "tags": ["machine-learning"]
    },
    {
        "title": "Breast Cancer Diagnosis (Decision Tree)",
        "description": "Predicts malignancy of a breast tumor with iOS app",
        "image": "/images/decision-tree.png",
        "carousel": [
            "/images/decision-tree.png"
        ],
        "tags": ["full-stack", "machine-learning", "front-end"]
    },
    {
        "title": "Automating Makerspace Sign-in",
        "description": "Facial/Speech recognition for detecting/signing-in members",
        "image": "/images/makerspace-raspberry-pi.png",
        "carousel": [
            "/images/makerspace-raspberry-pi.png"
        ],
        "tags": ["machine-learning"]
    },
    {
        "title": "Super Mario Bros",
        "description": "Recreated World 1-1 of the original Super Mario Bros. game",
        "image": "/images/super-mario-bros.png",
        "carousel": [
            "/images/super-mario-bros.png"
        ],
        "tags": ["front-end"]
    },
    {
        "title": "Pokemon Team Planner",
        "description": "Determines strengths/weaknesses of your Pokemon team",
        "image": "/images/pokemon-team-planner.png",
        "carousel": [
            "/images/pokemon-team-planner.png"
        ],
        "tags": ["front-end"]
    },
    {
        "title": "Flappy Bird",
        "description": "Recreated Flappy Bird",
        "image": "/images/flappy-bird.png",
        "carousel": [
            "/images/flappy-bird.png"
        ],
        "tags": ["front-end"]
    },
    {
        "title": "Vectors Visualized",
        "description": "Performs vector calculations. User can move vectors around",
        "image": "/images/vector-program.png",
        "carousel": [
            "/images/vector-program.png"
        ],
        "tags": ["front-end"]
    }
];

export default projects;