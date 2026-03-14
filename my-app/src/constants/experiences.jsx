import experienceModalContents from "./experienceModalContents";

const experiences = [
    {
        "name": "DoorDash",
        "role": "Software Engineer",
        "location": "San Francisco, CA",
        "timeframe": "Sept 2024 - Present",
        "image": `${process.env.PUBLIC_URL}/images/doordash.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/doordash.png`
        ],
        "about": experienceModalContents["DoorDash Sept 2024 - Present"]
    },
    {
        "name": "Tremau",
        "role": "Machine Learning Engineer Intern",
        "location": "Remote (Paris, France)",
        "timeframe": "Jan 2024 - May 2024",
        "image": `${process.env.PUBLIC_URL}/images/tremau.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/tremau.png`
        ],
        "about": experienceModalContents["Tremau Jan 2024 - May 2024"]
    },
    {
        "name": "Amazon",
        "role": "Software Engineering Intern",
        "location": "Seattle, WA",
        "timeframe": "May 2023 - Aug 2023",
        "image": `${process.env.PUBLIC_URL}/images/Amazon.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/Amazon.png`
        ],
        "about": experienceModalContents["Amazon May 2023 - Aug 2023"]
    },
    {
        "name": "Goldman Sachs",
        "role": "Quantitative Strategist Intern",
        "location": "Dallas, TX",
        "timeframe": "Jun 2022 - Aug 2022",
        "image": `${process.env.PUBLIC_URL}/images/Goldman-Sachs.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/Goldman-Sachs.png`
        ],
        "about": experienceModalContents["Goldman Sachs Jun 2022 - Aug 2022"]
    },
    {
        "name": "Georgia Tech",
        "role": "Research Assistant, Dr. Diyi Yang",
        "location": "Atlanta, GA",
        "timeframe": "Feb 2021 - Present",
        "image": `${process.env.PUBLIC_URL}/images/Georgia-Tech.jpg`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/Georgia-Tech.jpg`
        ],
        "about": experienceModalContents["Georgia Tech Feb 2021 - Present"]
    },
    {
        "name": "Capital One",
        "role": "Software Engineering Intern",
        "location": "McLean, VA",
        "timeframe": "Jun 2021 - Aug 2021",
        "image": `${process.env.PUBLIC_URL}/images/Capital-One.jpg`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/Capital-One.jpg`
        ],
        "about": experienceModalContents["Capital One Jun 2021 - Aug 2021"]
    },
    {
        "name": "Georgia Tech",
        "role": "Research Assistant, Dr. Jacob Abernethy",
        "location": "Atlanta, GA",
        "timeframe": "Jun 2020 - Apr 2021",
        "image": `${process.env.PUBLIC_URL}/images/Georgia-Tech.jpg`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/covidforecasts-home.png`,
            `${process.env.PUBLIC_URL}/images/covidforecasts-topforecasts.png`,
        ],
        "about": experienceModalContents["Georgia Tech Jun 2020 - Apr 2021"]
    },
    {
        "name": "Bits of Good",
        "role": "Web Developer",
        "location": "Atlanta, GA",
        "timeframe": "Aug 2020 - Dec 2020",
        "image": `${process.env.PUBLIC_URL}/images/bits-of-good.jpg`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/general-solution-1.png`,
            `${process.env.PUBLIC_URL}/images/general-solution-2.png`,
        ],
        "about": experienceModalContents["Bits of Good Aug 2020 - Dec 2020"]
    },
    {
        "name": "Yale School of Medicine",
        "role": "Research Intern, Dr. Elizbaeth Jonas",
        "location": "New Haven, CT",
        "timeframe": "May 2019 - Jun 2019",
        "image": `${process.env.PUBLIC_URL}/images/Yale-School-of-Medicine.png`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/Yale-School-of-Medicine.png`
        ],
        "about": experienceModalContents["Yale University School of Medicine May 2019 - Jun 2019"]
    },
    {
        "name": "Zenabi Data",
        "role": "Data Science Intern",
        "location": "Westport, CT",
        "timeframe": "Aug 2018 - Aug 2019",
        "image": `${process.env.PUBLIC_URL}/images/Zenabi-Data.jpg`,
        "carousel": [
            `${process.env.PUBLIC_URL}/images/zenabi-correlations.png`,
            `${process.env.PUBLIC_URL}/images/zenabi-analysis.png`
        ],
        "about": experienceModalContents["Zenabi Data Aug 2018 - Aug 2019"]
    }
];

export default experiences;
