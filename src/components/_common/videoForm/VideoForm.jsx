import styles from './videoForm.module.css';
import { useState } from 'react';
import { uploadVideo } from '@services/Auth';
import { useUser } from 'src/contexts/userContext';

export default function VideoForm() {
    const [fileName, setFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const { user } = useUser();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            uploadVideo(selectedFile, user);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setSelectedFile(file);
        } else {
            setFileName('');
            setSelectedFile(null);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="file-upload" className={styles.customFileUpload}>
                Seleccionar video
            </label>
            <input id="file-upload" type="file" accept="video/*" onChange={handleFileChange} className={styles.fileInput} />
            {fileName && <p className={styles.fileName}>{fileName}</p>}
            <input type="submit" value="Enviar" className={styles.submitButton} />
        </form>
    );
}
