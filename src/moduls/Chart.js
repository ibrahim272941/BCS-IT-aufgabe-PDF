import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
} from "chart.js";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceStart } from "../redux/mainredux/actions";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  LinearScale,
  BarElement,
  CategoryScale,
  PointElement
);

const Chart = () => {
  const {
    displayName,
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);
  const { invoice } = useSelector((state) => state.invoice);
  const { metaData } = useSelector((state) => state.user.currentUser);
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
      (1000 * 60 * 60 * 24)
  );
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const sorted_list = day
    .slice(day.indexOf(currentUser.metadata.creationTime.slice(0, 3)))
    .concat(
      day.slice(0, day.indexOf(currentUser.metadata.creationTime.slice(0, 3)))
    );
  const tag = Array.from({ length: 3 }, () => sorted_list).flat();

  const myChart = {
    labels: tag.map((item, totalDay) => item),
    datasets: [
      {
        label: "Sales",
        data:
          total.length < 1 ? total.map((item) => item) : [4, 5, 6, 3, 2, 19],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      label: {
        fontSize: 26,
      },
    },
  };
  return (
    <div>
      {invoice ? (
        <Line height={300} options={options} data={myChart} />
      ) : (
        <p>There is no Invoice</p>
      )}
    </div>
  );
};

export default Chart;
