import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import rates from "./Rates/rates";
import { useState } from "react";

function App() {
  const [firstDevice, setFirstDevice] = useState(0);
  const [secondDevice, setSecondDevice] = useState(0);
  const [allDevice, setAllDevice] = useState("");
  const [firstOption, setFirstOption] = useState("1234");
  const [secondOption, setSecondOption] = useState("");
  // console.log(firstDevice);
  // console.log(secondDevice);

  // console.log(arrayDevice);

  return (
    <>
      <section>
        <Header title="EUR to USD" />
      </section>
      <Form
        firstDevice={firstDevice}
        setFirstDevice={setFirstDevice}
        secondDevice={secondDevice}
        setSecondDevice={setSecondDevice}
        allDevice={allDevice}
        setAllDevice={setAllDevice}
        firstOption={firstOption}
        setFirstOption={setFirstOption}
        secondOption={secondOption}
        setSecondOption={setSecondOption}
      />
    </>
  );
}

export default App;
