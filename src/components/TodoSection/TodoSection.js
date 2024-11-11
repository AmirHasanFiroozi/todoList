import { forwardRef, memo } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

const TodoSection = forwardRef((props , ref) => (
    <div ref={ref}>
    <AddTodo />
    <Todo />
    </div>
));
export default memo(TodoSection)