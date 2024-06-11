import { auth, storage } from "firebase.config";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
import { db } from '../../firebase.config';

export const registerUser = async (formData) => {
    try {
        const usernameRef = doc(db, 'users', formData.registerUsername);
        const usernameDoc = await getDoc(usernameRef);

        if (usernameDoc.exists()) {
            Swal.fire({
                icon: 'error',
                title: "Error",
                text: "El nombre de usuario ya está registrado.",
            });
            return;
        }

        Swal.fire({
            title: 'Registrando usuario...',
            text: 'Por favor, espera mientras se completa el registro.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const userCredential = await createUserWithEmailAndPassword(auth, formData.registerEmail, formData.registerPassword);
        const user = userCredential.user;

        await updateProfile(user, {
            displayName: formData.registerUsername,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/urblink-2b58e.appspot.com/o/default-avatar.jpg?alt=media&token=8c9a463d-83e6-4503-a2ed-5f0ea77b3257'
        });

        await setDoc(doc(db, 'users', user.uid), {
            displayName: formData.registerUsername,
            uid: user.uid,
            email: formData.registerEmail,
            photoURL: user.photoURL
        });

        Swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            text: '¡Bienvenid@ ' + formData.registerUsername + '!',
        }).then(() => {
            window.location.href = '/login';
        });

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "Error al registrar el usuario: " + error.message,
        });
    }
};

export const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {

        })
        .catch((error) => {

        });
}

export const login = async (formData) => {
    signInWithEmailAndPassword(auth, formData.loginEmail, formData.loginPassword)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Sesión iniciada!',
            }).then(() => {
                window.location.href = '/';
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: "Error",
                text: "Correo y/o contraseña incorrecta.",
            })
        });
}

export const logout = async () => {
    signOut(auth).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Sesión cerrada!',
        }).then(() => {
            window.location.href = '/login';
        });

    }).catch((error) => {
        // An error happened.
    });
}

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            unsubscribe(); // Detener la escucha de cambios una vez que se obtiene el usuario
            if (currentUser) {
                resolve(currentUser); // Resuelve la promesa con el usuario actual
            } else {
                reject('Failed to get current user'); // Rechaza la promesa si no hay usuario autenticado
            }
        });
    });
}

export const uploadProfilePhoto = async (selectedFile, user) => {
    const storageRef = ref(storage, `images/${user.uid}`);
    try {
        const listResult = await listAll(storageRef);

        //Borrar anteriores
        const deletePromises = listResult.items.map(itemRef => deleteObject(itemRef));
        await Promise.all(deletePromises);

        Swal.fire({
            title: 'Subiendo imagen...',
            text: 'Por favor, espera mientras se sube la foto.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const fileRef = ref(storageRef, selectedFile.name);
        await uploadBytes(fileRef, selectedFile);

        const downloadURL = await getDownloadURL(fileRef);

        await updateProfile(user, {
            photoURL: downloadURL
        });

        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
            photoURL: downloadURL
        });

        return true;
    } catch (error) {
        console.error('Error al actualizar el campo "photoURL":', error);
    }
}

export const uploadVideo = async (selectedFile, user) => {
    try {
        const videosRef = ref(storage, `videos/${user.uid}`);
        //const videosRef = ref(storage, `videos/`);
        const fileRef = ref(videosRef, selectedFile.name);

        Swal.fire({
            title: 'Subiendo video...',
            text: 'Por favor, espera mientras se sube el video.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        await uploadBytes(fileRef, selectedFile);

        const downloadURL = await getDownloadURL(fileRef);

        Swal.fire({
            icon: 'success',
            title: 'Video subido!',
        }).then(() => {
            window.location.href = '/perfil';
        });

        return downloadURL;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "Error al subir el video.",
        })
    };
}

export async function isDisplayNameUnique(displayName) {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('displayName', '==', displayName));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.empty);
    return querySnapshot.empty;
}

export const fetchVideosByUser = async (user) => {
    try {
        const storage = getStorage();
        const videosRef = ref(storage, `videos/${user?.uid}`);
        const videoList = await listAll(videosRef);

        const urls = await Promise.all(videoList.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
        }));

        return urls;
    } catch (error) {
        console.error('Error al obtener los videos:', error);
    }
}

export const deleteVideo = async (videoUrl) => {
    const storage = getStorage();
    const videoRef = ref(storage, videoUrl);

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
                await deleteObject(videoRef);
                Swal.fire({
                    icon: 'success',
                    title: 'Video eliminado con éxito',
                }).then(() => {
                    window.location.reload();
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al eliminar el video',
                    text: error.message,
                });
                console.error('Error al eliminar el video:', error);
            }
        }
    });
};

export const updateUserDisplayName = async (currentUser, newDisplayName) => {
    try {
        await updateProfile(currentUser, {
            displayName: newDisplayName,
        });

        const usersCollectionRef = collection(db, 'users');
        const q = query(usersCollectionRef, where('uid', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (doc) => {
            await updateDoc(doc.ref, {
                displayName: newDisplayName
            });
        });

        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'El nombre de usuario se actualizó correctamente.',
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al actualizar el nombre de usuario. Por favor, inténtalo de nuevo más tarde.',
        });
        console.error('Error al actualizar el nombre de usuario:', error);
    }
};
