import { Table } from "react-bootstrap";

const projectModalContents = {
    "COVID-19 Tracker" : (
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
                <p>
                    Finally, the web app directly pulls data from a source - it relies on the fact that the sources
                    are kept up-to-date and still exist. It would be better to store all the collected data into the 
                    database. For example, you could setup a Python scheduler script in the backend to pull data and 
                    update the database once a day/week.
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python, JavaScript, HTML, CSS
                    <br></br>
                    Frameworks: Flask, jQuery, Bootstrap, Plotly
                    <br></br>
                    Other: MongoDB, Heroku
                </p>
            </div>
        </div>
    ),
    "Musks Musings" : (
        <div>
            <div className="modal-section">
                <h5>Objective</h5>
                <p>
                    Elon Musk tends to tweet a lot on Twitter, so we were curious to see 
                    if his tweets could be used for a trading strategy centered around Tesla 
                    stock. We built a machine learning model to predict whether you should 
                    buy, sell, or hold TSLA stock based on a given tweet.
                    <br></br>
                    We could have just used the TSLA stock price to gauge when to buy/sell/hold. 
                    However, we figured it may be a good idea to buy TSLA when it is undervalued 
                    compared to the rest of the market. The Nasdaq index comprises more than 2500 
                    stocks, so we decided to normalize TSLA stock data with Nasdaq index data.
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Merged and cleaned two datasets of Elon Musk tweets to form final dataset for creating 
                        the model.
                    </li>
                    <li>
                        Retrieved Tesla and Nasdaq stock data with the Yahoo Finance API. Normalized data by 
                        subtracting Nasdaq values from Tesla values for each day. Measured performance by calculating 
                        daily range (daily high - daily low) and daily change (daily close - daily open).
                    </li>
                    <li>
                        Implemented principal component analysis (PCA) to reduce the number of features 
                        in dataset.
                    </li>
                    <li>
                        Labeled data points as buy, sell, or hold with KMeans clustering algorithm. Balanced dataset 
                        to have equal amount of each class by upsampling the data.
                    </li>
                    <li>
                        Trained ensemble, Naive Bayes, and neural network models.
                    </li>
                    <li>
                        Converted tweets to vector inputs for ML algorithms using TFIDF (Term Frequency — Inverse 
                        Document Frequency).
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Results</h5>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>(Hyper)parameters</th>
                            <th>Accuracy</th>
                        </tr>
                    </thead>
                        <tbody>
                        <tr>
                            <td>Random Forest</td>
                            <td>
                                max_depth=12
                                <br></br>
                                n_estimators=10
                            </td>
                            <td>66.4%</td>
                        </tr>
                        <tr>
                            <td>Gradient Boosting</td>
                            <td>max_depth=5</td>
                            <td>73.8%</td>
                        </tr>
                        <tr>
                            <td>Naive Bayes</td>
                            <td>N/A</td>
                            <td>76.6%</td>
                        </tr>
                        <tr>
                            <td>Neural Network</td>
                            <td>
                                Input Layer: 4000 neurons
                                <br></br>
                                Hidden Layers: 12, 8, and 8 neurons
                                <br></br>
                                Output Layer: 3 neurons
                            </td>
                            <td>~87%</td>
                        </tr>
                    </tbody>
                </Table>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Potential Improvements</h5>
                <ul>
                    <li>
                        It may be more realistic that a 'sequence' of tweets correlate with stock performance 
                        instead of just one tweet. Algorithms like LSTMs may be useful in building models that 
                        predict what to do with TSLA stock using all tweets in a given timeframe.
                    </li>
                    <li>
                        The dataset before upsampling was very unbalanced. While upsampling increased
                        sample size and balanced the data used to train the models, the introduction of 
                        "fake" tweets may result in misleading accuracy since each tweet was only sent once.
                    </li>
                    <li>
                        We normalized TSLA with the Nasdaq index to capture when it was undervalued compared to 
                        the rest of the market. However, we could compare TSLA to another index such as the S&P 
                        500, or it might be better to look at TSLA by itself. Another idea is that since TSLA 
                        is a tech stock, we could compare TSLA to a tech-focused index.
                    </li>
                    <li>
                        The way the stock data and the tweet dates are being lined up, we're assuming the stock 
                        data is impacted immediatly after a tweet is sent out or the next day. It would be good to 
                        test this out and determine if there is a more accurate timeframe for when a tweet correlates 
                        with more impact on stock data.
                    </li>
                    <li>
                        Other word embedding techniques/models such as Word2Vec and BERT may be better for 
                        representing the tweets in a vector format.
                    </li>
                    <li>
                        The ADAM optimizer was used. ADAM converges faster, but SGD generalizes better, so
                        different optimizers could be used. We could also test out different loss functions.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python
                    <br></br>
                    Frameworks/APIs: Scikit-learn, Pandas, NumPy, Matplotlib, Yahoo Finance API, data.world
                </p>
            </div>
        </div>
    )
}


export default projectModalContents;