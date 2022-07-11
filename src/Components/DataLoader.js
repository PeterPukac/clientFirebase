import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataViewer from './DataViewer'
import { onSnapshot, } from 'firebase/firestore'
import { useLocation } from 'react-router-dom'
import { deleteDoc, doc, updateDoc,getDocs,query,where } from 'firebase/firestore'
import { uploadBytes, ref } from 'firebase/storage'

function DataLoader(props) {
    const { isLoggedIn } = props
    const { db } = props
    const { acounts } = props
    const { storage } = props
    const [data, setData] = useState([])
    const  {group}  = useParams()
    const location = useLocation()

    useEffect(() => {
        const accountList = onSnapshot(acounts, snapshot => {
            setData(snapshot.docs.map(doc => ({id: doc.id,  ...doc.data() })))
        })
        return() =>accountList()
        
    },[])
    return (
        isLoggedIn ? <DataViewer data={data} group={group} db={db} storage={storage}/>
            :
            <div className="text-center"><a className="info" href={`/login${location.pathname}`}>Je potrebné prihlásenie KLIK TU!</a></div>
    );
}
export default DataLoader;