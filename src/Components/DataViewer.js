import { deleteDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { useState} from 'react'
import { uploadBytes, ref, getDownloadURL,listAll } from 'firebase/storage'
function DataViewer(props) {
    const { data } = props
    const { group } = props
    const { db } = props
    const { storage } = props
    const [image, setImage] = useState(null)
    const [id, setId] = useState(null)

    const getFilteredByGroup = (data) => {
        let helpFilteredArrayAccounts = [];
        for (let account of data) {
            if (account.group === group) {
                helpFilteredArrayAccounts.push(account);
            }
        }
        return helpFilteredArrayAccounts;
    }

    const deleteAcount = (id) => {
        const docRef = doc(db, 'acounts', id)
        deleteDoc(docRef).catch(error => console.log(error.message))
    }
    
    const updateImages = () =>{
        if(id !== null){
            const pictures = ref(storage, `spravcaHesiel/${id}`)
            listAll(pictures)
                .then(async (res) => {
                    const { items } = res
                    await Promise.all(items.map((item) => getDownloadURL(item)))
                        .then(async (urls) => {
                            const docRef = doc(db, 'acounts', id)
                            await updateDoc(docRef, { images: urls })
                        })
                })
                .catch((error) => {
                    console.log(error)
                })      
        }
    }

    const uploadImage = async (e) => {
        e.preventDefault()
        if (image === null || image === undefined) {
            alert("Nezvolili ste subor")

        } else {
            //vlozenie na storage
            const fileRef = ref(storage, `spravcaHesiel/${id}/${image.name}`)
            uploadBytes(fileRef, image).then(updateImages).then(e.target.reset)
        }
    }
    const filteredAccountArray = getFilteredByGroup(data)
    console.log(storage)
    return (
        filteredAccountArray.length > 0 ?
            <div className="dataViewer">
                <h1 className="headingTable">Toto sú heslá zamestnancov skupiny: {group}</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Popis</th>
                                        <th scope="col">Login</th>
                                        <th scope="col">Heslo</th>
                                        <th scope="col">Vymazat</th>
                                        <th scope="col">Obrazky</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAccountArray.map(account => {
                                        return (
                                            <tr key={account.id}>
                                                <td>{account.text}</td>
                                                <td >{account.name}</td>
                                                <td>{account.password}</td>
                                                <td><button onClick={() => deleteAcount(account.id)}>Vymazat</button></td>
                                                <td>
                                                    {account.images.map(item => {
                                                        return (
                                                            <img className='imgInTable' src={item} alt="not found"></img>
                                                        )
                                                    })}
                                                    <form onSubmit={uploadImage} className="d-flex">
                                                        <input type="file" className="form-control" onChange={(e) => { setImage(e.target.files[0]);setId(account.id)}} />
                                                        <button className="btn btn-danger" type="submit">Pridaj_obrazok</button>
                                                    </form>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            :
            null
    );
}
export default DataViewer;