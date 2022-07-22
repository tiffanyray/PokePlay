import React, {useState} from "react";
import {IonCard, IonCardHeader, IonCardTitle, IonCol, IonItem, IonLabel} from "@ionic/react";

export const List = ({ header, list, childEl, hasColumn = false, colSize }) => {
    let [loadAll, setLoadAll] = useState(false);
    let [sliceNumber, setSliceNumber] = useState(3);
    
    const onLoadAll = () => {
        setLoadAll(true);
        setSliceNumber(list.length + 1);
    }
    
    const onCollapse = () => {
        setLoadAll(false);
        setSliceNumber(3);
    }
    let card = <IonCard>
        <IonCardHeader>
            <IonCardTitle>{header}</IonCardTitle>
        </IonCardHeader>
        {list?.length > 0 &&
        list.slice(0, sliceNumber).map((item, index) => {
            return childEl(item, index);
        })}
        {<IonItem>
            <IonLabel>
                {(!loadAll && list?.length > sliceNumber) ?
                    <h3 onClick={onLoadAll}>Load more...</h3> :
                    <h3 onClick={onCollapse}>Collapse...</h3>
                }
            </IonLabel>
        </IonItem>}
    </IonCard>
    
    return hasColumn ? (<IonCol col={colSize}>
        {card}
    </IonCol>) : (card);
}