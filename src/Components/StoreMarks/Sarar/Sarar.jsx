import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sarar.scss'; 

const Sarar = () => {
    const [charms, setCharms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/notes');
                const filteredNotes = res.data.allNotes.filter(note => note.catagory === 'Sarar');
                setCharms(filteredNotes);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Yükleniyor...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen">Hata: {error}</div>;
    }

    return (
        <div>
            <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
                Sarar 
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {charms.length > 0 ? (
                    charms.map((note) => (
                        <div key={note._id} className="product-card" data-aos="fade-up">
                            {note.thumbnail && (
                                <img
                                    src={note.thumbnail}
                                    alt="Thumbnail"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                            )}
                            <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
                            <p className="text-gray-600 mb-4">${note.price}</p>
                            <button
                                onClick={() => navigate(`/product/${note._id}`)}
                                className="button-primary"
                            >
                                Detallar
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center col-span-full">Ürün bulunamadı.</div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Sarar;






