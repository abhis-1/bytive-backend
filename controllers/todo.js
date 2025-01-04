import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const todo = new Todo({
      title,
      description,
      status,
      owner: req.id,
    });

    await todo.save();

    return res.status(201).json({
      success: true,
      message: "Todo created successfully.",
      todo,
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({ owner: req.id });

    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId, owner: req.id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found.",
      });
    }

    return res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const updateTodoById = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const { title, description, status } = req.body;

    const todo = await Todo.findOneAndUpdate(
      { _id: todoId, owner: req.id },
      { title, description, status },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Todo Updated Successfully.",
      todo,
    });
  } catch (error) {
    console.error("Error updating todo:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};
export const deleteTodoById = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const todo = await Todo.findOneAndDelete({ _id: todoId, owner: req.id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Todo Deleted Successfully.",
    });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};
