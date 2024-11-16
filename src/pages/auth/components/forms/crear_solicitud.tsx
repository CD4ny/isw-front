import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MacAddressInput from '@/pages/auth/components/MacField';

export default function CrearSolicitud() {
  return (
    <form>
      <div className="mb-4">
        <MacAddressInput />
      </div>
      <div className="mb-4">
        <Label htmlFor="marca" className="sr-only">
          Marca
        </Label>
        <Input type="marca" id="marca" placeholder="Marca" />
      </div>
      <div className="mb-4">
        <Label htmlFor="modelo" className="sr-only">
          Modelo
        </Label>
        <Input type="modelo" id="modelo" placeholder="Modelo" />
      </div>
      <div className="mb-4">
        <Label htmlFor="serie" className="sr-only">
          Serie
        </Label>
        <Input type="serie" id="serie" placeholder="Serie" />
      </div>

      <div className="grid">
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Log in
        </Button>
      </div>
    </form>
  );
}
