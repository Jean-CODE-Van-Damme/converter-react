import rates from "../Rates/rates";

const Form = ({
  firstDevice,
  setFirstDevice,
  secondDevice,
  setSecondDevice,
  firstOption,
  setFirstOption,
  secondOption,
  setSecondOption,
}) => {
  const arrayDevice = Object.keys(rates);
  // console.log(arrayDevice);

  // formule de base de conversion
  //(montant * devise finale) / devise de base

  // pour la premiere fonction de haut en bas
  // montant >>> first device
  // devise finale >>> rates[secondOption]
  // devise de base >>> rates[firstOption]

  const changeDevice = (event) => {
    // setSecondDevice(firstDevice * rates.USD);
    setSecondDevice((firstDevice * rates[secondOption]) / rates[firstOption]);
  };

  // le calcul s inverse par un produit en croix sur la seconde fonction
  const changeDevice2 = (event) => {
    // setFirstDevice(secondDevice * (1 / rates.USD));
    setFirstDevice((secondDevice * rates[firstOption]) / rates[secondOption]);
  };

  // console.log(firstOption);

  return (
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
          <select
            className="select"
            placeholder="EUR"
            value={firstOption}
            onChange={(event) => {
              setFirstOption(event.target.value);
            }}
          >
            {arrayDevice.map((element, index) => {
              console.log(arrayDevice[index]);
              return (
                <option className="option" value={element} key={index}>
                  {element}
                </option>
              );
            })}
          </select>
        </span>
      </div>
      <div className="button">
        <button onClick={changeDevice}>
          <span className="arrow">🔽</span>{" "}
        </button>
        <button onClick={changeDevice2}>
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
          <select
            className="select"
            placeholder="EUR"
            value={secondOption}
            onChange={(event) => {
              setSecondOption(event.target.value);
            }}
          >
            {arrayDevice.map((element, index) => {
              return (
                <option className="option" key={index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </span>
      </div>
    </section>
  );
};

export default Form;
