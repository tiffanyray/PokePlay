import {
  IonApp,
  setupIonicReact
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {Navigation} from "./navigation";
import {useEffect} from "react";
import {createStore, get, set} from "./data/ionicStorage";
import {agent} from "./api";

setupIonicReact();

const App = () => {
    useEffect(() => {

        const setupStore = async () => {

            await createStore("TiffsDB");
            const exists = await get("pokemon");

            if (!exists) {
                agent.pokemon.list(2000)
                    .then((response) => {
                        set("pokemon", response.results);
                    });
            }
        }

        setupStore();
    }, []);
  return <IonApp>
    <Navigation />
  </IonApp>
};

export default App;
