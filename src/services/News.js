import firebaseConfig from "firebase.config";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const insertNew = async (title, body, images) => {
    try {
        const newsDocRef = await addDoc(collection(db, "news"), {
            title: title,
            body: body,
            createdAt: serverTimestamp(),
        });

        const newsId = newsDocRef.id;

        const imageUrls = await Promise.all(
            images.map(async (image) => {
                const storageRef = ref(storage, `news-images/${newsId}/${image.name}`);
                const snapshot = await uploadBytes(storageRef, image);
                return await getDownloadURL(snapshot.ref);
            })
        );

        await updateDoc(newsDocRef, {
            images: imageUrls
        });

        alert('Noticia agregada exitosamente');
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export const getAllNews = async () => {
    // Simulamos un retraso de 3 segundos
    await new Promise(resolve => setTimeout(resolve, 700));
    
    const querySnapshot = await getDocs(collection(db, "news"));
    const newsData = querySnapshot.docs.map(doc => doc.data());
    return newsData;
};