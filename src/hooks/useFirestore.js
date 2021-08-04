import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
    const [doc, setDoc] = useState([]);
    useEffect(() => {
        const unsub = projectFirestore().collection(collection)
        .ordeBy("createdAt", "desc")
        .onSnapshot(snapshot => {
            let documents = [];
            snapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDoc(documents);
        });
        return () => unsub();
    }, [collection]);
    return{docs};
}