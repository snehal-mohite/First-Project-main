import http from "../http-common";

class EmployeeDataService {
  getAll() {
    return http.get("/employees/getAllData");
  }

  get(id) {
    return http.get(`/employees/getData/${id}`);
  }

  create(data) {
    return http.post("/employees/register", data);
  }

  update(id, data) {
    return http.put(`/employees/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/employees/delete/${id}`);
  }

  findSkills(search) {
    return http.get(`/employees/search`);
  }
}

export default new EmployeeDataService();