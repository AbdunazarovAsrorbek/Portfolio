import { useEffect } from "react";

export default function useActiveSection(): void {
  useEffect(() => {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll("[id]");

    const setActiveLink = (id: string) => {
      const sidebarLinks = document.querySelectorAll<HTMLAnchorElement>(".sidebar-link");
      sidebarLinks.forEach((el) => el.classList.remove("active"));
      const activeLink = document.querySelector<HTMLAnchorElement>(
        `.sidebar-link[href="#${id}"]`
      );
      activeLink?.classList.add("active");
    };

    const checkInitialSection = () => {
      let currentId = "Home"; 
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
          currentId = section.id;
          break;
        }
      }
      setActiveLink(currentId);
    };

    checkInitialSection(); 

    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.4,
      rootMargin: "0px 0px -40% 0px",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
            if (window.history.pushState) {
              window.history.pushState(null, "", `#${entry.target.id}`);
            } else {
              window.location.hash = entry.target.id;
            }
          }
        }
      },
      options
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("load", checkInitialSection);
    window.addEventListener("scroll", checkInitialSection);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("load", checkInitialSection);
      window.removeEventListener("scroll", checkInitialSection);
    };
  }, []);
}
