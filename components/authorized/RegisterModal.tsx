import { Input } from './InputAuth';
import Label from './Label';
import ModalContent from './ModalContent';
import PasswordInput from './PasswordInput';

export default function RegisterModal() {
  return (
    <ModalContent
      redirectTo="O inicia sesión"
      contentFor="register"
      btnText="Crear Cuenta"
      title="Todos votamos :)"
      subtitle="Regístrate para ingresar"
      passwordAction="La contraseña debe tener mayúsculas, minúsculas y números"
    >
      <Label htmlFor="email" labelText="Email">
        <Input id="email" type="email" placeholder="ejemplo@mail.com" />
      </Label>
      <div className="flex gap-1.5">
        <Label htmlFor="name" labelText="Nombre">
          <Input id="name" type="text" placeholder="Erik" />
        </Label>
        <Label htmlFor="apellido" labelText="Apellido">
          <Input id="apellido" type="text" placeholder="Perez" />
        </Label>
      </div>
      <PasswordInput />
    </ModalContent>
  );
}
