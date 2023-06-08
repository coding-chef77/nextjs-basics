type TodoItemProps = {
    id: string
    title: string
    completed: boolean
}

export default function TodoItem({ id, title, completed }: TodoItemProps) {
    return (
        <li className="flex gap-1 items-center">
            <input type="checkbox"  />
        </li>

}
