import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MacAddressInput from '@/pages/solicitudes/components/MacField';

interface FormData {
  id?: string;
  macAddress: string;
  marca: string;
  modelo: string;
  serie: string;
}

export default function ModSolicitud() {
  const schema = yup.object({
    macAddress: yup.string().required('Requerido'),
    marca: yup.string().required('Requerido'),
    modelo: yup.string().required('Requerido'),
    serie: yup.string().required('Requerido'),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      macAddress: '',
      marca: '',
      modelo: '',
      serie: '',
    },
  });
  const onSubmit = (data:FormData) => console.log(data)
  return (
    <form>
      <div className="mb-4">
        <MacAddressInput {...register("macAddress")} />
      </div>
      <div className="mb-4">
        <Label htmlFor="marca" className="sr-only">
          Marca
        </Label>
        <Input type="marca" id="marca" placeholder="Marca" {...register("marca")} />
      </div>
      <div className="mb-4">
        <Label htmlFor="modelo" className="sr-only">
          Modelo
        </Label>
        <Input type="modelo" id="modelo" placeholder="Modelo" {...register("modelo")}  />
      </div>
      <div className="mb-4">
        <Label htmlFor="serie" className="sr-only">
          Serie
        </Label>
        <Input type="serie" id="serie" placeholder="Serie" {...register("serie")}  />
      </div>

      <div className="grid">
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Log in
        </Button>
      </div>
    </form>
  );
}
