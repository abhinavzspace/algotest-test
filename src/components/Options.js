import {
  ENTRY_TYPE,
  LOTS,
  LOWER,
  POSITION_TYPE,
  STRIKE_PARAMETER,
  UPPER,
} from "../constants";

const Options = ({ leg, setLeg, updateX }) => {
  const update = (x) => (e) => {
    setLeg(updateX(leg, x, e.target.value));
  };
  return (
    <div className="w-full text-center flex justify-between">
      <div className="inline-block">
        <label
          htmlFor="inputTotalLot"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Total Lot
        </label>
        <input
          type="number"
          className="text-input"
          id="inputTotalLot"
          value={leg.Lots}
          onChange={update(LOTS)}
        />
      </div>

      <div className="inline-block">
        <label
          htmlFor="inputPositionOptions"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Position
        </label>
        <select
          className="select-input"
          id="inputPositionOptions"
          onChange={update(POSITION_TYPE)}
          defaultValue={leg.PositionType}
        >
          <option value="PositionType.Sell">Sell</option>
          <option value="PositionType.Buy">Buy</option>
        </select>
      </div>

      <div className="inline-block">
        <label
          htmlFor="inputOptionType"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Option Type
        </label>
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
        <label
          htmlFor="inputExpiryOptions"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Expiry
        </label>
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
          Select Strike Criteria
        </label>
        <select
          className="select-input"
          id="inputSelectStrikeCriteriaOptions"
          onChange={update(ENTRY_TYPE)}
          defaultValue={leg.EntryType}
        >
          <option value="EntryType.EntryByStrikeType">Strike Type</option>
          <option value="EntryType.EntryByPremiumRange">Premium Range</option>
        </select>
      </div>

      <div className="inline-block">
        {leg.EntryType === "EntryType.EntryByStrikeType" && (
          <select
            className="select-input"
            defaultValue={leg.StrikeParameter}
            onChange={update(STRIKE_PARAMETER)}
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
                onChange={update([STRIKE_PARAMETER, LOWER])}
              />
            </div>
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
                value={leg.StrikeParameter.Upper}
                onChange={update([STRIKE_PARAMETER, UPPER])}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
