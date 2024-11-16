import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  return (
    <>
      {/* Login */}
      <div className="relative overflow-hidden backgr">
        <div className="container py-24 lg:py-32 mx-auto">
          <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12 mx-auto">
            {/* Title */}
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Solving problems for every team
            </h1>
            <p className="my-5 text-xl text-muted-foreground">
              Teams use Shadcn UI to build beautiful cross-platform hybrid apps
              in a fraction of the time.
            </p>
            <form>
              <div className="mb-4">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input type="password" id="password" placeholder="Password" />
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
            {/* End Form */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Login */}
    </>
  );
}
