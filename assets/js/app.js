// TinPhat ERP - Main Application
const app = {
  currentPage: 'dashboard',
  
  init() {
    this.setupEventListeners();
    this.loadPage('dashboard');
  },
  
  setupEventListeners() {
    // Menu click handlers
    document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('href').substring(1);
        this.loadPage(page);
      });
    });
  },
  
  loadPage(page) {
    this.currentPage = page;
    
    // Update active menu
    document.querySelectorAll('.menu a').forEach(a => {
      a.classList.remove('active');
    });
    document.querySelector(`a[href="#${page}"]`).classList.add('active');
    
    // Load page content
    const contentArea = document.getElementById('app');
    
    switch(page) {
      case 'dashboard':
        this.loadDashboard(contentArea);
        break;
      case 'employee':
        this.loadPage('pages/employee.html');
        break;
      case 'product':
        this.loadPage('pages/product.html');
        break;
      case 'customer':
        this.loadPage('pages/customer.html');
        break;
      case 'finance':
        this.loadPage('pages/finance.html');
        break;
      case 'report':
        this.loadPage('pages/report.html');
        break;
      default:
        contentArea.innerHTML = `<h1>${page.charAt(0).toUpperCase() + page.slice(1)}</h1>`;
    }
  },
  
  loadDashboard(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="card">
          <div class="card-title">Tổng Nhân Viên</div>
          <div class="card-value">125</div>
          <div class="card-footer">+5 tuần này</div>
        </div>
        <div class="card">
          <div class="card-title">Sản Phẩm</div>
          <div class="card-value">342</div>
          <div class="card-footer">+12 tuần này</div>
        </div>
        <div class="card">
          <div class="card-title">Khách Hàng</div>
          <div class="card-value">89</div>
          <div class="card-footer">+3 tuần này</div>
        </div>
        <div class="card">
          <div class="card-title">Doanh Thu</div>
          <div class="card-value">25.5M</div>
          <div class="card-footer">Tháng này</div>
        </div>
      </div>
      <div class="chart-container">
        <h3>Biểu Đồ Doanh Thu</h3>
        <canvas id="revenueChart"></canvas>
      </div>
    `;
    
    // Initialize chart
    setTimeout(() => {
      if (typeof Chart !== 'undefined') {
        dashboard.initChart();
      }
    }, 100);
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
