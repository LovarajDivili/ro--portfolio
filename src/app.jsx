import Header from "./components/header/header";
import Intro from "./components/Intro/intro";
import Project from './components/projects/project'
import SelfIntro from './components/selfIntro/selfIntro'
import SkillSet from './components/skillSet/skillSet'
import Expireance from './components/expireance/expireance'
import Packages from './components/packages/packages'
import Contact from './components/contact/contact'

import UserData from './userData/data'
import { useEffect } from "react";

const WebContent = () => {

  useEffect(() => {
    document.title = UserData.name + ' ' + UserData.initial

    function addtitleicon() {
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = UserData.photo;
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    addtitleicon();

  })
  return (
    <div className="project-main">
      <Header UserData={UserData} />
      <Intro UserData={UserData} />
      <Project UserData={UserData} />
      <SelfIntro UserData={UserData} />
      <Expireance UserData={UserData} />
      <SkillSet UserData={UserData} />

      <Packages UserData={UserData} />
      <Contact UserData={UserData} />
    </div>
  );
}
export default WebContent;
