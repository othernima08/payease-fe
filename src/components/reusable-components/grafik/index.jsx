import React from "react";
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

const Grafik = () => {
  
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Pemasukan dan Pengeluaran",
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

  const chartLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Dataset 1",
        data: [900, 590, 150, 280, 890, 570, 200],
        backgroundColor: "#6379F4",
        borderRadius: 100,
        barPercentage: 0.2,
        borderSkipped: false,
      },
    ],
  };
  return (
    <Row>
      <Col md={12}>
        <Card className="chart-card">
          <Card.Body>
            <div className="chart-container">
              <Bar options={chartOptions} data={chartData} />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Grafik;
