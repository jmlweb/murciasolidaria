/* eslint-disable no-template-curly-in-string */
import { setLocale } from 'yup';

const setYupLocale = () => {
  setLocale({
    mixed: {
      default: '${path} no es válido',
      required: '${path} es un campo requerido',
    },
    string: {
      length: '${path} must be exactly ${length} characters',
      min: '${path} debe tener al menos ${min} caracteres',
      max: '${path} debe tener como mucho ${max} caracteres',
      email: '${path} debe ser un email válido',
      url: '${path} debe ser una URL válida',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
    },
  });
};

export default setYupLocale;
