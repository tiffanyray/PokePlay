import { IonContent, IonPage } from '@ionic/react';
import {Header} from "../../components/Header";
import {useRouteMatch} from "react-router";
import {PokemonDetails} from "../../components/PokemonDetails";

export const Poke = () => {
    let routeMatch = useRouteMatch();
    
    return (
        <IonPage>
            <Header/>
            <IonContent fullscreen>
                <PokemonDetails name={routeMatch.params.name}/>
            </IonContent>
        </IonPage>
    );
};