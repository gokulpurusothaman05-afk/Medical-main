// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const medColors = ['#013d7e', '#014186', '#0d6efd', '#10b981', '#f59e0b', '#ef4444'];

// Global Chart settings
Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = false;

const initAllCharts = () => {
  // 1. Line: Admissions
  new Chart(document.getElementById('chart1'), {
    type: 'line',
    data: { labels: ['M','T','W','T','F','S','S'], datasets: [{ data: [65, 59, 80, 81, 56, 40, 30], borderColor: medColors[2], fill: true, backgroundColor: 'rgba(13,110,253,0.1)' }]}
  });

  // 2. Bar: Surgery Success
  new Chart(document.getElementById('chart2'), {
    type: 'bar',
    data: { labels: ['Q1','Q2','Q3','Q4'], datasets: [{ data: [98, 97, 99, 98], backgroundColor: medColors[3] }]}
  });

  // 3. Doughnut: Occupancy
  new Chart(document.getElementById('chart3'), {
    type: 'doughnut',
    data: { labels: ['Used','Empty'], datasets: [{ data: [85, 15], backgroundColor: [medColors[0], '#e2e8f0'] }]}
  });

  // 4. Polar: Workload
  new Chart(document.getElementById('chart4'), {
    type: 'polarArea',
    data: { labels: ['ER','Lab','OPD','ICU'], datasets: [{ data: [11, 16, 7, 14], backgroundColor: medColors }]}
  });

  // 5. Line: ER Wait
  new Chart(document.getElementById('chart5'), {
    type: 'line',
    data: { labels: ['8am','12pm','4pm','8pm'], datasets: [{ data: [15, 45, 30, 20], borderColor: medColors[5], tension: 0.4 }]}
  });

  // 6. Bar: Revenue
  new Chart(document.getElementById('chart6'), {
    type: 'bar',
    data: { labels: ['Nov','Dec','Jan','Feb'], datasets: [{ data: [4.2, 5.1, 4.8, 5.5], backgroundColor: medColors[1] }]}
  });

  // 7. Pie: Demographics
  new Chart(document.getElementById('chart7'), {
    type: 'pie',
    data: { labels: ['Adult','Senior','Child'], datasets: [{ data: [40, 35, 25], backgroundColor: [medColors[0], medColors[2], medColors[3]] }]}
  });

  // 8. Radar: Satisfaction
  new Chart(document.getElementById('chart8'), {
    type: 'radar',
    data: { labels: ['Care','Food','Wait','Cost','Hygiene'], datasets: [{ data: [90, 75, 60, 85, 95], borderColor: medColors[3], backgroundColor: 'rgba(16,185,129,0.2)' }]}
  });
};

// Start Charts
initAllCharts();

// GSAP Staggered Entrance
gsap.from(".chart-card", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".medical-grid",
    start: "top 90%"
  }
});