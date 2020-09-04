import gamerstagram from '../gamerstagram.png'
import PlayboyStarterPack from '../PlayboyStarterPack.png'
import project4 from '../PlayboyStarterPack.png'

const projects = [
    {   number : '01',
        image: gamerstagram,
        title : 'Project 4 Title',
        description : 'One of the issue that surface during the COVID-19 pandemic was managing both work and child for stay-home parent. Our team responded by building an app for children to learn through fun games. Meaningful statistics are collected and shown to parent to help better understand their child learning journey.',
        listTech : ['MERN','React-Game-Kit','Mongoose','React-Spring','Axios'],
        partners : [{name:'Tam,jessephamsg', link:'https://github.com/jessephamsg'},
                    {name:'Lina, lyyyn', link:'https://github.com/lyyyn'}],
        date : '4weeks, Sept 2020',
        githubLink : '#',
        launchLink : '#'
    },
    {   number : '02',
    image: PlayboyStarterPack,
    title : 'Playboy Starter Pack',
    description : 'A social web application that contains a library of quirky memes, puns and gifs contributed by users. Use this library to engage or start a conversation with your partner or “partner-to-be”, making communication a relax and light-hearted manner.Try this to help that special one to be more comfortable texting you! ',
    listTech : ['MERN','Mongoose','MDBReact','Axios'],
    partners : [{name:'Javier,redgreenblues', link:'https://github.com/redgreenblues'},
                {name:'Jared, teppy90', link:'https://github.com/teppy90'}],
    date : '2weeks, Aug 2020',
    githubLink : 'https://github.com/leeyuejia/playboy-starter-pack',
    launchLink : 'https://playboy-starter-pack-frontend.herokuapp.com/'
    },
    {   number : '03',
    image: gamerstagram,
    title : 'Gamerstagram',
    description : 'This social web application seeks to bring gamers together. Gamers can share topics on games they play. they can share and find tips, review and walkthrough posted on this platform. It is hope that eventually, gamers with common interest with the genre of games they played would form a cluster community to connect at a deeper level.',
    listTech : ['Express','NodeJS','MongoDB','EJS view', 'JQuery'],
    partners : null,
    date : '2weeks, May 2020',
    githubLink : 'https://github.com/leeyuejia/gamerstergram',
    launchLink : 'https://gamerstergram-yj.herokuapp.com/'
    },
]



export default projects