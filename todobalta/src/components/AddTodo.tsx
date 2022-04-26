import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    title: yup.string().required('Invalid task'),
});

interface AddTodoForm {
    title: string
}

const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext);

    const { register, handleSubmit, formState: { errors } } = useForm<AddTodoForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title);
        e.target.reset();
        window.location.href = '/';
    }


    return (
        <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
            <h4>New Task</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" placeholder="New Task..." className="uk-input" {...register("title")} />
                <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Save</button>
            </div>
        </form>
    );
}

export default AddTodo;