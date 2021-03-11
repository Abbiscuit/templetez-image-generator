import { useCustomizeTemplate } from './CustomTemplateProvider';

const useBase64Converter = () => {
  const { setBaseImage } = useCustomizeTemplate();

  const uploadImage = async e => {
    const file = e.target.files[0];
    const base64Img = await convertBase64(file);
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
  };
};

export default useBase64Converter;
