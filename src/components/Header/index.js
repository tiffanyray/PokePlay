import {IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import {useEffect, useState} from "react";
import {useRouteMatch} from "react-router";
import {getPage} from "../../navigation";

export const Header = () => {
    let routeMatch = useRouteMatch();
    const [page, setPage] = useState({});
    useEffect(() => {
        let newPage = getPage(routeMatch.path);
        setPage(newPage);
    }, [routeMatch]);
    
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>{page?.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};