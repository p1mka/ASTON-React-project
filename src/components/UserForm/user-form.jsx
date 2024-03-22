import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

const UserFormContainer = ({ title, handleClick, serverError, className }) => {
    const fieldsScheme = yup.object().shape({
        email: yup
            .string()
            .email()
            .min(1, "Поле E-mail не может быть пустым! "),
        password: yup
            .string()
            .min(6, "Длина пароля должна быть не менее 6 символов!"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(fieldsScheme),
    });

    const emailError = errors.email?.message;
    const passwordError = errors.password?.message;

    const formError = emailError || passwordError || serverError;

    return (
        <div>
            {formError && <p>{formError}</p>}
            <form className={className} onSubmit={handleSubmit(handleClick)}>
                <input
                    name="email"
                    type="email"
                    placeholder="e-mail"
                    {...register("email")}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    {...register("password")}
                />
                <button disabled={!!formError}>{title}</button>
            </form>
        </div>
    );
};

export const UserForm = styled(UserFormContainer)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 400px;
    border: 2px solid #444444;
    border-radius: 0.5rem;
    padding: 1.5rem;
`;
