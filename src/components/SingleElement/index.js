import React from "react"
import {IonCard, IonCardHeader, IonCardTitle, IonCol, IonItem, IonLabel} from "@ionic/react";

export const SingleElement = ({ header, value, hasColumn = false, colSize }) => {
    let card = <IonCard>
        <IonCardHeader>
            <IonCardTitle>
                {header}
            </IonCardTitle>
            <IonItem>
                <IonLabel>
                    <p>{value}</p>
                </IonLabel>
            </IonItem>
        </IonCardHeader>
    </IonCard>
    return hasColumn ? (<IonCol col={colSize}>
        {card}
    </IonCol>) : (card);
}