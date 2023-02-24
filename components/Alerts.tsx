import swal from 'sweetalert';
import { ActionButton } from './assets/ActionButton';

const Alerts = () => {
  const alert = () => {
    swal({
      title: 'El usuario y la contraseña no coinciden',
      icon: 'error',
    });
  };

  return (
    <div>
      <ActionButton onClick={alert} />
    </div>
  );
};

export default Alerts;
