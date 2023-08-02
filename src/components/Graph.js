import { useParams } from "react-router-dom";
import useAxios from "../hooks/axiosRequest"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";
import Loader from "./Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const Graph = () => {
  const { id } = useParams();
  const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);
  
  if(!response) {
    return (
      <div className="wrapper-container mt-8">
        <Loader className="h-72 w-full mb-10" />
      </div>
    )
  }
  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
  
  const options = {
    responsive: true,
    scales: {
        y: {
          grid: {
            color: 'rgba(152, 152, 152, 0.1)', // Change this to your desired grid color
          },
        },
        x: {
            grid: {
              color: 'rgba(152, 152, 152, 0.1)', // Change this to your desired grid color
            },
          },
      },
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        // fill: true,
        label: id,
        data: coinChartData.map(val => val.y),
        borderColor: 'rgba(151, 71, 255, 1)',
        backgroundColor: 'rgba(166, 114, 234, 0.5)',
      }
    ]
  }

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default Graph;