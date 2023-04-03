import { useState } from "react";
import "./styles.css";
import LoginPage from "./pages/SignUp-Login/LoginPage";
import SignupPage from "./pages/SignUp-Login/SignupPage";
import Homepage from "./pages/Homepage/Homepage";

export default function App() {
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <div className="App">
      {/* {!hasAccount ? <LoginPage /> : <SignupPage />} */}
      <Homepage />
    </div>
  );
}
