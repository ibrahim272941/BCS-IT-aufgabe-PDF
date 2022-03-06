import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CostumerInfo = () => {
  const { invoice } = useSelector((state) => state.invoice);
  const costumer = Object.values(invoice).map((item) => item.costumerName);
  const mostCostumer = costumer.filter(
    (item, i) => costumer.indexOf(item) !== i
  );

  let counts = mostCostumer.reduce((counts, num) => {
    counts[num] = (counts[num] || 0) + 1;
    return counts;
  }, {});
  mostCostumer.sort((a, b) => counts[b] - counts[a]);
  const sortedCostumer = [...new Set(mostCostumer)].slice(0, 5);
  console.log(
    [...new Set(costumer)].slice(
      [...new Set(costumer)].length - 4,
      [...new Set(costumer)].length - 1
    )
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
          {sortedCostumer.map((item, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{item}</td>
              </tr>
            );
          })}
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
          {[...new Set(costumer)]
            .slice(
              [...new Set(costumer)].length - 4,
              [...new Set(costumer)].length - 1
            )
            .map((item, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default CostumerInfo;
