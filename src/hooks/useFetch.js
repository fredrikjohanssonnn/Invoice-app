import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
            .then(res => {
                if(!res.ok){
                    throw Error('Could not retrieve current invoices. Please refresh the page');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(err => {
                setError(err.message);
            })
    }, [url]);

    return { data, error };
}

export default useFetch;
