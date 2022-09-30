import {
  LOTS,
  POSITION_TYPE,
  ENTRY_TYPE,
  STRIKE_PARAMETER,
  LOWER,
  UPPER,
  POSITION_TYPE__SELL,
  POSITION_TYPE__BUY,
  ENTRY_TYPE__ENTRY_BY_STRIKE_TYPE,
  ENTRY_TYPE__ENTRY_BY_PREMIUM_RANGE,
  STRIKE_TYPE__ATM,
  STRIKE_TYPE__OTM1,
} from "../constants";

const Leg = ({ leg, update }) => {
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
          value={leg.PositionType}
        >
          <option value={POSITION_TYPE__SELL}>Sell</option>
          <option value={POSITION_TYPE__BUY}>Buy</option>
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
          value={leg.EntryType}
        >
          <option value={ENTRY_TYPE__ENTRY_BY_STRIKE_TYPE}>Strike Type</option>
          <option value={ENTRY_TYPE__ENTRY_BY_PREMIUM_RANGE}>
            Premium Range
          </option>
        </select>
      </div>

      <div className="inline-block">
        {leg.EntryType === ENTRY_TYPE__ENTRY_BY_STRIKE_TYPE && (
          <select
            className="select-input"
            value={leg.StrikeParameter}
            onChange={update(STRIKE_PARAMETER)}
          >
            <option value={STRIKE_TYPE__ATM}>ATM</option>
            <option value={STRIKE_TYPE__OTM1}>OTM1</option>
          </select>
        )}
        {leg.EntryType === ENTRY_TYPE__ENTRY_BY_PREMIUM_RANGE && (
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

export default Leg;
