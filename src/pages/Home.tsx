import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header Toolbar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {Array(10).fill(NaN).map((_, i) => (
          <IonItem key={i}>
            <IonText>List Item {i}</IonText>
          </IonItem>
          ))}
          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
