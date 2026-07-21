import Home from './pages/home/Home';
import "./sass/style.scss"
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import { useEffect } from "react";
import { sendVisitor } from "./utils/sendVisitor";

export default function App() {
  useEffect(() => {
    sendVisitor();
  }, []);

  return (
    <div>
      <Home />
    </div>
  )
}
