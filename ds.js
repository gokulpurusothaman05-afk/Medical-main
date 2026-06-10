const colors = {
    primary: '#013d7e',
    secondary: '#0d6efd',
    success: '#10b981',
    emergency: '#ef4444',
    light: '#e2e8f0'
};

/* ========================= */
/* 1️⃣ Occupancy Donut */
/* ========================= */
new Chart(document.getElementById('occupancyDonut'), {
    type: 'doughnut',
    data: {
        labels: ['Occupied', 'Available', 'Maintenance'],
        datasets: [{
            data: [84, 12, 4],
            backgroundColor: [
                colors.primary,
                colors.success,
                colors.light
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: { display: false }
        }
    }
});

/* ========================= */
/* 2️⃣ Revenue Bar */
/* ========================= */
new Chart(document.getElementById('revenueBar'), {
    type: 'bar',
    data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
            label: 'Revenue (M)',
            data: [7.2, 7.8, 8.5, 8.2],
            backgroundColor: colors.secondary,
            borderRadius: 6,
            barThickness: 30
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: { color: '#555' },
                grid: { display: false }
            },
            y: {
                ticks: { color: '#555' },
                grid: { color: '#eee' }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

/* ========================= */
/* 3️⃣ Admissions Trend Line */
/* ========================= */
new Chart(document.getElementById('visitorsLine'), {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [
            {
                label: 'Emergency',
                data: [400, 450, 380, 520, 490],
                borderColor: colors.emergency,
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 4
            },
            {
                label: 'Out-Patient',
                data: [1200, 1500, 1400, 1800, 1600],
                borderColor: colors.primary,
                backgroundColor: 'rgba(1, 61, 126, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: { color: '#555' },
                grid: { display: false }
            },
            y: {
                ticks: { color: '#555' },
                grid: { color: '#eee' }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#333',
                    font: { size: 12 }
                }
            }
        }
    }
});

/* ========================= */
/* 4️⃣ Patient Sentiment Radar */
/* ========================= */
new Chart(document.getElementById('sentimentRadar'), {
    type: 'radar',
    data: {
        labels: ['Cleanliness', 'Wait Time', 'Doctor Care', 'Nursing', 'Billing'],
        datasets: [{
            label: 'Current Score',
            data: [95, 70, 98, 92, 85],
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: colors.success,
            borderWidth: 2,
            pointBackgroundColor: colors.success
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: '#ddd' },
                grid: { color: '#eee' },
                pointLabels: {
                    color: '#444',
                    font: { size: 11 }
                },
                ticks: {
                    backdropColor: 'transparent',
                    color: '#666'
                }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});