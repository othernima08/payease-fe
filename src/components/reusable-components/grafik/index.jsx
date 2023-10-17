import React, {useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import { Row, Col, Card } from "react-bootstrap";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import "./grafik.css"
import { getTransactionHistoryByUserIdAndDays } from "../../../services/transactions";

const Grafik = () => {

  Chart.register(
    CategoryScale,
    BarElement,
    LinearScale,
    Legend,
    Title,
    Tooltip
  );

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Income and expense graph",
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };
  const [dailyData, setDailyData] = useState({});

  const handleGetDataByDays = async (userId) => {
    try {
      const response = await getTransactionHistoryByUserIdAndDays(userId);
      if (response.data.success) {
        setDailyData(response.data.data);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetDataByDays(localStorage.getItem("id"));
  }, []);

  const prepareChartData = (dailyData) => {
    const chartLabels = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const chartData = {
      labels: chartLabels,
      datasets: [
        {
          label: "Income",
          data: chartLabels.map(day => dailyData[day] ? dailyData[day].income : 0),
          backgroundColor: "#6379F4",
          borderRadius: 100,
          barPercentage: 0.2,
          borderSkipped: false,
        },
        {
          label: "Expense",
          data: chartLabels.map(day => dailyData[day] ? dailyData[day].expense : 0),
          backgroundColor: "red",
          borderRadius: 100,
          barPercentage: 0.2,
          borderSkipped: false,
        },
      ],
    };
    return chartData;
  }
  return (
    <Row>
      <Col md={12}>
        <Card className="chart-card">
          <Card.Body>
            <div className="chart-container">
              <Bar options={{chartOptions,  aspectRatio: 1, }} data={prepareChartData(dailyData)} />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Grafik;
