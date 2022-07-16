import rates from "../Rates/rates";

const Form = ({
  firstDevice,
  setFirstDevice,
  secondDevice,
  setSecondDevice,
  allDevice,
  setAllDevice,
  firstOption,
  setFirstOption,
  secondOption,
  setSecondOption,
}) => {
  const arrayDevice = Object.keys(rates);
  // console.log(arrayDevice);

  for (let i = 0; i < arrayDevice.length; i++) {
    let key = arrayDevice[i];
    console.log(key);
  }

  const changeDevice = (event) => {
    event.preventDefault();
    setSecondDevice(firstDevice * rates.USD);
  };

  const changeDevice2 = (event) => {
    event.preventDefault();
    setFirstDevice(secondDevice * (1 / rates.USD));
  };

  // console.log(firstOption);

  return (
    <form onSubmit={changeDevice}>
      <section className="change">
        {/* <Devise devise="€" /> */}
        <div className="change-zone">
          <input
            type="number"
            placeholder="0"
            value={firstDevice}
            onChange={(event) => setFirstDevice(event.target.value)}
          />
          <span>
            {/* {arrayDevice.map((element, index) => {
              return ( */}
            <select className="select" placeholder="EUR">
              {arrayDevice.map((element, index) => {
                return (
                  <option
                    value={element}
                    key={index}
                    onChange={() => {
                      setFirstOption(arrayDevice.element);
                    }}
                  >
                    {element}
                  </option>
                );
              })}
            </select>
          </span>
        </div>
        <div className="button">
          <button>
            <span className="arrow">🔽</span>{" "}
          </button>
          <button type="button" onClick={changeDevice2}>
            <span className="arrow">🔼</span>{" "}
          </button>
        </div>
        {/* <Devise devise="$" /> */}
        <div className="change-zone">
          <input
            type="number"
            placeholder="0"
            value={secondDevice}
            onChange={(event) => setSecondDevice(event.target.value)}
          />
          <span>
            {" "}
            <select className="select" placeholder="EUR">
              {arrayDevice.map((element, index) => {
                return (
                  <option
                    key={index}
                    onChange={() => {
                      setSecondOption(arrayDevice.element);
                    }}
                    value={element}
                  >
                    {element}
                  </option>
                );
              })}
            </select>
          </span>
        </div>
      </section>
    </form>
  );
};

export default Form;
