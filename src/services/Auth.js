import firebaseConfig from "firebase.config";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Obtenemos la instancia de almacenamiento de Firebase
const auth = getAuth();

// export const registerUser = async (formData) => {
//     // Verificar si el nombre de usuario ya está registrado
//     const usernameRef = doc(db, 'users', formData.registerUsername);
//     const usernameDoc = await getDoc(usernameRef);

//     if (usernameDoc.exists()) {
//         Swal.fire({
//             icon: 'error',
//             title: "Error",
//             text: "El nombre de usuario ya está registrado.",
//         })
//     } else {
//         // Si el nombre de usuario no está registrado, procede con el registro
//         createUserWithEmailAndPassword(auth, formData.registerEmail, formData.registerPassword)
//             .then(() => {
//                 Swal.fire({
//                     icon: 'success',
//                     title: '¡Registro exitoso!',
//                     text: '¡Bienvenid@ ' + formData.registerUsername + '!',
//                 }).then(() => {
//                     window.location.href = '/login';
//                 });
//             })
//             .catch((error) => {
//                 Swal.fire({
//                     icon: 'error',
//                     title: "Error",
//                     text: "Error al registrar el usuario:",
//                 })
//             });
//     }
// };

export const registerUser = async (formData) => {
    createUserWithEmailAndPassword(auth, formData.registerEmail, formData.registerPassword)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: '¡Bienvenid@ ' + formData.registerUsername + '!',
            }).then(() => {
                window.location.href = '/login';
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: "Error",
                text: "Error al registrar el usuario:",
            })
        });
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
                text: "Error al iniciar sesión.",
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
    const storage = getStorage();
    const storageRef = ref(storage, `images/${user.uid}`);
    try {
        const listResult = await listAll(storageRef);
        
        //Borrar anteriores
        const deletePromises = listResult.items.map(itemRef => deleteObject(itemRef));
        await Promise.all(deletePromises);

        const fileRef = ref(storageRef, selectedFile.name);
        await uploadBytes(fileRef, selectedFile);

        const downloadURL = await getDownloadURL(fileRef);

        await updateProfile(user, {
            photoURL: downloadURL
        });
    } catch (error) {
        console.error('Error al actualizar el campo "photoURL":', error);
    }
}

export const uploadVideo = async (selectedFile, user) => {
    try{
        const storage = getStorage();
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
    }catch (error) {
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "Error al subir el video.",
        })
    };
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