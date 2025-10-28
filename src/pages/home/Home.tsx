import { useState, useEffect } from "react";
import Particles from "../../components/Particles";
import CenterSidebar from "../../components/centerSidebar/CenterSidebar";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import { OrbitProgress } from "react-loading-indicators";
import Toggle from "../../components/toggle/Toggle";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="home__loading">
        <OrbitProgress
          color="#FFF"
          size="large"
        />
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home__particles">
        <Particles />
      </div>

      <Toggle />

      <div className="home__content">
        <div className="container">
          <div className="home__main">
            <div className="home__main-left">
              <LeftSidebar />
            </div>

            <div className="home__main-center">
              <CenterSidebar />
            </div>

            <div className="home__main-right">
                <RightSidebar />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
