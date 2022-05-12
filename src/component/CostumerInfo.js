import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CostumerInfo = () => {
  const { invoice } = useSelector((state) => state.invoice);

  const product = invoice
    ? Object.values(invoice).map((item, i) => ({
        [item.productName]: item.productQuantity,
      }))
    : [1, 1];

  const sumArray = (product) => {
    const res = {};
    for (let i = 0; i < product.length; i++) {
      Object.keys(product[i]).forEach((key) => {
        res[key] = parseFloat(res[key] || 0) + parseFloat(product[i][key]);
      });
    }
    return res;
  };
  const productNew = sumArray(product);
  const sortingProduct = [];
  for (let i in productNew) {
    sortingProduct.push([i, productNew[i]]);
  }
  sortingProduct.sort((a, b) => b[1] - a[1]);

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
    <div
      style={{ fontSize: '.76rem' }}
      className="d-flex justify-content-around"
    >
      <Table className="w-25" striped bordered hover>
        <thead>
          <tr className="text-center">
            <th colSpan={2}>Most Loyal Costumers</th>
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
          <tr className="text-center">
            <th colSpan={3}>Most Popular Products</th>
          </tr>
        </thead>
        <tbody>
          {invoice &&
            sortingProduct.slice(0, 3).map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item}</td>
                  <td>{item[1]}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {/* <Table className="w-25" striped bordered hover>
        <thead>
          <tr className="text-center">
            <th colSpan={2}>Least-Purchasing Costumers</th>
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
      </Table> */}
    </div>
  );
};

export default CostumerInfo;
