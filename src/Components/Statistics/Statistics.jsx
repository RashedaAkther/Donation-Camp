import { useEffect, useRef, useMemo } from "react";
import Chart from "chart.js/auto";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const chartRef = useRef(null);
  const jsonData = useLoaderData() || [];

  const percentage = useMemo(() => {
    const jsonDataLength = jsonData.length;
    const localData = JSON.parse(localStorage.getItem("donate"));
    console.log(localData);

    let localDataLength;
    if (!localData) {
      localDataLength = 0;
    } else {
      localDataLength = localData.length;
    }

    console.log({ localDataLength });
    return localDataLength / jsonDataLength;
  }, [jsonData]);

  const calcuPercent = percentage * 100;

  let totalPercent = 0;
  if (calcuPercent === 100) {
    totalPercent = 100;
  } else {
    totalPercent = 100 - calcuPercent;
  }

  const canvas = useRef(null);

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
      options: {},
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvas.current.getContext("2d");
    chartRef.current = new Chart(ctx, configPie);
  }, [calcuPercent, totalPercent]);

  return (
    <div className="shadow-lg h-screen grid justify-center items-center rounded-lg overflow-hidden">
      <canvas
        ref={canvas}
        className="lg:p-1 lg:ml-40 lg:mr-40"
        id="chartPie"
      ></canvas>
    </div>
  );
};

export default Statistics;
