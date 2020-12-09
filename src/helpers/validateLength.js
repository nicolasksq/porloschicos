const validateLength = ({
  minLength = 1, maxLength = 50, name = 'string', str = '',
} = {}) => {
  const resultMin = {
    error: `El campo ${name} debe ser mayor a ${minLength} caracteres`,
    isValid: false,
  };

  const resultMax = {
    error: `El campo ${name} debe ser menor a ${maxLength} caracteres`,
    isValid: false,
  };

  if (str.length >= minLength && str.length <= maxLength) {
    resultMin.error = '';
    resultMin.isValid = true;

    return resultMin;
  }

  if (str.length <= minLength) {
    return resultMin;
  }
  return resultMax;
};

export default validateLength;
