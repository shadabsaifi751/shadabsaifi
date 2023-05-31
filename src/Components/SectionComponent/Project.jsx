import React from "react";
import Project1 from "../../Accects/Images/project1.png";
import Project2 from "../../Accects/Images/project2.png";
import Project3 from "../../Accects/Images/project3.png";
import Project4 from "../../Accects/Images/project4.png";
import Project5 from "../../Accects/Images/project5.png";
import ProjectSection from "../Common/ProjectComponent";

const Project = () => {
  return (
    <section id="work" className="pb-10 pt-10 md:pb-10 md:pt-20 overflow-hidden">
      <div className="container mx-auto px-8 lg:px-32 ">
        <ProjectSection
          title="Featured Project"
          projectName="Webneed Project"
          discription="Webneed is a web hosting and domain registration service provider that offers affordable and reliable solutions for individuals and businesses. They provide various hosting plans and domain extensions to choose from, along with 24/7 customer support."
          image={Project1}
          url="https://webneed.com/"
          technology={["React.js","Next.js","styled-components","Html","Scss","Redux"]}
        />
        <ProjectSection
          title="Featured Project"
          projectName="Edneed Project"
          discription="Edneed.com is an online platform that provides educational resources and services to students, parents, and educators, including tutoring, test preparation, college application assistance, and more."
          image={Project2}
          url="https://edneed.com/"
          LayoutChange={true}
          technology={["React.js","styled-components","Html","Scss","Javascript","Redux"]}
        />
        <ProjectSection
          title="Featured Project"
          projectName="Sheetal Sharma makeover"
          discription="Hairoffers.in appears to be an Indian website that offers deals and discounts on hair care products and services."
          image={Project3}
          url="https://hairoffers.in/"
          technology={["Html","Scss","Bootstrap","Javascript","Php","jQuery","Slick","FancyBox"]}
        />
        <ProjectSection
          title="Featured Project"
          projectName="Printable Calendar"
          discription="Printablecalendar-template.com is a website that offers a wide variety of customizable printable calendar templates that you can download and print for free."
          image={Project4}
          url="https://printablecalendar-template.com/"
          LayoutChange={true}
          technology={["React.js","Reactstrap","Html","Scss","Javascript"]}
        />
        <ProjectSection
          title="Featured Project"
          projectName="Image convetor"
          discription="Convert each image into a PDF or extract all images contained in a PDF."
          image={Project5}
          url="https://ilovepdf.co.uk/"
          technology={["Vue.js","Tailwind Css","Html","Scss","Javascript"]}
        />
      </div>
    </section>
  );
};

export default Project;
