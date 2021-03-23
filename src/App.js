import "./App.css";
import Button from "./components/Button.js";
import Input from "./components/Input.js";
import Select from "./components/Select.js";
import Avatar from "./components/Avatar.js";
import Badge from "./components/Badge.js";
import Checkbox from "./components/Checkbox.js";
import Radio from "./components/Radio.js";
import Switch from "./components/Switch.js";
import Tag from "./components/Tag.js";

function App() {
  return (
    <div className="app">
      <Avatar />
      <Badge />
      <Button>Home</Button>
      <Checkbox />
      <Input />
      <Radio />
      <Select />
      <Switch />
      <Tag />
    </div>
  );
}

export default App;
