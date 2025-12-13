import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StaticProjectCard from "../components/staticprojectcard";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";
import htmlIcon from '../assets/techstack/html.svg';
import cssIcon from '../assets/techstack/css.svg';
import jsIcon from '../assets/techstack/javascript.svg';
import tailwindIcon from '../assets/techstack/tailwindcss.svg';
import reactIcon from '../assets/techstack/react.svg';
import viteIcon from '../assets/techstack/vite.svg';
import nodejsIcon from '../assets/techstack/nodejs.svg';
import bootstrapIcon from '../assets/techstack/bootstrap.svg';
import firebaseIcon from '../assets/techstack/firebase.svg';
import materialuiIcon from '../assets/techstack/materialui.svg';
import vercelIcon from '../assets/techstack/vercel.svg';
import canvaIcon from '../assets/techstack/canva.svg';
import marinadigiLogo from '../assets/projects/md-logo.png';
import cpsportsLogo from '../assets/projects/cp-logo.png';
import handcricketlogo from '../assets/projects/hc-logo.png';
import artHausLogo from '../assets/projects/art.png';
import fullStackImg from '../assets/certificates/full-stack.png';
import pcapUdemyImg from '../assets/certificates/PCAP-udemy.png';
import corizoInternImg from '../assets/certificates/corizo-intern.png';
import corizoAndroidImg from '../assets/certificates/corizo-android.png';
import pythonOpenedgImg from '../assets/certificates/python-openedg.png';
import novitechCourseImg from '../assets/certificates/novitech-course.png';
import novitechInternImg from '../assets/certificates/novitech-intern.png';
import kanikaLogo from '../assets/projects/kanikatravels.jpg';
import tmalogo from '../assets/projects/TMA.png';

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-md bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white"
  >
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] group-hover:translate-x-0 ease">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </span>
    <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
      {isShowingMore ? "Show Less" : "Show More"}
    </span>
    <span className="relative invisible">
      {isShowingMore ? "Show Less" : "Show More"}
    </span>
  </button>
);

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingMore: PropTypes.bool.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { TechStackIcon: htmlIcon, Language: "HTML" },
  { TechStackIcon: cssIcon, Language: "CSS" },
  { TechStackIcon: jsIcon, Language: "JavaScript" },
  { TechStackIcon: tailwindIcon, Language: "Tailwind CSS" },
  { TechStackIcon: reactIcon, Language: "ReactJS" },
  { TechStackIcon: viteIcon, Language: "Vite" },
  { TechStackIcon: nodejsIcon, Language: "Node JS" },
  { TechStackIcon: bootstrapIcon, Language: "Bootstrap" },
  { TechStackIcon: firebaseIcon, Language: "Firebase" },
  { TechStackIcon: materialuiIcon, Language: "Material UI" },
  { TechStackIcon: vercelIcon, Language: "Vercel" },
  { TechStackIcon: canvaIcon, Language: "Canva" },
];

// Static project data
const staticProjects = [
  {
    Title: "Track My Academy",
    Description: "Streamline operations, track performance, and scale your academy with our comprehensive management platform. Everything you need in one place.",
    Link: "https://www.trackmyacademy.com/",
    Image: tmalogo,
    containImage: true,
    containerBg: 'bg-black' 
  },
  {
    Title: "Hand Cricket using AI",
    Description: "A browser-based AI-powered Hand Cricket game using real-time gesture recognition with MediaPipe and TensorFlow.js",
    Link: "https://handcricket.arunvignesh.one/",
    Image: handcricketlogo,
    containImage: true,
    containerBg: 'bg-black'
  },
  {
    Title: "Marina Digitals",
    Description: "One of the lead web developer in the creation of the working of the website for Marina Digital, a digital marketing company",
    Link: "https://marinadigi.com",
    Image: marinadigiLogo
  },
  {
    Title: "Cp Sports Academy",
    Description: "Assited in creating the website for Cp Sports Academy, a sports academy for children",
    Link: "https://www.cpsports.in",
    Image: cpsportsLogo,
    containImage: true,
    containerBg: 'bg-white'
  },
  {
    Title: "Selva's Art Haus",
    Description: "An Exquisite mehndi artistry, elegant makeup designs, and intricate aari embroidery work that brings your fashion dreams to life.",
    Link: "https://selvasarthaus.netlify.app/",
    Image: artHausLogo,
    containImage: true,
    containerBg: 'bg-black'
  },
  {
    Title: "Kanika Travels",
    Description: "Founded by Venkat, Kanika Travels is your trusted partner for cab services across Tamil Nadu. Our mission is to make travel simple, affordable, and convenient, with a primary focus on major cities like Chennai, Coimbatore, Madurai, Tirunelveli (Nellai), and Trichy.",
    Link: "https://kanikatravels.com/",
    Image: kanikaLogo,
    containImage: true,
    containerBg: 'bg-black'
  }
];

