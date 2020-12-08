const validateEmail = (email) => {
  const result = { errorEmail: '', emailIsValid: false };
  const expReg = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim() === '') {
    result.errorEmail = 'El campo E-mail es obligatorio';
    result.emailIsValid = false;
    return result;
  }

  if (!expReg.test(email)) {
    result.errorEmail = 'El E-mail es invalido';
    result.emailIsValid = false;
    return result;
  }

  result.errorEmail = '';
  result.emailIsValid = true;

  return result;
};

export default validateEmail;
