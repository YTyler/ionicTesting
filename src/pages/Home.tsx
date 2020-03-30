import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonItemSliding, IonAvatar, IonLabel, IonItemOptions, IonItemOption, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import './Home.css';
import { star } from 'ionicons/icons'

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
    desc: 'The Last Jedi'
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
          <IonItemSliding key={e.name}>
            <IonItem>
            <IonAvatar>
              <img src={`https://ionicframework.com/docs/demos/api/list/avatar-${e.name.toLowerCase()}.png`} alt={e.name} />
            </IonAvatar>
            <IonLabel className="ion-padding">
              <h2>{e.name}</h2>
              <p>{e.desc}</p>
            </IonLabel>
          </IonItem>
          <IonButton expand='full' color='primary'>
            <IonIcon slot='start' icon={star}></IonIcon>
            Select
          </IonButton>
          <IonItemOptions side="end">
            <IonItemOption>Hello</IonItemOption>
            <IonItemOption>Goodbye</IonItemOption>
          </IonItemOptions>
          </IonItemSliding>
          ))}
          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
