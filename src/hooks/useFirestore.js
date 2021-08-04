import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDoc] = useState([]);
    useEffect(() => {
        const unsub = projectFirestore().collection(collection)
        .ordeBy("createAt", "desc")
        .onSnapshot(snap => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDoc(documents);
        });
        return () => unsub();
    }, [collection]);
    return{docs};
}
export default useFirestore;