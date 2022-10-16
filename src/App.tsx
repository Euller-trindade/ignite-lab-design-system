import { Heading } from "./components/Heading";
import { Logo } from "./Logo";
import { Text } from "./components/Text";
import "./styles/global.css";
import { TextInput } from "./components/TextInput";
import { Envelope } from "phosphor-react";
import { Lock } from "phosphor-react";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";
import { SignIn } from "./components/pages/Signin";

export function App() {
  return <SignIn />;
}
