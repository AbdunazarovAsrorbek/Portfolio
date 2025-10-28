import About from "../about/About";
import Introduce from "../introduce/Introduce";
import Resume from "../resume/Resume";
import Services from "../services/Services";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";


export default function CenterSidebar() {
  return (
    <div className='centerSidebar'>
      <Introduce />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  )
}
