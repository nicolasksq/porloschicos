import userIcon from 'assets/user-grey.svg';
import userIconActive from 'assets/user-blue.svg';
import passIcon from 'assets/password-grey.svg';
import passIconActive from 'assets/password-blue.svg';
import emailIcon from 'assets/mail.svg';
import emailIconActive from 'assets/mail-blue.svg';
import dniIcon from 'assets/id-card.svg';
import dniIconActive from 'assets/id-card-blue.svg';

const INPUTS = [
  {
    id: 0,
    name: 'username',
    label: 'Nombre y Apellido',
    icon: userIcon,
    iconActive: userIconActive,
    required: true,
    type: 'text',
  },
  {
    id: 1,
    name: 'password',
    label: 'Contraseña',
    icon: passIcon,
    iconActive: passIconActive,
    required: true,
    type: 'password',
  },
  {
    id: 2,
    name: 'email',
    label: 'E-mail',
    icon: emailIcon,
    iconActive: emailIconActive,
    required: true,
    type: 'email',
  },
  {
    id: 3,
    name: 'du',
    label: 'Documento',
    icon: dniIcon,
    iconActive: dniIconActive,
    required: true,
    type: 'number',
  },
];

export default INPUTS;
