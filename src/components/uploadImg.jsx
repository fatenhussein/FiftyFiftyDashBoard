import React, { useState, useCallback } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);

  const onFileChange = useCallback((e) => {
    const file = e.target.files[0];
    setImage(file);

    // Setting image preview
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    } else {
      setPreview(null);
    }
  }, []);

  const onUpload = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('/api/v1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setImageUrl(response.data.imageUrl);
      setImage(null);
      setPreview(null);
    } catch (error) {
      setError("There was an issue uploading the image. Please try again.");
      console.error("Error uploading the image:", error.data);
    } finally {
      setIsLoading(false);
    }
  }, [image]);

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      {preview && !imageUrl && (
        <>
          <img src={preview} alt="Image Preview" style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
          <button onClick={onUpload} disabled={isLoading || !image}>
            {isLoading ? 'Uploading...' : 'Upload'}
          </button>
        </>
      )}
      {imageUrl && <div><h4>Uploaded Image:</h4> <img src={imageUrl} alt="Uploaded Content" style={{ width: '200px', height: '200px', marginTop: '10px' }} /></div>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default ImageUpload;
