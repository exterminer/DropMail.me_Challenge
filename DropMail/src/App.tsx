import { Email } from "./components/email/email";
import { GenerateEmail } from "./components/generateEmail/generateEmail";
import "./index.css"
function App() {

  return (
    <>
    <header className="border border-gray-400 p-4 px-5 mb-10">
      <h3 className="text-darkslategray text-xl">DropMail</h3>
    </header>
      <GenerateEmail/>
      <Email/>
    </>
  );
}

export default App;
