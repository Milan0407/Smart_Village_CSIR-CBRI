const FinancialSection = ({
  values,
  onChange,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Financial Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Budget */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Budget (₹)
          </label>

          <input
            type="number"
            min="0"
            value={values.budget}
            onChange={(e) =>
              onChange(
                "budget",
                Number(e.target.value)
              )
            }
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter Budget"
          />
        </div>

        {/* Funding Agency */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Funding Agency
          </label>

          <input
            type="text"
            value={values.fundingAgency}
            onChange={(e) =>
              onChange(
                "fundingAgency",
                e.target.value
              )
            }
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Funding Agency"
          />
        </div>

        {/* Implementing Agency */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Implementing Agency
          </label>

          <input
            type="text"
            value={values.implementingAgency}
            onChange={(e) =>
              onChange(
                "implementingAgency",
                e.target.value
              )
            }
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Implementing Agency"
          />
        </div>

      </div>

    </div>
  );
};

export default FinancialSection;