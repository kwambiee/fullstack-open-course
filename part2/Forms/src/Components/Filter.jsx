const Filter = ({ handleFilter }) => {
  return (
    <div>
        <div>
            filter shown with: <input onChange={(e) => handleFilter(e.target.value)} />
        </div>
    </div>
  );
};
export default Filter;