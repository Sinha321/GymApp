import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Who are you??When no one is watching??Are you the one who's up before everybody else??Putting in that blood sweat and tears??Working to get better??
            
            <p className="my-5">Because it's what we do when no one is watching that seperates the best from the rest!!!</p>
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Now or Never</h4>
          <p className="my-5">Silence Smile Success</p>
          <p>Work+Gym+Music</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Street Number-6,B.R.M College Road,Munger,Bihar-811201.</p>
          <p>(+91)8092776290</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
