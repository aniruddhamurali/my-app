import projectModalContents from "./projectModalContents";

const projects = [
    {
        "title": "Musks Musings",
        "description": "Predicts what to do with TSLA stock given Elon Musk tweet",
        "image": `${process.env.PUBLIC_URL}/images/elonmusk-tsla.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/musk-musings-clustering.png`,
            `${process.env.PUBLIC_URL}/images/musk-musings-neural-net-result.png`
        ],
        "tags": ["machine-learning"],
        "about": projectModalContents["Musks Musings"]
    },
    {
        "title": "COVID-19 Tracker",
        "description": "Tracks relevant Covid-19 data",
        "image": `${process.env.PUBLIC_URL}/images/covid19tracker.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/covid19tracker.png`,
            `${process.env.PUBLIC_URL}/images/covid19tracker2.png`,
            `${process.env.PUBLIC_URL}/images/covid19tracker3.png`,
            `${process.env.PUBLIC_URL}/images/covid19tracker4.png`,
            `${process.env.PUBLIC_URL}/images/covid19tracker5.png`
        ],
        "tags": ["full-stack", "machine-learning", "front-end"],
        "about": projectModalContents["COVID-19 Tracker"]
    },
    {
        "title": "Breast Cancer Diagnosis (CNN)",
        "description": "Image recognition for Invasive Ductal Carcinoma",
        "image": `${process.env.PUBLIC_URL}/images/neural-network.jpg`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/neural-network.jpg`,
            `${process.env.PUBLIC_URL}/images/idc-images.png`,
            `${process.env.PUBLIC_URL}/images/cnn-accuracy-loss.png`,
            `${process.env.PUBLIC_URL}/images/confusion-matrix.png`,
            `${process.env.PUBLIC_URL}/images/feature-visualization-positive.png`,
            `${process.env.PUBLIC_URL}/images/feature-visualization-negative.png`,
        ],
        "tags": ["machine-learning"],
        "about": projectModalContents["Breast Cancer Diagnosis (CNN)"]
    },
    {
        "title": "Breast Cancer Diagnosis (Decision Tree)",
        "description": "Predicts malignancy of a breast tumor with iOS app",
        "image": `${process.env.PUBLIC_URL}/images/decision-tree.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/decision-tree.png`,
            `${process.env.PUBLIC_URL}/images/decision-tree-mobile-app.png`
        ],
        "tags": ["full-stack", "machine-learning", "front-end"],
        "about": projectModalContents["Breast Cancer Diagnosis (Decision Tree)"]
    },
    {
        "title": "Automating Makerspace Sign-in",
        "description": "Facial/Speech recognition for detecting/signing-in members",
        "image": `${process.env.PUBLIC_URL}/images/makerspace-raspberry-pi.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/makerspace-raspberry-pi.png`
        ],
        "tags": ["machine-learning"],
        "about": projectModalContents["Automating Makerspace Sign-in"]
    },
    {
        "title": "Super Mario Bros",
        "description": "Recreated World 1-1 of the original Super Mario Bros. game",
        "image": `${process.env.PUBLIC_URL}/images/super-mario-bros.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/super-mario-bros.png`,
            `${process.env.PUBLIC_URL}/images/powerups.png`,
            `${process.env.PUBLIC_URL}/images/hidden-blocks.png`,
            `${process.env.PUBLIC_URL}/images/complete-level.png`,
            `${process.env.PUBLIC_URL}/images/game-over.png`
        ],
        "tags": ["front-end"],
        "about": projectModalContents["Super Mario Bros"]
    },
    {
        "title": "Pokemon Team Planner",
        "description": "Determines strengths/weaknesses of your Pokemon team",
        "image": `${process.env.PUBLIC_URL}/images/pokemon-team-planner.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/pokemon-team-planner.png`
        ],
        "tags": ["front-end"],
        "about": projectModalContents["Pokemon Team Planner"]
    },
    {
        "title": "Flappy Bird",
        "description": "Recreated Flappy Bird",
        "image": `${process.env.PUBLIC_URL}/images/flappy-bird.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/flappy-bird.png`
        ],
        "tags": ["front-end"],
        "about": projectModalContents["Flappy Bird"]
    },
    {
        "title": "Vectors Visualized",
        "description": "Performs vector calculations. User can move vectors around",
        "image": `${process.env.PUBLIC_URL}/images/vector-program.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/vector-program.png`
        ],
        "tags": ["front-end"],
        "about": projectModalContents["Vectors Visualized"]
    }
];

export default projects;
