type TodoItemProps = {
    id: string
    title: string
    completed: ConstrainBoolean
}

export default function TodoItem({ id, title, completed }: TodoItemProps) {}
