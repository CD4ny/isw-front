import { ChangeEvent, useState } from 'react';
import { Input } from '../../../components/ui/input';

const MacAddressInput: React.FC<React.ComponentProps<"input">> = (props) => {
  const [macAddress, setMacAddress] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase();
    // Eliminar caracteres no válidos
    value = value.replace(/[^A-F0-9]/g, '');
    // Insertar dos puntos cada dos caracteres
    if (value.length > 2) {
      value = value.match(/.{1,2}/g)?.join(':') || value;
    }
    // Limitar a 17 caracteres (dirección MAC completa)
    if (value.length > 17) {
      value = value.slice(0, 17);
    }
    setMacAddress(value);
  };
  return (
    <Input
      id="MaC"
      type="text"
      value={macAddress}
      onChange={handleChange}
      placeholder="00:00:00:00:00:00"
      maxLength={17}
      {...props}
    />
  );
};

export default MacAddressInput;
