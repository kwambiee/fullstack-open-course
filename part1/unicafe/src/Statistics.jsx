import Button from "./Button";

const Statistics = ({ status, handleClick }) => {
  const { good, neutral, bad } = status;

  const totalClicks = good + neutral + bad;
  const average = totalClicks ? totalClicks / 3 : 0;
  const positive_percentage = totalClicks ? (good / totalClicks) * 100 : 0;

  return (
    <div className=" m-4 p-4 w-full">
      <h1 className="text-3xl font-bold text-center mb-4 ">Give feedback</h1>
      <div className="flex justify-center items-center">
        <Button handleClick={handleClick} text="Good" />
        <Button handleClick={handleClick} text="Neutral" />
        <Button handleClick={handleClick} text="Bad" />
      </div>

      <div className="m-4 p-4 w-full ">
        <h1 className="text-3xl font-bold m-4 text-center">Statistics</h1>
        <table className="table-auto border border-collapse border-black w-full">
          <tbody>
            <tr>
              <td className="px-4 py-2">Good</td>
              <td className="px-4 py-2">{good}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Neutral</td>
              <td className="px-4 py-2">{neutral}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Bad</td>
              <td className="px-4 py-2">{bad}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">All</td>
              <td className="px-4 py-2">{totalClicks}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Average</td>
              <td className="px-4 py-2">{average}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Positive Percentage</td>
              <td className="px-4 py-2">{positive_percentage} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Statistics;
