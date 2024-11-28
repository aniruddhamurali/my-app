import { Table, Container, Col, Row} from "react-bootstrap";
import {faLink, faFilePdf, faCode} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Links</h5>
                <Container>
                    <Row>
                        <Col lg={2}>
                            <a href="covid19tracker.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                <small>Website</small>
                            </a>
                        </Col>
                        <Col lg={2}>
                            <a href="https://github.com/aniruddhamurali/COVID-19-Live" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <small>Code</small>
                            </a>
                        </Col>
                    </Row>
                </Container>
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
                </p>
                <p>
                    We could have just used the TSLA stock price to gauge when to buy/sell/hold. 
                    However, we figured it may be a good idea to buy TSLA when it is undervalued 
                    compared to the rest of the market. The Nasdaq Composite index comprises more than  
                    2500 stocks, so we decided to normalize TSLA stock data with Nasdaq index data.
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
                <p>
                    Note: Upsampling was used only for the Naive Bayes and neural network models. 
                    To account for unbalanced data, the random forest and gradient boosting ensemble 
                    models used F1-score as the accuracy metric.
                </p>
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
                    Frameworks/APIs: Scikit-learn, Pandas, NumPy, Matplotlib, Yahoo Finance API, Data.world
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Links</h5>
                <Container>
                    <Row>
                        <Col>
                            <a href="https://github.gatech.edu/pages/aghosh74/Musks-Musings/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                <small>Project</small>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    ),
    "Breast Cancer Diagnosis (Decision Tree)": (
        <div>
            <div className="modal-section">
                <h5>Objective</h5>
                <p>
                    Breast cancer is one of the leading causes of death, particularly among cancers. 
                    However, there are problems with how breast cancer is diagnosed today. There are two 
                    main ways of diagnosis: tumor testing and mammograms. The problem with tumor testing is 
                    that it is time-consuming, invasive, and expensive, while the problem with mammograms is 
                    that they only provide qualitative information, and dense breasts tend to produce blurry 
                    images. But that's not all. According to the American Cancer Society, 1 in 5 screening 
                    mammograms are incorrectly identified - this translates to about 80% accuracy. 93% of women
                    with early breast cancer diagnosis survive beyond 5 years (University of Utah Health Care).
                    This shows the importance of early, accurate, and non-invasive methods of diagnosing patients.
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <div><strong>Dataset:</strong></div>
                <p>
                    Processed University of Wisconsin breast cancer dataset of 569 samples and used them to 
                    train and test my decision tree model.
                </p>
                <div><strong>Methods:</strong></div>
                <p>
                    Wrote a decision tree that follows the CART (Classification and Regression Tree) algorithm 
                    from scratch. Here's what happens in CART:
                    <ul>
                        <li>
                            Creates a binary decision tree
                        </li>
                        <li>
                            One parameter is checked at each node
                        </li>
                        <li>
                            Gini Index evaluates parameters
                        </li>
                        <li>
                            Prediction made at terminal nodes
                        </li>
                    </ul>
                </p>
                <p>
                    Tested decision tree model with cross-validation. Performed a point-biserial correlation 
                    test to understand how each of the 10 features correlate with malignancy.
                </p>
                <div><strong>Products:</strong></div>
                <ul>
                    <li>
                        Wrote research paper about the work done
                    </li>
                    <li>
                        Developed prototype iOS app
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Results</h5>
                <div><strong>Decision Tree Model:</strong></div>
                <ul>
                    <li>
                        Model achieved 90-93% accuracy
                    </li>
                    <li>
                        Concave points was used for the root node
                    </li>
                    <li>
                        Compactness, symmetry, and fractal dimension were not included in the model
                    </li>
                </ul>
                <div><strong>Statistical Analyses:</strong></div>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>rpb</th>
                            <th>t-value</th>
                            <th>p-value</th>
                            <th>p &lt 0.05</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Radius</td>
                            <td>0.73</td>
                            <td>25.436</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Texture</td>
                            <td>0.415</td>
                            <td>10.867</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Texture</td>
                            <td>0.415</td>
                            <td>10.867</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Perimeter</td>
                            <td>0.743</td>
                            <td>26.405</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>0.709</td>
                            <td>23.939</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Smoothness</td>
                            <td>0.359</td>
                            <td>9.146</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Compactness</td>
                            <td>0.597</td>
                            <td>17.698</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Concavity</td>
                            <td>0.696</td>
                            <td>23.104</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Concave-points</td>
                            <td>0.777</td>
                            <td>29.354</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Symmetry</td>
                            <td>0.33</td>
                            <td>8.338</td>
                            <td>~0</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Fractal Dimension</td>
                            <td>-0.013</td>
                            <td>-0.306</td>
                            <td>0.76</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </Table>
                <p>
                    Note: rpb is the association between a continuous variable and a binary variable.
                    <br></br>
                    Note: Conditions for t-test are randomness, independence, and normality. In this case, 
                    randomness is unethical so we won't worry about that. We can assume independence and the 
                    data distribution for each feature is approximately normal.
                </p>
                <p>
                    Only fractal dimension did not show any correlation with breast tumor malignancy. Concave 
                    points, perimeter, radius, area, and concavity showed relatively high correlation coefficients.
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Limitations</h5>
                <ul>
                    <li>
                        The model could be prone to human error. Minor changes in measurement can yield different results.
                    </li>
                    <li>
                        The dataset only had 569 samples. While the model did achieve high accuracy, a higher sample size 
                        would allow for more reliable results.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Awards</h5>
                <ul>
                    <li>Connecticut Science and Engineering Fair (CSEF)</li>
                        <ul>
                            <li>1st place in Mathematics Category</li>
                            <li>3rd place in Computer Science Category</li>
                            <li>National special awards</li>
                                <ul>
                                    <li>Intel Excellence in Computer Science Award</li>
                                    <li>Mu Alpha Theta Award</li>
                                    <li>U.S. Metric Association Award</li>
                                </ul>
                        </ul>
                    <li>Staples High School Sameer Mathur Research Award (excellence in research)</li>
                    <li>Paper published in International Journal of Scientific and Engineering Research (IJSER)</li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python, Swift
                    <br></br>
                    Frameworks/APIs: Flask
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Links</h5>
                <Container>
                    <Row>
                        <Col>
                            <a href="http://bit.ly/aniruddha-research-ijser" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                                <small>Paper</small>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    ),
    "Breast Cancer Diagnosis (CNN)": (
        <div>
            <div className="modal-section">
                <h5>Objective</h5>
                <p>
                    This project looks at the same problem as the decision tree project. We want to see if we can 
                    accurately predict the presence of breast cancer from images, specifically checking for invasive 
                    ductal carcinoma (IDC). IDC is the most common form of breast cancer, making up about 80% of all 
                    cases.
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <div><strong>Dataset:</strong></div>
                <p>
                    Processed Case Western Reserve University breast cancer image dataset of 277,524 samples and used 
                    them to train a convolutional neural network (CNN).
                </p>
                <div><strong>Methods:</strong></div>
                <p>
                    Wrote a CNN in Keras. Here's what happens in a CNN:
                    <ul>
                        <li>
                            Input Layer: Puts images into the neural networks
                        </li>
                        <li>
                            Convolutional Layer: Applies various filters to extract features
                        </li>
                        <li>
                            ReLu: A piecewise linear function that serves as an activation function to 
                            determine which neurons "fire".
                        </li>
                        <li>
                            Pooling Layer: Reduces feature map size
                        </li>
                        <li>
                            Dropout Layer: Reduces size of neural network to prevent overfitting
                        </li>
                        <li>
                            Flatten Layer: Converts input to the layer into a 1-dimensional vector array
                        </li>
                        <li>
                            Fully Connected Layer: Neurons have full connections to all activations in the 
                            previous layer
                        </li>
                        <li>
                            Output Layer: 2 neurons that determine whether the prediction is malignant or benign
                        </li>
                    </ul>
                </p>
                <p>
                    Tested accuracy and loss of model over 100 epochs. Used activations to visualize features at each 
                    layer in the CNN. Wrote research paper about the work done.
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Results</h5>
                <div><strong>Decision Tree Model:</strong></div>
                <ul>
                    <li>
                        Model achieved 88-90% accuracy
                    </li>
                    <li>
                        Features used to determine malignant/benign were visualized to help understand 
                        why the CNN made its prediction
                    </li>
                    <li>
                        CNN also returns probability of each of the two classes
                    </li>
                </ul>
                <div><strong>Confusion Matrix:</strong></div>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Statistic</th>
                            <th>Formula</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>True Positive Rate</td>
                            <td>(True Positive)/(True Positive + False Negative)</td>
                            <td>0.85</td>
                        </tr>
                        <tr>
                            <td>False Positive Rate</td>
                            <td>(False Positive)/(True Negative + False Positve)</td>
                            <td>0.17</td>
                        </tr>
                        <tr>
                            <td>True Negative Rate</td>
                            <td>(True Negative)/(True Negative + False Positive)</td>
                            <td>0.83</td>
                        </tr>
                        <tr>
                            <td>False Negative Rate</td>
                            <td>(False Negative)/(True Positive + False Negative)</td>
                            <td>0.15</td>
                        </tr>
                        <tr>
                            <td>Prevalence</td>
                            <td>(False Negative + True Positive)/total</td>
                            <td>0.50</td>
                        </tr>
                    </tbody>
                </Table>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Awards</h5>
                <ul>
                    <li>CT STEM Fair</li>
                        <ul>
                            <li>1st place in Health Category</li>
                            <li>Top 5 Project</li>
                            <li>Mu Alpha Theta Award</li>
                        </ul>
                    <li>Chosen to present research at Staples High School Science Symposium</li>
                    <li>Paper published in International Journal of Scientific and Engineering Research (IJSER)</li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python
                    <br></br>
                    Frameworks/APIs: Keras, OpenCV, Scikit-learn, Pandas, Matplotlib
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Links</h5>
                <Container>
                    <Row>
                        <Col>
                            <a href="http://bit.ly/aniruddha-research-idc-cnn" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                                <small>Paper</small>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    ),

    "Automating Makerspace Sign-in": (
        <div>
            <div className="modal-section">
                <h5>Objective</h5>
                <p>
                    I volunteered at the Westport Public Library's Makerspace when I was in high school. While 
                    there, myself and the manager of the Makerspace noticed that some materials were being stolen 
                    from the Makerspace. We had a system in place where people who had access to the Makerspace 
                    would sign-in on a sheet every time they came into the space, but we noticed that many people 
                    forgot to sign themselves in. So, we thought it would be cool to have an automated system that 
                    could detect and sign-in people automatically. Such a system would inform us of who has been in 
                    the Makerspace and at what times. It would also detect if someone who is not in the system was 
                    in the Makerspace.
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Wrote a script on Raspberry Pi and Google AIY to perform facial recognition 
                        on people who enter the Makerspace. 
                    </li>
                    <li>
                        Developed process to add Makerspace Makers, volunteers, and workers into the system.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python
                    <br></br>
                    Frameworks/APIs: Python, OpenCV, face_recognition, Google AIY
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Links</h5>
                <Container>
                    <Row>
                        <Col>
                            <a href="https://github.com/aniruddhamurali/Makerspace-Facial-Recognition" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <small>Code</small>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    ),

    "Super Mario Bros": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Recreated the first level of Super Mario Bros.
                    </li>
                    <li>
                        Created classes for each object/sprite.
                    </li>
                    <li>
                        Changed Mario's appearance and added functions when given a power-up.
                    </li>
                    <li>
                        Mario can walk, run, jump, crouch, hit blocks, stomp on enemies, and go down the 
                        flag at the end of the level. Gravity also exists.
                    </li>
                    <li>
                        Added custom features such as hidden blocks and a poison mushroom that takes out Mario.
                    </li>
                    <li>
                        Added music and sound effects.
                    </li>
                    <li>
                        Keep track of coins collected, score, and time remaining.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Potential Improvements</h5>
                <ul>
                    <li>
                        Collisions were very difficult to do properly. There are occassions where if you run too fast,
                        Mario may accidentally go into the ground. Collision is particularly an issue when Mario is 
                        falling - if he falls too fast, he can go straight through the ground and the game will say Mario 
                        lost a life. 
                        <ul>
                            <li>
                                It would probably be a good idea to add terminal velocity to limit how fast Mario can 
                                fall. That being said, a good method for quick collision detection is still needed. Turns 
                                out, collision detection is quite a big thing in game development, and there are various 
                                algorithms out there for collisions between various objects.
                            </li>
                            <li>
                                In games like Pong, a big part of why collisions are easier to deal with is that there are 
                                very few collisions you need to check for. But in a game like Mario, Mario and other
                                objects can collide with many different things. There are so many objects that can collide 
                                that you have to check for many different potential collisions - and I think this is the problem 
                                I'm dealing with. For example, when Mario collides with another object, the program is checking 
                                for a collision between Mario and almost ALL objects in the level. This is quite inefficient, 
                                and in some cases, by the time the program detects the occurring collision with Mario, Mario may 
                                have already went "through" the object.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Sometimes when Mario lands on one of the blocks in the air, the jump sprite is shown instead 
                        of the standing sprite. This may also have something to do with collision detection.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Processing
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Links</h5>
                <Container>
                    <Row>
                        <Col>
                            <a href="https://github.com/aniruddhamurali/Super-Mario-Bros" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <small>Code</small>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    ),

    "Pokemon Team Planner": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Determine the type advantages, weaknesses, and immunities of each Pokemon as well as 
                        the counts of each.
                    </li>
                    <li>
                        Edited and loaded Pokemon images.
                    </li>
                    <li>
                        Pokemon added to team on screen when name is entered in search bar.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Processing
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Links</h5>
                <Container>
                    <Row>
                        <Col>
                            <a href="https://github.com/aniruddhamurali/Pokemon-Team-Planner" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <small>Code</small>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    ),
    "Flappy Bird": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Recreated the Flappy Bird game.
                    </li>
                    <li>
                        Loaded and animated bird and pipe sprites.
                    </li>
                    <li>
                        Keep track of score.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Processing
                </p>
            </div>
        </div>
    ),
    "Vectors Visualized": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Created interface where a user can draw out two vectors.
                    </li>
                    <li>
                        Vector components, magnitude, and various computations are shown.
                    </li>
                    <li>
                        Sum or difference vector is shown on the graph.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Processing
                </p>
            </div>
        </div>
    )
}


export default projectModalContents;