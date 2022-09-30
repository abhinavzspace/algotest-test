import React, { useState } from "react";
import "tw-elements";
import { getAllLegs, pushLegs } from "./api/Legs";
import "./App.css";
import Futures from "./components/Futures";
import Legs from "./components/Legs";
import Options from "./components/Options";
import {
  LOTS,
  POSITION_TYPE,
  ENTRY_TYPE,
  STRIKE_PARAMETER,
  LOWER,
  UPPER,
  POSITION_TYPE__BUY,
  ENTRY_TYPE__ENTRY_BY_STRIKE_TYPE,
  STRIKE_TYPE__ATM,
} from "./constants";

let initialLeg = {
  [POSITION_TYPE]: POSITION_TYPE__BUY, //or “PositionType.Buy”
  [LOTS]: 1, //integer,
  [ENTRY_TYPE]: ENTRY_TYPE__ENTRY_BY_STRIKE_TYPE,
  [STRIKE_PARAMETER]: STRIKE_TYPE__ATM, // or “StrikeType.OTM1” when
  // EntryByStrikeType, or //number when EntryByPremium, object as {“Lower”:
  //number, “Upper”: //number} when EntryByPremiumRange, object as
  // {“Adjustment”: “Plus” or “Minus”, “Multiplier”: //number} when
  // EntryByStraddleWidth,
};

const App = () => {
  const [legs, setLegs] = useState([]);
  const [legToAdd, setLegToAdd] = useState(initialLeg);

  const addLeg = () => {
    let legsCopy = legs.slice();
    legsCopy.push(legToAdd);
    setLegs(legsCopy);
  };

  const updateStrikeParameter = (leg, type) => {
    if (type === "EntryType.EntryByStrikeType") {
      leg[STRIKE_PARAMETER] = "StrikeType.ATM"; // set default value
    } else if (type === "EntryType.EntryByPremiumRange") {
      leg[STRIKE_PARAMETER] = {
        [LOWER]: 50,
        [UPPER]: 200,
      };
    } else {
      throw Error("type is out of range as of now");
    }
    return leg;
  };

  const updateLegX = (leg, x, type) => {
    if (typeof x === "string") {
      let updatedLeg = Object.assign({}, leg);
      updatedLeg[x] = type;
      if (x === ENTRY_TYPE) {
        updatedLeg = updateStrikeParameter(updatedLeg, type);
      }
      return updatedLeg;
    } else if (Array.isArray(x)) {
      let [a, b] = x;
      let updatedLeg = Object.assign({}, leg);
      updatedLeg[a][b] = type;
      return updatedLeg;
    } else {
      throw Error("x is of wrong type");
    }
  };

  // x can be a string or an array of two strings.
  const updateLegsX = (x, legs, i, type) => {
    const updatedLegs = legs.map((leg, j) => {
      if (j === i) {
        return updateLegX(leg, x, type);
      } else {
        return leg;
      }
    });

    return updatedLegs;
  };

  const loadAllLegs = async () => {
    let newLegs = (await getAllLegs()).map((leg) => ({ ...leg.data }));
    setLegs(newLegs);
  };

  return (
    <div className="inline-block">
      <div className="inline-block">
        Select segments
        <ul
          className="nav nav-tabs inline-flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
          id="tabs-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-home"
              className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
              id="tabs-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-home"
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              Futures
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-profile"
              className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profile"
              role="tab"
            >
              Options
            </a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContent">
          <div
            className="tab-pane fade show active"
            id="tabs-home"
            role="tabpanel"
          >
            <Futures leg={legToAdd} setLeg={setLegToAdd} updateX={updateLegX} />
          </div>
          <div className="tab-pane fade" id="tabs-profile" role="tabpanel">
            <Options leg={legToAdd} setLeg={setLegToAdd} updateX={updateLegX} />
          </div>
        </div>
      </div>
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          onClick={() => addLeg()}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Leg
        </button>
      </div>
      <Legs legs={legs} updateX={updateLegsX} setLegs={setLegs} />
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => pushLegs(legs)}
      >
        Submit
      </button>
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => loadAllLegs()}
      >
        Load Data
      </button>
    </div>
  );
};

// let json = {
//   PositionType: "PositionType.Sell", //or “PositionType.Buy”
//   Lots: 1, //integer,
//   LegStopLoss: {
//     Type: "LegTgtSLType.Percentage", // or “LegTgtSLType.Points” or
//     //"LegTgtSLType.UnderlyingPercentage" and so on,
//     Value: 40, //number
//   },
//   LegTarget: {
//     Type: "LegTgtSLType.Percentage", // or “LegTgtSLType.Points” or
//     //"LegTgtSLType.UnderlyingPercentage" and so on,
//     Value: 30, //number
//   },
//   LegTrailSL: {
//     Type: "None", // if not selected or “TrailStopLossType.Points” or
//     //“TrailStopLossType.Percentage”,
//     Value: {
//       InstrumentMove: 3, //number
//       StopLossMove: 4, //number
//     },
//   },
//   LegMomentum: {
//     Type: "None", // or “MomentumType.PointsUp” or “MomentumType.
//     //PointsDown” or so on,
//     Value: 4, //number
//   },
//   ExpiryKind: "ExpiryType.Weekly", // or “ExpiryType.Monthly”,
//   EntryType: "EntryType.EntryByStrikeType",
//   StrikeParameter: "StrikeType.ATM", // or “StrikeType.OTM1” when
//   // EntryByStrikeType, or //number when EntryByPremium, object as {“Lower”:
//   //number, “Upper”: //number} when EntryByPremiumRange, object as
//   // {“Adjustment”: “Plus” or “Minus”, “Multiplier”: //number} when
//   // EntryByStraddleWidth,
//   InstrumentKind: "LegType.CE",
//   LegReentrySL: {
//     Type: "ReentryType.ASAP", // or "ReentryType.ASAPReverse",
//     Value: 0, //integer
//   },
//   LegReentryTP: {
//     Type: "", //Same as above,
//     Value: 1,
//   },
// };

export default App;
