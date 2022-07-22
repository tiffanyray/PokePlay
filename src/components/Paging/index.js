import React from "react";
import {IonButton, IonFooter, IonIcon} from "@ionic/react";
import {chevronBackOutline, chevronForwardOutline} from "ionicons/icons";

export const Paging = ({ page, pageCount, setPage }) => {
    
    return <IonFooter>
        {/*<IonButton color="light"><IonIcon icon={chevronBackOutline}></IonIcon></IonButton>*/}
        <IonButton color="light" fill="outline" onClick={() => setPage(0)}>1</IonButton>
        <IonButton color="light" onClick={() => setPage(1)}>2</IonButton>
        <IonButton color="light" onClick={() => setPage(2)}>3</IonButton>
        <IonButton color="light" onClick={() => setPage(3)}>4</IonButton>
        <IonButton color="light" onClick={() => setPage(4)}>5</IonButton>
        <IonButton color="light" onClick={() => setPage(5)}>6</IonButton>
        {/*<IonButton color="light"><IonIcon icon={chevronForwardOutline}></IonIcon></IonButton>*/}
    </IonFooter>
}