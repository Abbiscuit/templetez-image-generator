import { useState } from 'react';

const useBase64Converter = () => {
  const [baseImage, setBaseImage] = useState('');

  const uploadImage = async e => {
    const file = e.target.files[0];
    const base64Img = await convertBase64(file);
    console.log(base64Img, 'encoded img file');
    setBaseImage(base64Img);
  };

  const convertBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = error => {
        resolve(error);
      };
    });
  };

  return {
    uploadImage,
    baseImage,
  };
};

export default useBase64Converter;
