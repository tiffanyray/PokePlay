import { IonContent, IonPage } from '@ionic/react';
import {Header} from "../../components/Header";
import {useRouteMatch} from "react-router";
import {useEffect} from "react";

export const Poke = () => {
    let routeMatch = useRouteMatch();

    useEffect(() => {
        console.log("fetch new poke")
    }, [routeMatch]);
    return (
        <IonPage>
            <Header/>
            <IonContent fullscreen>
                <p>What up</p>
            </IonContent>
        </IonPage>
    );
};