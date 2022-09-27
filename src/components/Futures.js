import { LOTS, POSITION_TYPE } from "../constants";

const Futures = ({ leg, setLeg, updateX }) => {
  const update = (x) => (e) => {
    setLeg(updateX(leg, x, e.target.value));
  };
  return (
    <div className="w-full text-center">
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
          htmlFor="inputPositionFutures"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Position
        </label>
        <select
          className="select-input"
          id="inputPositionFutures"
          onChange={update(POSITION_TYPE)}
          defaultValue={leg.PositionType}
        >
          <option value="PositionType.Sell">Sell</option>
          <option value="PositionType.Buy">Buy</option>
        </select>
      </div>
    </div>
  );
};

export default Futures;
