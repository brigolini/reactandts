import {useEffect, useState} from 'react';
import {Todo} from '../../Types/Todo';

const useTodoApi = () => {
    const [todos, setTodos] = useState<Todo[]>()
    useEffect(()=>{
      const fn = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (response.status === 200){
          const result = await response.json();
          setTodos(result);
        }
      }
      fn();
    },[setTodos])
    return todos;
}

export default useTodoApi;
