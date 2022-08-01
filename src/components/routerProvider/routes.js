import Home from "../screens/home/Home";
import Thesis from '../screens/experiences/thesis/Thesis';
import Cci from '../screens/experiences/cci/Cci';
import Coexya from '../screens/experiences/coexya/Coexya';

import Parcours from "../screens/parcours/Parcours";
import ContactMeForm from "../screens/contact/ContactMe";

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/thesis",
    component: <Thesis />,
  },
  {
    path: "/cci-idf",
    component: <Cci />,
  },
  {
    path: "/coexya",
    component: <Coexya />,
  },
  { 
    path: "/parcours",
    component: <Parcours />
  },
  {
    path: "/contact",
    component: <ContactMeForm />
  },
  { 
    path: "*", component: <Home /> 
  }
];

export default routes;