// Simple Router for TinPhat ERP
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
  }
  
  register(path, handler) {
    this.routes[path] = handler;
  }
  
  navigate(path) {
    if (this.routes[path]) {
      this.routes[path]();
      this.currentRoute = path;
    } else {
      console.warn(`Route ${path} not found`);
    }
  }
  
  init() {
    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
      const path = window.location.hash.substring(1) || 'dashboard';
      this.navigate(path);
    });
  }
}

// Create router instance
const router = new Router();
