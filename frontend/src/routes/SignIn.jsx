import Navbars from "../components/Navbars";
import { SignIn } from "@clerk/clerk-react";
import { neobrutalism } from "@clerk/themes";
import Footer from "../components/Footer";

const SignInPage = () => {
  return (
    <>
      <Navbars page="sign-in" />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In Here!</h1>
            <p className="py-6">
              We're excited to see you back! We hope you'll enjoy your stay!
            </p>
          </div>
          <SignIn
            appearance={{
              baseTheme: [neobrutalism],
              variables: {
                colorPrimary: "blue",
              },
              signIn: {
                baseTheme: [neobrutalism],
                variables: { colorPrimary: "blue" },
              },
            }}
            path="/sign-in"
            redirectUrl="/"
            signUpUrl="/sign-up"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignInPage;
