import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
import { Doughnut, Line, Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceStart } from "../redux/mainredux/actions";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  LinearScale,
  BarElement,
  CategoryScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const Chart = () => {
  const {
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);
  const { invoice } = useSelector((state) => state.invoice);

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInvoiceStart(localId));
  }, []);
  const total = invoice
    ? Object.values(invoice).map((item) => parseFloat(item.totalAmount))
    : 1;
  const totalDay = Math.round(
    (Date.parse(currentUser.metadata.lastSignInTime) -
      Date.parse(currentUser.metadata.creationTime)) /
      (1000 * 60 * 60 * 24) +
      1
  );
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const sorted_list = day
    .slice(day.indexOf(currentUser.metadata.creationTime.slice(0, 3)))
    .concat(
      day.slice(0, day.indexOf(currentUser.metadata.creationTime.slice(0, 3)))
    );
  const tag = Array.from(
    { length: Math.round(totalDay / 7) },
    () => sorted_list
  ).flat();
  let color = [];
  for (let i = 0; i < totalDay; i++) {
    color.push(`rgba(2${i + 2}, 1${i + 5}, 1${i}, .4)`);
  }

  let tagges = [...tag, tag[tag.length - 1 - 6], tag[tag.length - 1 - 5]];
  const generalTotal = total.reduce((sum, i) => sum + i, 0);
  console.log(generalTotal);
  // const myChart = {
  //   labels: tagges.map((item) => item),
  //   datasets: [
  //     {
  //       label: "Sales",
  //       data: total.map((item) => item),
  //       // backgroundColor: [
  //       //   "rgba(255, 99, 132, 0.2)",
  //       //   "rgba(54, 162, 235, 0.2)",
  //       //   "rgba(255, 206, 86, 0.2)",
  //       //   "rgba(75, 192, 192, 0.2)",
  //       //   "rgba(153, 102, 255, 0.2)",
  //       //   "rgba(255, 159, 64, 0.2)",
  //       // ],
  //       backgroundColor: color,
  //       borderColor: color,
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const data = {
  //   labels: ["Red", "Blue", "Yellow"],
  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: [
  //         generalTotal,
  //         generalTotal * 0.19,
  //         generalTotal - generalTotal * 0.19,
  //       ],
  //       backgroundColor: [
  //         "rgb(255, 99, 132)",
  //         "rgb(54, 162, 235)",
  //         "rgb(255, 205, 86)",
  //       ],
  //     },
  //   ],
  // };
  // const options = {
  //   type: "doughnut",
  //   data: data,
  // };

  const data = {
    labels: ["Netto Total", "Tax"],
    datasets: [
      {
        data: [generalTotal - generalTotal * 0.19, generalTotal * 0.19],
        backgroundColor: ["#2E7D32", "#1976d2"],
        borderColor: ["#09DD23", "#1976d2"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      {invoice ? (
        <div
          class="chart-container"
          style={{
            position: " relative",
            height: "50vh",
            width: "80vw",

            margin: "auto",
          }}
        >
          <Pie
            style={{ margin: "2rem  auto", width: "100%" }}
            options={{ maintainAspectRatio: false }}
            data={data}
          />
        </div>
      ) : (
        <p>There is no Invoice</p>
      )}
    </div>
  );
};

export default Chart;