// Static certificate data
const staticCertificates = [
  {
    Title: "Full Stack Web Development",
    Issuer: "Rare Minds",
    Date: "April 2025",
    Image: fullStackImg,
    CredentialLink: "https://www.linkedin.com/in/arun-vignesh-v-ab4545328/details/certifications/1744177098980/single-media-viewer/?type=IMAGE&profileId=ACoAAFKpZ-gBAeoLDApgiBr2NWSFj2u83vntGL8"
  },
  {
    Title: "PCAP: Programming Essentials in Python",
    Issuer: "Udemy",
    Date: "June 2024",
    Image: pcapUdemyImg,
    CredentialLink: "https://udemy-certificate.s3.amazonaws.com/image/UC-8b81c966-8c1e-409e-bf77-b876fc782935.jpg"
  },
  {
    Title: "Corizo Internship - Android App Development",
    Issuer: "Corizo",
    Date: "March 2025",
    Image: corizoInternImg,
    CredentialLink: "https://cert.diceid.com/cid/FXskkVwGxq"
  },
  {
    Title: "Corizo Course - Android App Development",
    Issuer: "Corizo",
    Date: "Februaru 2025",
    Image: corizoAndroidImg,
    CredentialLink: "https://cert.diceid.com/cid/O5RIq9K0U9"
  },
  {
    Title: "Python Essentials - OpenEDG",
    Issuer: "OpenEDG",
    Date: "June 2023",
    Image: pythonOpenedgImg,
    CredentialLink: "https://verify.openedg.org/?id=00WD.oBa1.vwGz"
  },
  {
    Title: "Novitech Course Completion",
    Issuer: "Novitech",
    Date: "May 2024",
    Image: novitechCourseImg,
    CredentialLink: "https://www.linkedin.com/in/arun-vignesh-v-ab4545328/details/certifications/381465058/multiple-media-viewer/?profileId=ACoAAFKpZ-gBAeoLDApgiBr2NWSFj2u83vntGL8&treasuryMediaId=1733400769903"
  },
  {
    Title: "Novitech Internship",
    Issuer: "Novitech",
    Date: "May 2024",
    Image: novitechInternImg,
    CredentialLink: "https://www.linkedin.com/in/arun-vignesh-v-ab4545328/details/certifications/381465058/multiple-media-viewer/?profileId=ACoAAFKpZ-gBAeoLDApgiBr2NWSFj2u83vntGL8&treasuryMediaId=1733400769904"
  }
];

export default function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (swiper) {
      swiper.slideTo(newValue);
    }
  };

  const handleSwiperChange = (swiper) => {
    setValue(swiper.activeIndex);
  };

  const toggleShowMore = (type) => {
    if (type === 'certificates') {
      setShowAllCertificates(prev => !prev);
    }
  };

  const displayedCertificates = showAllCertificates ? staticCertificates : staticCertificates.slice(0, initialItems);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" id="Portofolio">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-6">
          My <span className="text-[#a855f7]">Portfolio</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mb-8 sm:mb-12">
          Explore my projects and certifications that showcase my skills and experience in web development.
        </p>
      </div>

      <Box sx={{ bgcolor: "transparent" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#a855f7",
              },
              "& .MuiTab-root": {
                color: "white",
                "&.Mui-selected": {
                  color: "#a855f7",
                },
              },
            }}
          >
            <Tab
              icon={<Code className="w-5 h-5" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="w-5 h-5" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="w-5 h-5" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={handleSwiperChange}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={true}
          className="w-full"
        >
          <SwiperSlide>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                  {staticProjects.map((project, index) => (
                    <div
                      key={index}
                      data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                      data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                    >
                      <StaticProjectCard
                        Title={project.Title}
                        Description={project.Description}
                        Link={project.Link}
                        Image={project.Image}
                        containImage={project.containImage}
                        containerBg={project.containerBg}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </SwiperSlide>
          <SwiperSlide>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {displayedCertificates.map((certificate, index) => (
                    <div
                      key={index}
                      data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                      data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                    >
                      <Certificate
                        Title={certificate.Title}
                        Issuer={certificate.Issuer}
                        Date={certificate.Date}
                        Image={certificate.Image}
                        CredentialLink={certificate.CredentialLink}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            </TabPanel>
          </SwiperSlide>
          <SwiperSlide>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                  {techStacks.map((tech, index) => (
                    <div
                      key={index}
                      data-aos={index % 6 === 0 ? "fade-up-right" : index % 6 === 1 ? "fade-up" : index % 6 === 2 ? "fade-up-left" : index % 6 === 3 ? "fade-up-right" : index % 6 === 4 ? "fade-up" : "fade-up-left"}
                      data-aos-duration={index % 6 === 0 ? "1000" : index % 6 === 1 ? "1200" : index % 6 === 2 ? "1000" : index % 6 === 3 ? "1200" : index % 6 === 4 ? "1000" : "1200"}
                    >
                      <TechStackIcon
                        TechStackIcon={tech.TechStackIcon}
                        Language={tech.Language}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
}