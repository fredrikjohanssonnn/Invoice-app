import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
            })
    }, [url]);

    return { data, error, isLoading };
}

export default useFetch;
