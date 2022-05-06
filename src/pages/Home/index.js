import { IonContent, IonPage } from '@ionic/react';
import {Header} from "../../components/Header";

export const Home = () => {
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};
