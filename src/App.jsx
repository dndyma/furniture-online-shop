import Aboutpage from "./Aboutpage";
import Contactpage from "./Contactpage";
import Footer from "./Footer";
import Homepage from "./Homepage";
import "./index.css";
import Navbar from "./Navbar";
import Shoppage from "./Shoppage";
function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Shoppage />
      <Aboutpage />
      <Contactpage />
      <Footer />
    </div>
  );
}

export default App;
