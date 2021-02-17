import React, { useState, useEffect } from "react";
import Aos from "aos";
import Project from "./SmallCardProjectTemplate";
import BigCardProjectTemplate from "./BigCardProjectTemplate";
import PendingProject from "./PendingProject";
import { logos } from "./images/logos.js";
import MuiPopup from "./MuiPopup";

let ProjectsSection = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  const [popupAlt, setPopupAlt] = useState("");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const closePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="projectsSection__mainContainer">
      <MuiPopup
        open={openPopup}
        closePopup={closePopup}
        img={popupImage}
        alt={popupAlt}
      />

      <div className="projectsSection__headingCont">
        <p id="scrollTo__projectsSection">h</p>
        <h3
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-easing="ease-out"
          className="projectsSection__heading"
        >
          <span className="number">03-</span> Some Noteworthy Work
        </h3>
        <div
          data-aos="fade"
          data-aos-duration="900"
          data-aos-delay="1100"
          className="projectsSection__frontLine"
        ></div>
      </div>
      <div className="react__projectsContainer">
        <h2
          className="projectsTagline reactProjects__tagline"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="700"
          data-aos-easing="ease-out"
        >
          Front-End-Development (React)
        </h2>

        <div className="reactProjects__secondRow">
          <PendingProject
            tagline="Virtual Assistant Application"
            logoSrc={logos.CVALogo}
            pendingProjectLogoClass="pendingProject__vaLogo"
            githubLink="https://github.com/codeByKamran/Company-virtual-assistant.git"
            liveLink="https://company-virtual-assis.netlify.app/"
            taglineSepcificClass="cvaTagline"
          />
        </div>

        <div className="reactProjects__firstRow">
          <BigCardProjectTemplate
            reactProjectSpecialClass="covid__projectContainer"
            reactProjectLogoSrc={logos.TrackerLogo}
            reactProjectLogoClass="covidLogo"
            project__githubLink="https://github.com/codeByKamran/COVID-19-Tracker.git"
            projectLink="https://kamran-covid19tracker.netlify.app"
            projectDescription="Built a fully functional COVID-19 Tracker with React using latest web  technologies like Material UI, React leaflet, ChartJs as main UI components. This specific Covid tracker finds its realtime database from 'disease.sh' using Live API calls. Also it uses Firebase as a database and Authentication functionalities."
            tech1="ReactJs"
            tech2="Material UI"
            tech3="Leaflet"
            tech4="ChartJs"
            needExternalLink
            gitHubIconSpecialClass="covidProject__github"
          />

          <BigCardProjectTemplate
            reactProjectSpecialClass="covid__projectContainer"
            reactProjectLogoSrc={logos.AmazonLogo}
            reactProjectLogoClass="amazonLogo"
            project__githubLink="https://github.com/codeByKamran/Fullstack-Amazon-Demo.git"
            projectLink="https://kamran-amazondemo.netlify.app"
            projectDescription="I have recently completed Amazon Demo Clone build with React, with full eCommerce functionalities like add & remove to Cart, add address, Checkout Payment via Stripe, add products, add categories and much more. This Amazon clone is using Firebase firestore as realtime Database to store user details, addresses, order stats etc."
            tech1="ReactJs"
            tech2="Stripe"
            tech3="Material UI"
            tech4="Firebase"
            needExternalLink
            needCloneText
            logoRightText="Clone"
          />
        </div>

        <div className="reactProjects__secondRow">
          <BigCardProjectTemplate
            reactProjectSpecialClass="googleClone__projectContainer"
            reactProjectLogoSrc={logos.GoogleLogo}
            reactProjectLogoClass="googleLogo"
            logoRightText="Clone"
            project__githubLink="https://github.com/codeByKamran/Google-portfolio-clone.git"
            projectLink="https://google-portfolio-clone.netlify.app"
            projectDescription="Built a fully functional Google Clone with React finding its real-time database from the original Google server. This clone is full of functinalites including React Router, React Hooks and React Context API. Material UI is serving as a design library. This clone is super responsive fit for every device size."
            tech1="ReactJs"
            tech2="Material UI"
            tech3="JavaScript"
            tech4="SASS"
            needCloneText
            needExternalLink
          />
          <BigCardProjectTemplate
            reactProjectSpecialClass="netflixClone__projectContainer"
            reactProjectLogoSrc={logos.NetflixLogo}
            reactProjectLogoClass="netflixLogo"
            logoRightText="Clone"
            project__githubLink="https://github.com/codeByKamran/Netflix-portfolio-clone.git"
            projectLink="https://netflix-portfolio-clone.netlify.app"
            cloneText__specific="netflixText"
            projectDescription="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and more on thousands of internet-connected devices. I decided to build it with react and used tmdb as realtime movie database. It fetch movies from tmdb and trailers when clicked from youtube with a special 'youtube-trailer' functionality. "
            tech1="ReactJs"
            tech2="Material UI"
            tech3="JavaScript"
            tech4="SASS"
            needCloneText
            needExternalLink
          />
        </div>
        <div className="reactProjects__secondRow">
          <BigCardProjectTemplate
            reactProjectSpecialClass="persoanl__projectContainer"
            reactProjectLogoSrc={logos.MyLogo}
            reactProjectLogoClass="myLogo"
            project__githubLink="https://github.com/codeByKamran/personal-portfolio-website.git"
            projectDescription="This website is built with React with its descent UI. I have used CSS(SASS) for styling purposes. Making this website simple but expressive was my first priority. There is always room for improvement. Your contribution would be a great favour, if you want to. Link to Github Repo is attached."
            tech1="ReactJs"
            tech2="CSS(SASS)"
            tech3="JavaScript"
            tech4="AOS"
          />
        </div>
      </div>
      <div className="cmsDevelopment__projectsContainer">
        <h2
          className="projectsTagline wpProjects__tagline"
          className="projectsTagline reactProjects__tagline"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          Wordpress Development
        </h2>
        <div className="cmsDevelopment__firstRow">
          <Project
            Slider_opener_id="Aus-slider-opener"
            project_link="http://ausglobalgroup.com/"
            project_heading="Construction Comp."
            project_description="Redesigned the website to give a new look, fulfilling the modern criterias. AUSGlobal is a construction and investment company based in Perth(WA)."
            tech_1="Wordpress"
            tech_link_1="https://wordpress.org/"
            tech_2="Elementor Pro"
            tech_link_2="https://elementor.com/pro/"
            tech_3="Astra Pro"
            tech_link_3="https://wpastra.com/pro/"
            preview_popup_indiv_id="Preview_popup_aus"
            source_link_icon_unique_id="Aus_source_link_icon"
            source_popup_indiv_id="Source_popup_aus"
            have_Two_Seprators
            popupOpener={() => {
              setPopupImage("https://i.ibb.co/hgnt32W/auscom1.jpg");
              setPopupAlt("AUSGlobal-Landing-Page-Combined-Image");
              setOpenPopup(true);
              console.log("Worked", openPopup);
            }}
          />

          <Project
            Slider_opener_id="Mashriq-slider-opener"
            project_link="http://mashriqtv.pk/"
            project_heading="Mashriq T.V.."
            project_description="Mashriq T.V Peshawer is daily news reporting website built on Wordpress. This particular website is extensive application of Wordpress."
            tech_1="Wordpress"
            tech_link_1="https://wordpress.org/"
            tech_2="Elementor Pro"
            tech_link_2="https://elementor.com/pro/"
            tech_3="Urdu Paper"
            tech_link_3="https://stylothemes.com/shop/product/urdupress-premium-urdu-theme-for-wordpress/"
            preview_popup_indiv_id="Preview_popup_mashriq"
            source_link_icon_unique_id="Mashriq_source_link_icon"
            source_popup_indiv_id="Source_popup_mashriq"
            have_Two_Seprators
            popupOpener={() => {
              setPopupImage("https://i.ibb.co/yS3DGDJ/mashrikcom1.jpg");
              setPopupAlt("Mashrik-TV-Landing-Page-Combined-Image");
              setOpenPopup(true);
            }}
          />

          <Project
            Slider_opener_id="Virrgo-slider-opener"
            project_link="https://virrgotech.com/"
            project_heading="Digital Agency"
            project_description="Built a dynamic All-in-one website for Digital Marketing Agency based in Lahore (Pakistan). Website has eye-striking look; sufficient for leads."
            tech_1="Wordpress"
            tech_link_1="https://wordpress.org/"
            tech_2="Elementor Pro"
            tech_link_2="https://elementor.com/pro/"
            tech_3="2020"
            tech_link_3="https://wordpress.org/themes/twentytwenty/"
            preview_popup_indiv_id="Preview_popup_virrgo"
            source_link_icon_unique_id="Virrgo_source_link_icon"
            source_popup_indiv_id="Source_popup_virrgo"
            have_Two_Seprators
            popupOpener={() => {
              setPopupImage("https://i.ibb.co/SBFwYc4/virgocom1.jpg");
              setPopupAlt("Virrgo-Landing-Page-Combined-Image");
              setOpenPopup(true);
              console.log("Worked", openPopup);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
