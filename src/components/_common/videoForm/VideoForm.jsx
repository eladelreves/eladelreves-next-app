import styles from './videoForm.module.css';
import { useState } from 'react';
import { uploadVideo } from '@services/Auth'

export default function VideoForm() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        uploadVideo(selectedFile, user);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="file-upload" className="custom-file-upload">
                Seleccionar video
            </label>
            <input id="file-upload" type="file" accept="video/*" onChange={handleFileChange} />
            <input type="submit" value="Enviar" />
        </form>
    );
}
