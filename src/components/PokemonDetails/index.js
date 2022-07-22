import react, {useEffect, useState} from "react";
import {
    IonCard, IonCardHeader, IonCardTitle, IonCol,
    IonContent, IonGrid,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonLabel,
    IonList,
    IonNote,
    IonPage, IonRow,
    IonTitle
} from "@ionic/react";
import {agent} from "../../api";
import {SingleElement} from "../SingleElement";
import {List} from "../List/List";

export const PokemonDetails = ({name}) => {
    let [poke, setPoke] = useState({});
    console.log({...poke})
    useEffect(() => {
        agent.pokemon.one(name).then((response) => {
            setPoke(response);
        });
    }, []);
    return <IonContent>
        <IonGrid>
            <IonRow>
                <IonCol col={1}>
                    <SingleElement header="Base Experience" value={poke.base_experience}/>
                    <SingleElement header="Height" value={poke.height}/>
                    <SingleElement header="Weight" value={poke.weight}/>
                </IonCol>
                <IonCol col={3}>
                    <List col={3} header="Abilities" list={poke.abilities} childEl={(item, index) => {
                        return <IonItem key={index}>
                            <IonLabel>
                                <h3>{item?.name}</h3>
                                <p>Slot: {item?.slot}</p>
                                <p>Is Hidden: {item?.is_hidden}</p>
                            </IonLabel>
                        </IonItem>
                    }}/>
                    <List col={3} header="Stats" list={poke.stats} childEl={(item, index) => {
                        return <IonItem>
                            <IonLabel>
                                <h3>{item?.stat?.name}</h3>
                                <p>Base Stat: {item?.base_stat}</p>
                                <p>Effort: {item?.effort}</p>
                            </IonLabel>
                        </IonItem>
                    }}/>
                </IonCol>
                <List col={3} header="Moves" list={poke.moves} childEl={(item, index) => {
                    return <IonItem key={index}>
                        <IonLabel>
                            <h3>{item?.move?.name}</h3>
                            {item?.version_group_details?.slice(0, 2).map((detail, index2) => {
                                return <IonItem key={index2}>
                                    <IonLabel>
                                        <p>Level Learned At: {detail?.level_learned_at}</p>
                                        <p>Move Learn Method: {detail?.move_learn_method?.name}</p>
                                        <p>Version Group: {detail?.version_group?.name}</p>
                                    </IonLabel>
                                </IonItem>
                            })}
                            <IonItem>
                                <IonLabel>
                                    <p>Load more...</p>
                                </IonLabel>
                            </IonItem>
                        </IonLabel>
                    </IonItem>
                }}/>
            </IonRow>
        </IonGrid>
    </IonContent>
};