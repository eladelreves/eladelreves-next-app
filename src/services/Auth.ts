import firebaseConfig from "firebase.config";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export const registerUser = async (formData) => {
    // Verificar si el nombre de usuario ya está registrado
    const usernameRef = doc(db, 'users', formData.registerUsername);
    const usernameDoc = await getDoc(usernameRef);

    if (usernameDoc.exists()) {
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "El nombre de usuario ya está registrado.",
        })
    } else {
        // Si el nombre de usuario no está registrado, procede con el registro
        createUserWithEmailAndPassword(auth, formData.registerEmail, formData.registerPassword)
            .then(async (userCredential) => {
                // Usuario registrado con éxito
                const user = userCredential.user;

                // Guardar el nombre de usuario en Firestore
                if (user) {
                    try {
                        const userRef = doc(db, 'users', user.uid);
                        await setDoc(userRef, {
                            username: formData.registerUsername
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
                            title: 'Error',
                            text: 'Error al guardar el nombre de usuario en Firestore',
                        })
                    }
                }
            })
            .catch((error) => {
                // Error al registrar el usuario
                Swal.fire({
                    icon: 'error',
                    title: "Error",
                    text: "Error al registrar el usuario:",
                })
            });
    }
};

export const login = async (formData) => {
    signInWithEmailAndPassword(auth, formData.loginEmail, formData.loginPassword)
        .then((userCredential) => {
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