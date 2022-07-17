import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [firstDevice, setFirstDevice] = useState(0);
  const [secondDevice, setSecondDevice] = useState(0);
  const [allDevice, setAllDevice] = useState("");
  const [firstOption, setFirstOption] = useState("EUR");
  const [secondOption, setSecondOption] = useState("USD");
  // console.log(firstDevice);
  // console.log(secondDevice);

  // console.log(arrayDevice);

  return (
    <>
      <section className="big-div">
        <Header title="Currency Converter" />
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
