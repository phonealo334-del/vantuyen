const employee = {
  employees: [
    { id: 1, name: 'Nguyễn Văn A', position: 'Trưởng Phòng', phone: '0901234567', email: 'a@tinphat.com' },
    { id: 2, name: 'Trần Thị B', position: 'Nhân Viên', phone: '0902345678', email: 'b@tinphat.com' },
    { id: 3, name: 'Lê Văn C', position: 'Quản Lý', phone: '0903456789', email: 'c@tinphat.com' }
  ],
  
  render(container) {
    let html = `
      <div class="employee-container">
        <div class="employee-header">
          <h2>Quản Lý Nhân Sự</h2>
          <button class="btn-add">+ Thêm Nhân Viên</button>
        </div>
        <table class="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Chức Vụ</th>
              <th>Điện Thoại</th>
              <th>Email</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    this.employees.forEach(emp => {
      html += `
        <tr>
          <td>${emp.id}</td>
          <td>${emp.name}</td>
          <td>${emp.position}</td>
          <td>${emp.phone}</td>
          <td>${emp.email}</td>
          <td>
            <button>Sửa</button>
            <button>Xóa</button>
          </td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
      </div>
    `;
    
    container.innerHTML = html;
  }
};
