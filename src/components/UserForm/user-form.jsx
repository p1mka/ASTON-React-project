import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input/input";
import styled from "styled-components";
import { SimpleLoader } from "../SimpleLoader/simple-loader";

const UserFormContainer = ({
    isLoading,
    title,
    handleClick,
    serverError,
    setServerError,
    className,
}) => {
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
        clearErrors,
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

    const onErrorsReset = () => {
        clearErrors();
        setServerError(null);
    };

    return (
        <div>
            {
                <form
                    className={className}
                    onSubmit={handleSubmit(handleClick)}
                >
                    {isLoading ? (
                        <SimpleLoader />
                    ) : (
                        <>
                            <Input
                                width="100%"
                                name="email"
                                type="email"
                                placeholder="e-mail"
                                {...register("email")}
                                onChange={onErrorsReset}
                            />
                            <Input
                                width="100%"
                                name="password"
                                type="password"
                                placeholder="Пароль"
                                {...register("password")}
                                onChange={onErrorsReset}
                            />
                            <button
                                type="submit"
                                disabled={!!formError || isLoading}
                            >
                                {title}
                            </button>
                            {formError && (
                                <p className="form-error">{formError}</p>
                            )}
                        </>
                    )}
                </form>
            }
        </div>
    );
};

export const UserForm = styled(UserFormContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 400px;
    box-shadow: 2px 4px 17px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 4px 17px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 4px 17px 1px rgba(0, 0, 0, 0.75);
    border-radius: 0.5rem;
    padding: 5rem;
    margin: 1.5rem 0;

    & .form-error {
        color: red;
    }
`;

UserForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    serverError: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
    setServerError: PropTypes.func,
};
