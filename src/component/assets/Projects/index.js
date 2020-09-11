import tly from '../tlyEducation.PNG'
import PlayboyStarterPack from '../PlayboyStarterPack.png'
import gamerstagram from '../gamerstagram.png'

const projects = [
    {   number : '01',
        image: tly,
        title : 'TLY Education',
        description : 'One of the issue that surface for parents during the COVID-19 pandemic was to manage their children and work from home at the same time. In view of this, our team built an application for children to learn through fun games. This helps to take some burden off parent\s shoulders as these games not only keep children occupied but meaningful statistics will also be collected and presented to the parents to help better understand their child learning journey.',
        listTech : ['MERN Stack','Rough-Chart JS','React-Spring','Axios'],
        partners : [{name:'TAM , jessephamsg', link:'https://github.com/jessephamsg'},
                    {name:'LINA , lyyyn', link:'https://github.com/lyyyn'}],
        date : '4weeks, Sept 2020',
        githubLink : 'https://github.com/leeyuejia/project_4_FE',
        launchLink : 'https://tly-education-fe.herokuapp.com/'
    },
    {   number : '02',
    image: PlayboyStarterPack,
    title : 'Playboy Starter Pack',
    description : 'A social media web application that contains a library of quirky memes, puns and gifs contributed by users! Use this application to break the ice and start engaging conversations with your partner or “partner-to-be”. They say that laughter is the best medicine, try this application and bring laughter to your special one',
    listTech : ['MERN Stack','Passport JS','MDBReact','Axios'],
    partners : [{name:'JAVIER , redgreenblues', link:'https://github.com/redgreenblues'},
                {name:'JARED , teppy90', link:'https://github.com/teppy90'}],
    date : '2weeks, Aug 2020',
    githubLink : 'https://github.com/leeyuejia/playboy-starter-pack',
    launchLink : 'https://playboy-starter-pack-frontend.herokuapp.com/'
    },
    {   number : '03',
    image: gamerstagram,
    title : 'Gamerstagram',
    description : 'Looking for a platform to build your gaming community? On this social media application, gamers are not only able to share topics on the games they play, but they can also share tips, reviews and walkthroughs! Eventually, gamers with a common interest in the genre of games they play can form a cluster community to connect at a deeper level! Gamers unite!',
    listTech : ['Express','NodeJS','MongoDB','EJS view', 'JQuery'],
    partners : null,
    date : '2weeks, May 2020',
    githubLink : 'https://github.com/leeyuejia/gamerstergram',
    launchLink : 'https://gamerstergram-yj.herokuapp.com/'
    },
]



export default projects