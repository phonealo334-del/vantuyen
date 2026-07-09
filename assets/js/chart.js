// Chart.js library wrapper (CDN will be used in index.html)
// This file can contain custom chart configurations

const chartConfig = {
  defaultOptions: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  },
  
  createRevenueChart(canvasId, data) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    
    return new Chart(ctx, {
      type: 'line',
      data: data,
      options: this.defaultOptions
    });
  }
};
