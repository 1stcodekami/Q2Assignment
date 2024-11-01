
// Quarter-2 Class-2 Assignment:
// Create two new components in a Next.js application: Header and About. Then, import them
// into the homepage Ul. Additionally, review the files and folder structure of Next.js in detail.


import About from "../../components/About";
import Header from "../../components/Header";

export default Home;
function Home() {
  return (
    <div>
      <Header/>
      <About/>
    </div>
  );
}

/*
In a Next.js project, the folder structure is organized to streamline routing, component management, styling, and static assets:

components/: Stores reusable React components (e.g., Header.tsx, About.tsx), used across different pages.

pages/: Each file becomes a route automatically, such as page.tsx for the homepage and any additional pages.

package.json: Defines dependencies and scripts for the project.
This structure keeps the project modular and organized, especially as it grows.*/