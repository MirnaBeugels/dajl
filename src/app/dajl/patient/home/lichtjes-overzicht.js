'use client'

import { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy, getDocs } from 'firebase/firestore';
import db from '../../../firestore';
import styles from '../../../styles.module.css';

const LightsOverview = () => {
  const patient = "qggrVblFaQbcpslyTPRdU2cSBHy1";
  const [lightsDataArray, setLightsDataArray] = useState([]);

  useEffect(() => {
    let unsubscribed = false;

    const lightsCollectionRef = collection(db, `users/${patient}/lamps/${patient}/lights`);
    const lightsQuery = query(lightsCollectionRef, orderBy('date', 'desc')); // Order by date in descending order

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(lightsQuery);
        if (unsubscribed) return;

        const newLightsDataArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          readabletime: doc.data().date.toDate().toLocaleString("nl-NL", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          }),
        }));

        setLightsDataArray(newLightsDataArray);
        console.log(newLightsDataArray);
      } catch (error) {
        if (unsubscribed) return;
        console.error("Failed to retrieve data", error);
      }
    };

    fetchData();

    return () => (unsubscribed = true);
  }, []);

  return (
    <div className={styles.lightsOverviewContainer}>
      {lightsDataArray.map((lightsData) => (
        <div className={styles.lightSignal} key={lightsData.id}>
          <div className={styles.lightName}>{lightsData.name}: </div>
          <div className={styles.lightDate}>{lightsData.readabletime}</div>
        </div>
      ))}
    </div>
  );
};

export default LightsOverview;