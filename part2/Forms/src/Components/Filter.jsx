const Filter = ({ handleFilter }) => {
  return (
    <div>
        <div className="text-center mt-4">
        filter shown with: <input onChange={(e) => handleFilter(e.target.value)}
          className="border rounded p-2"
        />
        </div>
    </div>
  );
};
export default Filter;