const app = require("../app");
const request = require("supertest");

test("Get all list todo", (done) => {
  request(app)
    .get("/api/todo")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.data.length).toBe(2);
      done();
    })
    .catch(done);
});

test("Get detail todo", (done) => {
  request(app)
    .get("/api/todo/1")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.data.title).toBe("Todo 1");
      done();
    })
    .catch(done);
});

test("Create todo", (done) => {
  const newTodo = {
    title: "Todo",
  };

  request(app)
    .post("/api/todo")
    .send(newTodo)
    .expect("Content-Type", /json/)
    .expect(201)
    .then((response) => {
      expect(response.body.message).toBe("Todo created successfully!");
      done();
    })
    .catch(done);
});

test("Update todo", (done) => {
  const id = 1;
  const updateTodo = {
    title: "Todo 1 Updated",
  };

  request(app)
    .put(`/api/todo/${id}`)
    .send(updateTodo)
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      console.log(response.body);
      expect(response.body.message).toBe("Todo updated successfully!");
      expect(response.body.todo).toHaveProperty("title", "Todo 1 Updated");
      done();
    })
    .catch(done);
});

test("Delete todo", (done) => {
  const id = 3;

  request(app)
    .delete(`/api/todo/${id}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.message).toBe("Todo deleted successfully!");
      done();
    })
    .catch(done);
});
