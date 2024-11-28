import projectModalContents from "./projectModalContents";

const projects = [
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
        "title": "Breast Cancer Diagnosis (CNN)",
        "description": "Image recognition for Invasive Ductal Carcinoma",
        "image": "/images/neural-network.jpg",
        "carousel": [
            "/images/neural-network.jpg",
            "/images/idc-images.png",
            "/images/cnn-accuracy-loss.png",
            "/images/confusion-matrix.png",
            "/images/feature-visualization-positive.png",
            "/images/feature-visualization-negative.png",
        ],
        "tags": ["machine-learning"],
        "about": projectModalContents["Breast Cancer Diagnosis (CNN)"]
    },
    {
        "title": "Breast Cancer Diagnosis (Decision Tree)",
        "description": "Predicts malignancy of a breast tumor with iOS app",
        "image": "/images/decision-tree.png",
        "carousel": [
            "/images/decision-tree.png",
            "/images/decision-tree-mobile-app.png"
        ],
        "tags": ["full-stack", "machine-learning", "front-end"],
        "about": projectModalContents["Breast Cancer Diagnosis (Decision Tree)"]
    },
    {
        "title": "Automating Makerspace Sign-in",
        "description": "Facial/Speech recognition for detecting/signing-in members",
        "image": "/images/makerspace-raspberry-pi.png",
        "carousel": [
            "/images/makerspace-raspberry-pi.png"
        ],
        "tags": ["machine-learning"],
        "about": projectModalContents["Automating Makerspace Sign-in"]
    },
    {
        "title": "Super Mario Bros",
        "description": "Recreated World 1-1 of the original Super Mario Bros. game",
        "image": "/images/super-mario-bros.png",
        "carousel": [
            "/images/super-mario-bros.png",
            "/images/powerups.png",
            "/images/hidden-blocks.png",
            "/images/complete-level.png",
            "/images/game-over.png"
        ],
        "tags": ["front-end"],
        "about": projectModalContents["Super Mario Bros"]
    },
    {
        "title": "Pokemon Team Planner",
        "description": "Determines strengths/weaknesses of your Pokemon team",
        "image": "/images/pokemon-team-planner.png",
        "carousel": [
            "/images/pokemon-team-planner.png"
        ],
        "tags": ["front-end"],
        "about": projectModalContents["Pokemon Team Planner"]
    },
    {
        "title": "Flappy Bird",
        "description": "Recreated Flappy Bird",
        "image": "/images/flappy-bird.png",
        "carousel": [
            "/images/flappy-bird.png"
        ],
        "tags": ["front-end"],
        "about": projectModalContents["Flappy Bird"]
    },
    {
        "title": "Vectors Visualized",
        "description": "Performs vector calculations. User can move vectors around",
        "image": "/images/vector-program.png",
        "carousel": [
            "/images/vector-program.png"
        ],
        "tags": ["front-end"],
        "about": projectModalContents["Vectors Visualized"]
    }
];

export default projects;