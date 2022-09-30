import Leg from "./Leg";

const Options = ({ leg, setLeg, updateX }) => {
  const update = (x) => (e) => {
    setLeg(updateX(leg, x, e.target.value));
  };
  return <Leg leg={leg} update={update} />;
};

export default Options;
