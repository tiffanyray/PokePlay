import {IonCol, IonContent, IonGrid, IonPage, IonRow, useIonViewWillEnter} from '@ionic/react';
import {Header} from "../../components/Header";
import {useEffect, useState} from "react";
import {Paging} from "../../components/Paging";
import {agent} from "../../api";
import {PokemonOverviewCard} from "../../components/PokemonOverviewCard";
import { get, set } from "../../data/ionicStorage";

export const Home = () => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(25);
    const [pokemon, setPokemon] = useState([]);
    
    useIonViewWillEnter(async () => {
       const exists = await get("pokemon"); 
       
       if (!exists) {
           agent.pokemon.list(2000, 0)
               .then((response) => {
                   setPokemon(response.results);
                   set("pokemon", response.results);
               });
       } else {
           console.log("these pokemon already exist!");
           setPokemon(exists);
       }
    });
    
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid>
                    <IonRow>
                    {pokemon.length > 0 && pokemon.slice(page * pageSize, (page + 1) * pageSize).map((poke, index) => {
                        return <IonCol size={3} key={index}><PokemonOverviewCard name={poke.name} /></IonCol>;
                    })}
                    </IonRow>
                </IonGrid>
            </IonContent>
            <Paging setPage={setPage} page={page} pageCount={pageSize} />
        </IonPage>
    );
};
