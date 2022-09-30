import Leg from "./Leg";

const Legs = ({ legs, updateX, setLegs }) => {
  const update = (i) => (x) => (e) => {
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
              <Leg leg={leg} update={update(i)} />
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
