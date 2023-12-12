import {
  useEffect,
  useState,
} from 'react';

export function useCardInfo({id}:{id:number}) {
    const [card, setCard] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:8083/card/${id}`)
        .then(response => response.json())
        .then(json => setCard(json))
        .catch(error => console.error(error));
    }, [id]);
  
    return card;   
}
