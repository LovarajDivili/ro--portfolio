import Profile from '../images/profile.png'
import Full_photo from '../images/full_photo.jpg'
// skillset 
import ES6 from '../images/languages/es6.png'
import HTML from '../images/languages/html-5.png'
import CSS from '../images/languages/css-3.png'
import JS from '../images/languages/js.png'
import Bootstrap from '../images/languages/bootstrap.png'
import ReactJS from '../images/languages/react.png'
import Redux from '../images/languages/redux.png'
import NodeJS from '../images/languages/node.png'
import ExpressJS from '../images/languages/express.png'
import Github from '../images/languages/github.png'
import Heroku from '../images/languages/heroku.png'
import MongoDB from '../images/languages/mongodb.png'
import MySQL from '../images/languages/mysql.png'
import Python from '../images/languages/python.png'
import Flutter from '../images/languages/flutter.jpg'

// packages
import VisTimeline from '../images/packages/visjs_logo.png'
import Cesiumjs from '../images/packages/cesiumjs.png'
import Leaflet from '../images/packages/leaflet.png'
import Socket from '../images/packages/socket.png'
import Twilio from '../images/packages/twilio.png'
import Razorpay from '../images/packages/razorpay.png'
import Peer from '../images/packages/peer.png'
import Cloudinary from '../images/packages/cloudinary.png'
import Quill from '../images/packages/quill.svg'
import ApexChart from '../images/packages/apexjs.svg'
import ChartJs from '../images/packages/chartjs.svg'

// Projects
import TerraPlanner from '../images/projects/tme.png'
import DRF from '../images/projects/drf.png'
import VMMAPS from '../images/projects/vmmaps.png'
import GPS from '../images/projects/gps.jpg'

import VmLogo from '../images/vmlogo.png'

import Resume from './RajajayarubanT_Resume.pdf'

