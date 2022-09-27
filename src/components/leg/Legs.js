import {
  LOTS,
  POSITION_TYPE,
  ENTRY_TYPE,
  STRIKE_PARAMETER,
  LOWER,
  UPPER,
} from "../../constants";

const Legs = ({ legs, updateX, setLegs }) => {
  const update = (x, i) => (e) => {
    setLegs(updateX(x, legs, i, e.target.value));
  };

  const deleteLeg = (i) => {
    setLegs(legs.filter((_leg, j) => i !== j));
  };

  const copyLeg = (i) => {
    let updatedLegs = legs.slice();
    updatedLegs.push(legs[i]);
    setLegs(updatedLegs);
  };

  return (
    <div>
      <ul>
        {(legs || []).map((leg, i) => (
          <li key={i}>
            <div className="block">
              <div className="inline-block">
                <label
                  htmlFor="inputLegLots"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Lots:
                </label>
                <input
                  type="number"
                  className="text-input"
                  id="inputLegLots"
                  value={leg.Lots}
                  onChange={update(LOTS, i)}
                />
              </div>

              <div className="inline-block">
                <select
                  className="select-input"
                  aria-label="Default select example"
                  id="inputPositionOptions"
                  onChange={update(POSITION_TYPE, i)}
                  defaultValue={leg.PositionType}
                >
                  <option value="PositionType.Sell">Sell</option>
                  <option value="PositionType.Buy">Buy</option>
                </select>
              </div>

              <div className="inline-block">
                <select
                  className="select-input"
                  aria-label="Default select example"
                  id="inputOptionType"
                >
                  <option value="1">Call</option>
                  <option value="2">Put</option>
                </select>
              </div>

              <div className="inline-block">
                <select
                  className="select-input"
                  aria-label="Default select example"
                  id="inputExpiryOptions"
                >
                  <option value="1">Weekly</option>
                  <option value="2">Monthly</option>
                </select>
              </div>

              <div className="inline-block">
                <label
                  htmlFor="inputSelectStrikeCriteriaOptions"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Select Strike
                </label>
                <select
                  className="select-input inline-block"
                  id="inputSelectStrikeCriteriaOptions"
                  onChange={update(ENTRY_TYPE, i)}
                  defaultValue={leg.EntryType}
                >
                  <option value="EntryType.EntryByStrikeType">
                    Strike Type
                  </option>
                  <option value="EntryType.EntryByPremiumRange">
                    Premium Range
                  </option>
                </select>
              </div>

              <div className="inline-block">
                {leg.EntryType === "EntryType.EntryByStrikeType" && (
                  <select
                    className="select-input"
                    defaultValue={leg.StrikeParameter}
                    onChange={update(STRIKE_PARAMETER, i)}
                  >
                    <option value="StrikeType.ATM">ATM</option>
                    <option value="StrikeType.OTM1">OTM1</option>
                  </select>
                )}
                {leg.EntryType === "EntryType.EntryByPremiumRange" && (
                  <div>
                    <div className="inline-block">
                      <label
                        htmlFor="inputLegLots"
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Lower
                      </label>
                      <input
                        type="number"
                        className="text-input"
                        id="inputLegLots"
                        value={leg.StrikeParameter.Lower}
                        onChange={update([STRIKE_PARAMETER, LOWER], i)}
                      />
                    </div>
                    <div className="inline-block">
                      <label
                        htmlFor="inputLegLots"
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Upper:
                      </label>
                      <input
                        type="number"
                        className="text-input"
                        id="inputLegLots"
                        value={leg.StrikeParameter.Upper}
                        onChange={update([STRIKE_PARAMETER, UPPER], i)}
                      />
                    </div>
                  </div>
                )}
              </div>
              <button
                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => deleteLeg(i)}
              >
                delete
              </button>
              <button
                className="inline-block px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => copyLeg(i)}
              >
                copy
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legs;
