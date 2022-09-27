const Leg = () => (
  <div class="block">
    <div class="inline-block">
      <label
        for="inputLegLots"
        class="form-label inline-block mb-2 text-gray-700"
      >
        Lots:
      </label>
      <input
        type="number"
        class="
          form-control
          inline-block
          w-20
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="inputLegLots"
        value={1}
      />
    </div>

    <div class="inline-block">
      <select
        class="form-select appearance-none
        block
        w-20
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        id="inputPositionOptions"
      >
        <option selected value="1">
          Sell
        </option>
        <option value="2">Buy</option>
      </select>
    </div>

    <div class="inline-block">
      <select
        class="form-select appearance-none
        block
        w-20
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        id="inputOptionType"
      >
        <option selected value="1">
          Call
        </option>
        <option value="2">Put</option>
      </select>
    </div>

    <div class="inline-block">
      <select
        class="form-select appearance-none
        block
        w-28
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        id="inputExpiryOptions"
      >
        <option selected value="1">
          Weekly
        </option>
        <option value="2">Monthly</option>
      </select>
    </div>

    <div class="inline-block">
      <label
        for="inputSelectStrikeCriteriaOptions"
        class="form-label inline-block mb-2 text-gray-700"
      >
        Select Strike
      </label>
      <select
        class="form-select appearance-none
        inline-block
        w-36
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        id="inputSelectStrikeCriteriaOptions"
      >
        <option selected value="1">
          Strike Type
        </option>
        <option value="2">Premium Range</option>
        <option value="3">Closest Premium</option>
        <option value="4">Straddle Width</option>
      </select>
    </div>

    <div class="inline-block">
      <select
        class="form-select appearance-none
        block
        w-28
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        id="inputStrikeTypeOptions"
      >
        <option selected value="1">
          ATM
        </option>
        <option value="2">etc</option>
      </select>
    </div>
  </div>
);

export default Leg;
