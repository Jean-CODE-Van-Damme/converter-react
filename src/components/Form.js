import rates from "../Rates/rates";

const Form = ({
  firstDevice,
  setFirstDevice,
  secondDevice,
  setSecondDevice,
  allDevice,
  setAllDevice,
}) => {
  const arrayDevice = Object.keys(rates);

  const changeDevice = (event) => {
    event.preventDefault();
    setSecondDevice(firstDevice * rates.USD);
  };

  const changeDevice2 = (event) => {
    event.preventDefault();
    setFirstDevice(secondDevice * (1 / rates.USD));
  };

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
            {/* {arrayDevice.map((element) => {
              return (
                <select className="select" placeholder="EUR">
                  <option value={element}>{element}</option>
                  <option value={element}>{element}</option>
                </select>
              );
            })} */}
            <select className="select" placeholder="EUR">
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
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
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </span>
        </div>
      </section>
    </form>
  );
};

export default Form;
