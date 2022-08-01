import images from "../assets/images";
import Thesis from "../../screens/experiences/thesis/Thesis";
import Cci from "../../screens/experiences/cci/Cci";
import Coexya from "../../screens/experiences/coexya/Coexya";

export const itemsEvent = [
        {
            id: 1,
            name: 'Thèse de doctorat',
            job: 'Chercheur sur les multi-risques littoraux à falaise en contexte de changement global',
            image: images.letg,
            path: '/thesis',
            Component: Thesis
        },
        {   
            id: 2,
            name:  "Chambre du commerce et de l'industrie",
            job: "Chef de projet SIG",
            image: images.cci,
            path: '/cci-idf',
            Component: Cci
        },
        {
            id: 3,
            name: 'Coexya',
            job: 'Architecte et développeur SIG',
            image: images.coexya,
            path: '/coexya',
            Component: Coexya
        }
];