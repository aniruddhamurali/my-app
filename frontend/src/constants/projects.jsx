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
        "about": (
            <div>
                <div className="modal-section">
                    <h5>Objective</h5>
                    <p>
                        The idea was to make a web application that would retrieve many
                        different kinds of data pertaining to COVID-19 and showcase them
                        on the site. Although lots of this data is accessible to the public,
                        most people don't know where to look to get this kind of information.
                        So, a website that aggregates different kinds of data and presents the 
                        data in a simple manner would help the public stay up-to-date on the latest 
                        COVID trends.
                    </p>
                    <hr></hr>
                </div>
                <div className="modal-section">
                    <h5>What I Did</h5>
                    <ul>
                        <li>
                            Developed a responsive website that tracks and visualizes COVID-19 data such as cases, 
                            deaths, recoveries, and testing in US/global. The visualizations consisted of a 3D map,
                            color maps, an animated bubble map, and side-by-side charts.
                        </li>
                        <li>
                            Fetched data from sources such as John Hopkins University's Github repository. The data 
                            was used to create visualizations and were shown in tables on the website. A user can sort
                            the data in the table by a column.
                        </li>
                        <li>
                            The web app uses the user's location to fetch nearby testing centers from HTML that is web 
                            scraped from the Google Maps page. The web app displays information about the nearest testing
                            centers, including where the name, where they are located, and the distance to get there.
                        </li>
                        <li>
                            Used a dataset I found online to build a machine learning model that predicts a 
                            user's risk of mortality. A user can input their information in a form and based on their 
                            data, the model calculates a percentage of likelihood for mortality. This was one of those features that
                            was done because it sounded really interesting but may not be a good idea to put online...
                        </li>
                        <li>
                            Deployed web application on Heroku.
                        </li>
                    </ul>
                    <hr></hr>
                </div>
                <div className="modal-section">
                    <h5>Learnings</h5>
                    <p>
                        When I worked on this project during my freshman year of college, I didn't have much
                        experience with web development. I had done a little bit of web dev in high school, 
                        but I wasn't very familiar with that many web technologies. I knew HTML, CSS, and some
                        Javascript, but that was it. So during this project, I became comfortable using
                        technologies such as Flask, MongoDB, jQuery, and Plotly. Most of the technolgies I used in the
                        project were things I've used before, but this was really the first project where I 
                        connected the front-end and the back-end together to make a dynamic, complex web app. Considering 
                        that I wasn't very proficient with web development at the time, I was really impressed with
                        the outcome of the project.
                    </p>
                    <p>
                        I wanted to make the website viewable on all devices and provide potential users with a 
                        positive user experience. This forced me to think a lot about how to layout the website and 
                        how to make the website responsive. I became more familiar with Bootstrap, designed the website
                        from scratch, and used media queries to handle responsiveness.
                    </p>
                    <p>
                        I also learned about the differences between how I created the website and industry standards.
                        Although I created a nice website, it definitely has lots of room for improvement. There are
                        issues in terms of potential security threats as well as the organization of code. I also used 
                        this project as a way to understand what needed to be done differently to code like a pro.
                        These differences are expanded upon in the 'Limitations' section.
                    </p>
                    <hr></hr>
                </div>
                <div className="modal-section">
                    <h5>Limitations</h5>
                    <p>
                        The obvious improvement to this project is the organization of code. First, the client-side 
                        and server-side were not separated - Flask was managing both sides. Second, I wrote my Plotly 
                        scripts in Python since I knew how to do it in Python. However, to get the visualizations on the 
                        website, I had to save the visualizations in an HTML file and then load those files and extend them
                        onto the HTML of the page each visualization was meant to be on. These HTML files are huge, not to
                        mention that because the plots were not made in JavaScript, modifying the attributes of the plots
                        to fit the webpage probably was a bit tedious. Third, some of the code isn't very organized or 
                        readable. There were times when an HTML file would have HTML along with CSS and JavaScript in 
                        style and script tags respectively. 
                    </p>
                    <p>
                        Probably the most important problem with the website is that it is not designed to deal with
                        potential security issues. For example, there are several times in the code where I used $.html()
                        to insert HTML into a page. Directly injecting HTML into a page like this makes the website prone 
                        to an cross-site scripting attack, which is when an attacker injects client-side scripts into a 
                        web page. Another example is that because the client-side and server-side are not separated, the 
                        MongoDB database is accessible from the client-side. 
                    </p>
                    <hr></hr>
                </div>
                <div className="modal-section">
                    <h5>Technologies and Tools</h5>
                    <p>
                        Languages: Python, JavaScript, HTML, CSS
                    </p>
                    <p>
                        Frameworks: Flask, jQuery, Bootstrap, Plotly
                    </p>
                    <p>
                        Other: MongoDB, Heroku
                    </p>
                </div>
            </div>
        )
    },
    {
        "title": "Musks Musings",
        "description": "Predicts what to do with TSLA stock given Elon Musk tweet",
        "image": "/images/elonmusk-tsla.png",
        "carousel": [
            "/images/elonmusk-tsla.png"
        ],
        "tags": ["machine-learning"]
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