import FacebookLogin from "react-facebook-login";

export default function App() {
  const handleFacebookCallback = (response: any) => {
    if (response?.status === "unknown") {
      console.error("Sorry!", "Something went wrong with facebook Login.");
      return;
    }
    console.log(response);
  };
  return (
    <>
      <FacebookLogin
        buttonStyle={{ padding: "6px" }}
        appId="706352714904505"
        fields="name,email,picture"
        callback={handleFacebookCallback}
      />
    </>
  );
}
