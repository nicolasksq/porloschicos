const validateLength = ({
  minLength = 1, maxLength = 50, name = 'string', str = '',
} = {}) => {
  const result = {
    error: `El campo ${name} debe tener entre ${minLength} y ${maxLength} caracteres`,
    isValid: false,
  };

  if (str.length >= minLength && str.length <= maxLength) {
    result.error = '';
    result.isValid = true;

    return result;
  }

  return result;
};

export default validateLength;
