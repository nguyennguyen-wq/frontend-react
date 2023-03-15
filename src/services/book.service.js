import http from "../http-common";

class BookDataService {
  getAll(params) {
    return http.get("/books", { params });
  }

  get(id) {
    return http.get(`/books/${id}`);
  }

  create(data) {
    return http.post("/books", data);
  }

  update(id, data) {
    return http.put(`/books/${id}`, data);
  }

  delete(id) {
    return http.delete(`/books/${id}`);
  }

  deleteAll() {
    return http.delete("/books");
  }
}

export default new BookDataService();
