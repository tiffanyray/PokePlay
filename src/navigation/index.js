import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabs} from "@ionic/react";
import {Route} from "react-router-dom";
import {homeOutline, logoOctocat} from "ionicons/icons";
import {IonReactRouter} from "@ionic/react-router";
import {Home} from "../pages/Home";
import {Poke} from "../pages/Poke";
import * as PropTypes from "prop-types";

export const pages = {
    home: {
        title: "Home",
        route: "/",
        url: "/",
        iosIcon: homeOutline,
        mdIcon: homeOutline
    },
    poke: {
        title: "Poke",
        url: "/poke/",
        route: "/poke/:name",
        isoIcon: logoOctocat,
        mdIcon: logoOctocat
    }
} 

export const getPagesArray = () => {
    let array = [];
    for (const [key, value] of Object.entries(pages)) {
        array.push(value);
    }
    return array;
}

export const getPage = (pageUrl) => {
    let toSearch = getPagesArray();
    return toSearch.find(x => x.route === pageUrl);
}

function IonTabButton(props) {
    return null;
}

IonTabButton.propTypes = {
    tab: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node
};
export const Navigation = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path={`${pages.home.route}`}>
                        <Home />
                    </Route>
                    <Route path={`${pages.poke.route}`}>
                        <Poke/>
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton href="/">
                        <IonIcon icon={pages.home.iosIcon} />
                        <IonLabel>HOME</IonLabel>
                    </IonTabButton>
                    <IonTabButton href={pages.poke.url}>
                        <IonIcon icon={pages.poke.isoIcon} />
                        <IonLabel>{pages.poke.title}</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
}