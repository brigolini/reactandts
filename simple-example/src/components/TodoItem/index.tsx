import {FC} from 'react';
import {Todo} from '../../Types/Todo';

type Props = {
  todo: Todo;
}
const TodoItem:FC<Props> = ({todo}) => {
  const {title, completed} = todo;
  return (
    <>
      <div>{title}</div>
      <div>{completed?"Yes":"No"}</div>
    </>
  )
}
export default TodoItem;
