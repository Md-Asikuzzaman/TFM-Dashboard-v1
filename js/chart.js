window.addEventListener('load', () => {
  charts();
});

const charts = () => {
  orderChart();
  rechargeChart();
};

// recharge chart js

const rechargeChart = () => {
  const ctxReOne = document
    ?.getElementById('rechargeChartOne')
    ?.getContext('2d');

  const data1 = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
      {
        data: [280, 150, 700, 240, 400, 340, 540, 300, 200, 1000],
        label: 'Recharges',
        fill: true,
        backgroundColor: 'rgba(62, 130, 241, 0.30)',
        borderColor: '#B8D1FA',
        pointBackgroundColor: '#3E82F1',
      },
    ],
  };

  const configRe1 = {
    type: 'line',
    data: data1,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#3E82F1',
          yAlign: 'bottom',
        },
      },

      radius: 5,
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          ticks: {
            callback: function (value) {
              return value;
            },
            stepSize: 250,
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };
  new Chart(ctxReOne, configRe1);

  const ctxReTwo = document
    ?.getElementById('rechargeChartTwo')
    ?.getContext('2d');

  const data2 = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
      {
        data: [280, 150, 300, 240, 300, 340, 740, 300, 200, 1000],
        label: 'Recharges',
        fill: true,
        backgroundColor: 'rgba(62, 130, 241, 0.30)',
        borderColor: '#B8D1FA',
        pointBackgroundColor: '#3E82F1',
      },
    ],
  };

  const configRe2 = {
    type: 'line',
    data: data2,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#3E82F1',
          yAlign: 'bottom',
        },
      },

      radius: 5,
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          ticks: {
            callback: function (value) {
              return value;
            },
            stepSize: 250,
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };
  new Chart(ctxReTwo, configRe2);

  const ctxReThree = document
    ?.getElementById('rechargeChartThree')
    ?.getContext('2d');

  const data3 = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
      {
        data: [280, 550, 300, 240, 300, 540, 240, 300, 200, 1000],
        label: 'Recharges',
        fill: true,
        backgroundColor: 'rgba(62, 130, 241, 0.30)',
        borderColor: '#B8D1FA',
        pointBackgroundColor: '#3E82F1',
      },
    ],
  };

  const configRe3 = {
    type: 'line',
    data: data3,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#3E82F1',
          yAlign: 'bottom',
        },
      },

      radius: 5,
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          ticks: {
            callback: function (value) {
              return value;
            },
            stepSize: 250,
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };
  new Chart(ctxReThree, configRe3);

  const ctxReFour = document
    ?.getElementById('rechargeChartFour')
    ?.getContext('2d');

  const data4 = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
      {
        data: [280, 250, 800, 240, 300, 840, 240, 200, 700, 1000],
        label: 'Recharges',
        fill: true,
        backgroundColor: 'rgba(62, 130, 241, 0.30)',
        borderColor: '#B8D1FA',
        pointBackgroundColor: '#3E82F1',
      },
    ],
  };

  const configRe4 = {
    type: 'line',
    data: data4,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#3E82F1',
          yAlign: 'bottom',
        },
      },

      radius: 5,
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          ticks: {
            callback: function (value) {
              return value;
            },
            stepSize: 250,
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };
  new Chart(ctxReFour, configRe4);
};

// order chart
const orderChart = () => {
  const ctxOrOne = document?.getElementById('orderChartOne')?.getContext('2d');
  new Chart(ctxOrOne, {
    type: 'line',
    maintainAspectRatio: false,
    data: {
      labels: [
        'JAN',
        'FEB',
        'MAR',
        'ARP',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],

      datasets: [
        {
          label: 'Orders',
          data: [280, 790, 300, 770, 200, 710, 790, 680, 730, 300, 200, 40],
          borderWidth: 2,
          backgroundColor: 'transparent',
          tension: 0.4,
          fill: true,
          borderColor: '#A6CEE3',
          pointBackgroundColor: '#A6CEE3',
          pointRadius: 5,
        },
      ],
    },

    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#3E82F1',
          yAlign: 'bottom',
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          ticks: {
            stepSize: 250,
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });

  const ctxOrTwo = document?.getElementById('orderChartTwo')?.getContext('2d');
  new Chart(ctxOrTwo, {
    type: 'line',
    maintainAspectRatio: false,
    data: {
      labels: [
        'JAN',
        'FEB',
        'MAR',
        'ARP',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],

      datasets: [
        {
          label: 'Orders',
          data: [280, 790, 300, 300, 200, 710, 790, 680, 330, 300, 200, 40],
          borderWidth: 2,
          backgroundColor: 'transparent',
          tension: 0.4,
          fill: true,
          borderColor: '#A6CEE3',
          pointBackgroundColor: '#A6CEE3',
          pointRadius: 5,
        },
      ],
    },

    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#3E82F1',
          yAlign: 'bottom',
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          ticks: {
            stepSize: 250,
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });

  const ctxOrThree = document
    ?.getElementById('orderChartThree')
    ?.getContext('2d');
  new Chart(ctxOrThree, {
    type: 'line',
    maintainAspectRatio: false,
    data: {
      labels: [
        'JAN',
        'FEB',
        'MAR',
        'ARP',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],

      datasets: [
        {
          label: 'Orders',
          data: [280, 390, 300, 700, 200, 710, 390, 580, 330, 100, 200, 40],
          borderWidth: 2,
          backgroundColor: 'transparent',
          tension: 0.4,
          fill: true,
          borderColor: '#A6CEE3',
          pointBackgroundColor: '#A6CEE3',
          pointRadius: 5,
        },
      ],
    },

    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#3E82F1',
          yAlign: 'bottom',
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          ticks: {
            stepSize: 250,
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });

  const ctxOrFour = document
    ?.getElementById('orderChartFour')
    ?.getContext('2d');
  new Chart(ctxOrFour, {
    type: 'line',
    maintainAspectRatio: false,
    data: {
      labels: [
        'JAN',
        'FEB',
        'MAR',
        'ARP',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],

      datasets: [
        {
          label: 'Orders',
          data: [210, 500, 180, 300, 200, 610, 790, 100, 330, 300, 200, 40],
          borderWidth: 2,
          backgroundColor: 'transparent',
          tension: 0.4,
          fill: true,
          borderColor: '#A6CEE3',
          pointBackgroundColor: '#A6CEE3',
          pointRadius: 5,
        },
      ],
    },

    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#3E82F1',
          yAlign: 'bottom',
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          ticks: {
            stepSize: 250,
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
};
