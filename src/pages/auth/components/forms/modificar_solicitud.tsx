import MacAddressInput from '@/pages/auth/components/MacField';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ModSolicitud() {
  return (
    <>
      <div className="relative overflow-hidden backgr">
        <div className="container py-24 lg:py-32 mx-auto">
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
        </div>
        {/* End Col */}
      </div>
      {/* End Login */}
    </>
  );
}
