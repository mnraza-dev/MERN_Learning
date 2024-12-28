import React, { useEffect, useState } from 'react'

const APIData = () => {
    const [images, setImages] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        console.log(data);
        setImages(data);
    }
    useEffect(() => {
       fetchData();

     }, [])
    
  return (
    <div>
        <h1>API Data Example </h1>
        <ul style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
           listStyle: 'none'
        }}>
            {images.map((image) => (
                <li key={image.id}>
                    <img style={{
                        width: '300px',
                        height: '200px',
                        borderRadius: '10px',

                    }} src={image.download_url} alt={image.author} />
                    <p style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '20px'
                    }}>{image.author}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default APIData