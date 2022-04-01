import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataViewer from './DataViewer';
function DataLoader() {
    const [data, setData] = useState([]);
    const {group} = useParams();


    useEffect(()  => {
        fetch("/accounts/")
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
    }, []);

    
    return (
        <div className="dataLoader">
            {data && <DataViewer data = {data} group={group}/>}
        </div>
    );
}
export default DataLoader;