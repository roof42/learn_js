const TodoController    = require("../../controllers/todo")
const TodoModel         = require("../../models/todo.model");

TodoModel.create = jest.fn();

describe("Todo Controller - Create Todo", () => {
    it("It should have create todo function", () =>{
        expect(typeof TodoController.createTodo).toBe("function")
    });
    it("should call TodoModel dot create", () => {
        TodoController.createTodo();
        expect(TodoModel.create).toBeCalled();
    });
    
});