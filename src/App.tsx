// src/App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchImages } from './services/fetchImages';
import { ImageData } from './types/ImageData';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import AppRouter from './components/AppRouter';
import './css/App.css';

const App: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const data = await fetchImages();
                setImages(data);
            } catch (err) {
                setError('Failed to load images');
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <AuthProvider>
            <Router>
                <div className="app-container">
                    <AppRouter images={images} searchTerm="" sortOrder="asc" /> {/* Provide default values for searchTerm and sortOrder */}
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
