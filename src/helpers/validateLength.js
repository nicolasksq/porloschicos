const validateLength = ({
  minLength = 1, maxLength = 50, name = 'string', str = '',
} = {}) => {
  const result = {
    error: `El campo ${name} debe ser mayor a ${minLength} caracteres`,
    isValid: false,
  };

  if (str.length >= minLength && str.length <= maxLength) {
    result.error = '';
    result.isValid = true;

    return result;
  }

  if (str.length >= maxLength) {
    result.error = `El campo ${name} debe ser menor a ${maxLength} caracteres`;
    return result;
  }
  return result;
};

export default validateLength;
