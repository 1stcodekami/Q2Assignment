/*Quarter-2 Class-3 Assignment:
Create four route pages: Navbar, About, Contact, and Footer.Link all components together using the 'Link' component.
Add navigation for all routes using buttons and useRouter.Study Parent and Child components, and learn how to pass data through props.
Read about routing in Next.js*/

// pages/index.js
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="m-5">Home Page</h1>
      <Footer />
    </div>
  );
};

export default Home;
