import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Ian Carvalho Lima" />
      
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="src\img\New CV.pdf" download="Ian Carvalho Lima - CV" className="btn">
        Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
