import { db, storage } from "firebase.config";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";

export const insertNew = async (title, body, images) => {
    try {
        Swal.fire({
            title: 'Subiendo noticia...',
            text: 'Por favor, espera mientras se sube la noticia.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

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

        Swal.fire({
            icon: 'success',
            title: '¡Noticia añadida!',
        }).then(() => {
            window.location.href = '/noticias';
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "Error al añadir la noticia.",
        });
    }
};

export const getLatestNews = async (newsLimit) => {
    // Simulamos un retraso de 3 segundos
    await new Promise(resolve => setTimeout(resolve, 700));

    const newsRef = collection(db, "news");
    const newsQuery = newsLimit
        ? query(newsRef, orderBy("createdAt", "desc"), limit(newsLimit))
        : query(newsRef, orderBy("createdAt", "desc"));

    const querySnapshot = await getDocs(newsQuery);
    const newsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return newsData;
}

export const getNewById = async (id) => {
    const newsRef = doc(db, 'news', id);
    const docSnap = await getDoc(newsRef);

    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            ...docSnap.data()
        };
    } else {
        throw new Error('No such document!');
    }
};

export const deleteNews = async (newsId) => {
    const newsRef = doc(db, 'news', newsId);

    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'No, cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await deleteDoc(newsRef);
                Swal.fire({
                    icon: 'success',
                    title: 'Noticia eliminada con éxito',
                }).then(() => {
                    window.location.href = '/noticias'
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al eliminar la noticia',
                    text: error.message,
                });
                console.error('Error al eliminar la noticia:', error);
            }
        }
    });
};