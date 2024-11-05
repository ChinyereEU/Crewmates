import './App.css';
import React, {useState} from 'react';
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SidePane from './components/SidePane';
import AddDesigner from './pages/AddDesigner';
import DesignerGallery from './pages/AddDesigner';


const App = () => {
 
  // const designers = [
  //   { 'id': '1', 'title': 'Design Your Life', 'author': 'Harvey Milian', 'description': descr },
  //   { 'id': '2', 'title': 'Love Lock in Paris 🔒', 'author': 'Beauford Delaney', 'description': descr },
  //   { 'id': '3', 'title': 'Wear Pink on Fridays 🎀', 'author': 'Onika Tonya', 'description': descr },
  //   { 'id': '4', 'title': 'Adopt a Dog 🐶', 'author': 'Denise Michelle', 'description': descr },
  // ];

  const [designers, setDesigners] = useState([
    { 'id': '1', 'name': 'Harvey Milian', 'style': 'Modern', 'bio_summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { 'id': '2', 'name': 'Beauford Delaney', 'style': 'Classic', 'bio_summary': 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { 'id': '3', 'name': 'Onika Tonya', 'style': 'Avant-garde', 'bio_summary': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { 'id': '4', 'name': 'Denise Michelle', 'style': 'Bohemian', 'bio_summary': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  ]);

  const addDesigner = (designer) => {
    setDesigners([...designers, designer]);
  };

  // Sets up routes
  let element = useRoutes([
    {
      path: "/add-designer",
      element: <AddDesigner addDesigner={addDesigner} />
    },
    {
      path: "/designer-gallery",
      element: <DesignerGallery designers={designers} />
    }
  ]);

  return (

    // <div className="app-container">
      <div className="App">
      <SidePane className="sidepane" />
        <div className="header">
          <h1>Project👗👠👒👔👟🕶️Runway</h1>
          <h4>Hey designer! Here you get to add new designers like yourself who you believe are up to the task 👇🏾</h4>
          <Link to="/"><button className="headerBtn"> Explore Designers 🔍  </button></Link>
          <Link to="/new"><button className="headerBtn"> Add a Designer 👢 </button></Link>
        </div>
          {element}
      </div>
    // </div>
  );
};

export default App;
