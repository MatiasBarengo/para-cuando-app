import Image from 'next/image';
import { useState } from 'react';
import { Input } from './InputAuth';
import Label from './Label';

import cautionSignal from '../../public/svg/caution.svg';

import eyeClosed from '../../public/svg/eyeclosed.svg';
import eyeOpen from '../../public/svg/eyeopen.svg';

export default function PasswordInput() {
  const [isPasswordShowed, setIsPasswordShowed] = useState<boolean>(false);
  return (
    <Label className="relative" htmlFor="password" labelText="Contraseña">
      <div className="relative ">
        <Input id="password" type={isPasswordShowed ? 'text' : 'password'} />
        <Image
          src={isPasswordShowed ? eyeOpen : eyeClosed}
          alt="show / hide password"
          className="absolute right-16  top-[25px]"
          onClick={() => setIsPasswordShowed(!isPasswordShowed)}
        />
        <Image
          src={cautionSignal}
          alt="show / hide password"
          className="absolute right-8  top-[25px]"
          onClick={() => setIsPasswordShowed(!isPasswordShowed)}
        />
      </div>
    </Label>
  );
}
