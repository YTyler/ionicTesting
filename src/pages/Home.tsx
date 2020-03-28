import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel } from '@ionic/react';
import React from 'react';
import './Home.css';

const arr = [
  {
    name: 'Finn',
    desc: 'Ex-Imperial Storm Trooper'
  },
  {
    name: 'Han',
    desc: 'I shot first'
  },
  {
    name: 'Luke',
    desc: 'Get me out of this desert'
  }
]

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Testing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {arr.map((e) => (
          <IonItem key={e.name}>
            <IonAvatar>
              <img src={`https://ionicframework.com/docs/demos/api/list/avatar-${e.name.toLowerCase()}.png`} alt={e.name} />
            </IonAvatar>
            <IonLabel>{e.desc}</IonLabel>
          </IonItem>
          ))}
          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