const UserData = {
    name: "Rajajayaruban",
    initial: 'T',
    resume: Resume,
    designation: 'Software Developer',
    born: '23 July 2001',
    hobbies: 'Traveling, Product Creation',
    photo: Profile,
    fullPhoto: Full_photo,
    about: "Rajajayaruban is a Full Stack Web Developer working on technologies like ES6, React JS, React Native, Node JS, CesiumJS, LeafletJS, VisJS, etc... Plus, He Likes to talk in third person about himself. Born and raised in Theni, Tamil Nadu. In his free time he likes to develop innovative products.",
    phone: '+91 7904491410',
    skillset: [
        { name: 'HTML', logo: HTML },
        { name: 'CSS', logo: CSS },
        { name: 'JS', logo: JS },
        { name: 'BootStrap', logo: Bootstrap },
        { name: 'ES6', logo: ES6 },
        { name: 'React Js', logo: ReactJS },
        { name: 'Redux', logo: Redux },
        { name: 'Node Js', logo: NodeJS },
        { name: 'Express Js', logo: ExpressJS },
        { name: 'Flutter', logo: Flutter },
        { name: 'Python', logo: Python },
        { name: 'MongoDB', logo: MongoDB },
        { name: 'GitHub', logo: Github },
        { name: 'Heroku', logo: Heroku },
        { name: 'My SQL', logo: MySQL },
    ],
    expireance: [
        {
            name: 'Virtualmaze Softsys Pvt Ltd',
            logo: VmLogo,
            start: 'Nov, 2020',
            end: 'Present',
            description: 'I got more field expireance and advance level works in package development, API Integrations and Designing custmoized templates for our products in this company,It’s also a start- up company.',
            link: 'https://www.virtualmaze.com/',
        },
        {
            name: 'Freelancing',
            logo: Profile,
            start: 'FEB, 2020',
            end: 'SEP, 2020',
            description: 'I’ve stareted my career as a freelancer. I’ve done more than 5 projects and also devloped ERP based products for clients. It’s very challenging to maintain both college and work parallelly.',
            link: '/',
        },
    ],
    packages: [
        { name: 'Vis.Js', logo: VisTimeline },
        { name: 'Cesium', logo: Cesiumjs },
        { name: 'Leaflet', logo: Leaflet },
        { name: 'Apexchart', logo: ApexChart },
        { name: 'ChartJS', logo: ChartJs },
        { name: 'Socket.io', logo: Socket },
        { name: 'Twilio', logo: Twilio },
        { name: 'Razerpay', logo: Razorpay },
        { name: 'Peer Js', logo: Peer },
        { name: 'Quill', logo: Quill },
        { name: 'PyNSE', logo: Python },
        { name: 'Cloudinary', logo: Cloudinary },
    ],
    projects: [
        {
            image: TerraPlanner,
            company: 'Virtualmaze Softsys Pvt Ltd',
            name: 'TerraPlanner ',
            sub_desc: 'Defense Plan Simulation',
            description: "It's a Defense Plan Simulation that more help full to Make Plan to attack Enemies, And It's an AI Involved Project that to help Planning much Better.",
            skills: 'ES6, Node Js, MongoDB, Vis-Timeline JS,  Chart JS, Socket.io Js, Cesium Js ',
            link: '',
            portion: ['Timeline Feature (Core of Project)', 'Logical Tools', 'UI Designs', 'Socket Intraction'],
        },
        {
            image: VMMAPS,
            company: 'Virtualmaze Softsys Pvt Ltd',
            name: 'VM Maps',
            sub_desc: 'Application like Google Maps',
            description: " It's a map routing application like google maps with more advance features.",
            skills: 'ES6, Node Js, MongoDB, Vis-Timeline JS, LeafletJs.',
            link: 'https://www.vmmaps.com/',
            portion: ['UI Designs', 'Routes Mapping Tools'],
        },
        {
            image: GPS,
            company: 'Virtualmaze Softsys Pvt Ltd',
            name: 'Trekking App',
            sub_desc: 'Social media Application',
            description: " It's a Social Media Application like Instagram to explore Traveling Experience by Posting Photos, Videos.",
            skills: 'React Js, Node Js, Express Js, Bcrypt, JWT, MongoDB, Cloudinary API.',
            link: 'https://gpstools.app/',
            portion: ['Server side'],
        },
        {
            image: DRF,
            company: 'Virtualmaze Softsys Pvt Ltd',
            name: 'Driving Route Finder ',
            sub_desc: 'It’s a Vehicle Route management System',
            description: "It's a Vehicle Route Optimizer Transport, school vehicles and Managing Logs of Vehicles and Drivers.",
            skills: 'ES6, Node Js, MongoDB, Vis-Timeline JS, LeafletJs.',
            link: 'https://vmmaps.com/vrs/',
            portion: ['Timeline Feature', 'UI Designs', 'Logical Tools', 'Data Visualization for optimized routes'],
        },
        {
            image: TerraPlanner,
            company: 'Virtualmaze Softsys Pvt Ltd',
            name: 'IPB ',
            sub_desc: 'Phases bases Analysis and Planning Tools',
            description: "It's a Defense Plan Simulation that more help full to Make Plan to attack Enemies, and it’s separated by.",
            skills: 'ES6, Node Js, MongoDB, Vis-Timeline JS, Socket.io Js,  Chart JS, QuillJs, Cesium Js.',
            link: '',
            portion: ['Timeline Feature (Core of Project)', 'Frontend Part', 'Analysis Tools', 'Polyline Interpolation and etc'],
        },
        {
            image: DRF,
            company: 'Virtualmaze Softsys Pvt Ltd',
            name: 'Office Ride',
            sub_desc: 'Taxi based Application',
            description: "It's a Taxi based application for organization and office to Track, Manage and Optimize vehicles, drivers and users",
            skills: 'ES6, Node Js, MongoDB, My SQL, Vis-Timeline JS, Chart JS, LeafletJs.',
            link: '',
            portion: ['Whole Frontend-side'],
        },
        {
            image: GPS,
            company: 'Virtualmaze Softsys Pvt Ltd',
            name: 'GPS TOOLS',
            sub_desc: 'Large Data Visualization and Operations Handling',
            description: "It's a application to handle optimized events and operation of large geo data from api",
            skills: 'ES6, Cesium, Node Js, MongoDB, Vis-Timeline JS, Chart JS',
            link: 'https://gpstools.app/',
            portion: ['Whole Project'],
        },
        {
            image: GPS,
            company: 'Freelancing',
            name: 'Virtual Shop',
            sub_desc: "It's a e-commers application via video stream",
            description: "It's a application to handle optimized events and operation of large geo data from api",
            skills: 'React JS, Node Js, MongoDB, Peer JS, Socker.io, Razerpay Api.',
            link: '',
            portion: ['Whole Project'],
        },
    ],
    social: {
        gmail: 'mailto:rajajayarubant@gmail.com',
        linkedin: 'https://www.linkedin.com/in/rajajayaruban-t-974a96242',
        github: 'https://github.com/RajajayarubanT',
        instagram: 'https://www.instagram.com/__dr.tr__/',
        whatsapp: "https://wa.me/7904491410?text=Hii%2C%20I'm% 20Rajajayaruban% 20T% 2C % 20Full % 20Stack % 20Developer",
        twitter: '',
        dribbble: '',
    }

}

export default UserData