import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const chartRef = useRef(null);
    const jsonData = useLoaderData();
    const jsonDataLength = jsonData.length;

    const localData = JSON.parse(localStorage.getItem("donate"));
    console.log(localData.length);
    const localDataLength = localData.length;

    const percentage = localDataLength / jsonDataLength;
    const calcuPercent = (percentage * 100).toFixed(2);
    console.log(calcuPercent);
    const totalPercent = 100 - calcuPercent;



  useEffect(() => {
    const dataPie = {
      labels: ["Donation", "Donated"],
      datasets: [
        {
          label: "Donation Level",
          data: [calcuPercent, totalPercent],
          backgroundColor: ["rgb(164, 101, 241)", "rgb(101, 143, 241)"],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
        options: {
          
            
      },
    };

  
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("chartPie").getContext("2d");
    chartRef.current = new Chart(ctx, configPie);
  }, []);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
     
      <canvas className="lg:p-1 lg:ml-40 lg:mr-40" id="chartPie"></canvas>
    </div>
  );
};

export default Statistics;
