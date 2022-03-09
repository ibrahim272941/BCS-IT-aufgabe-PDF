import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CostumerInfo = () => {
  const { invoice } = useSelector((state) => state.invoice);
  const costumer = invoice
    ? Object.values(invoice).map((item) => item.costumerName)
    : [1, 1];
  const mostCostumer = costumer.filter(
    (item, i) => costumer.indexOf(item) !== i
  );

  let counts = mostCostumer.reduce((counts, num) => {
    counts[num] = (counts[num] || 0) + 1;
    return counts;
  }, {});
  mostCostumer.sort((a, b) => counts[b] - counts[a]);
  costumer.sort((a, b) => counts[b] - counts[a]);
  const sortedCostumer = [...new Set(mostCostumer)].slice(0, 3);
  const leastCostumer = [...new Set(costumer)].slice(
    [...new Set(costumer)].length - 3,
    [...new Set(costumer)].length
  );

  return (
    <div className="d-flex justify-content-around ">
      <Table className="w-25" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Most Loyal Costumers</th>
          </tr>
        </thead>
        <tbody>
          {invoice ? (
            sortedCostumer.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </Table>
      <Table className="w-25" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Least-Purchasing Costumers</th>
          </tr>
        </thead>
        <tbody>
          {invoice && [...new Set(costumer)].length > 6 ? (
            leastCostumer.reverse().map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CostumerInfo;
