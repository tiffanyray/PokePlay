import react, {useEffect} from "react";
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonRouterLink} from "@ionic/react";
import {pages} from "../../navigation";

export const PokemonOverviewCard = ({ name }) => {
    
    // Decide if I want to display any other information.
    // useEffect(() => {
    //    
    // }, [name]);
    
    return <IonCard>
        <IonRouterLink routerLink={pages.poke.url + name}>
            <IonCardHeader>
                <IonCardTitle>{name}</IonCardTitle>
            </IonCardHeader>
        </IonRouterLink>
    </IonCard>
}