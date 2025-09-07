import { type JSX } from 'react';
import { Navigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useGlobalStore } from '../../storage/useGlobalStorage';
import { useAuth } from '../../providers/auth/useAuth';
import InputWithError from '../../components/inputs/InputWithError';
import ButtonText from '../../components/buttons/ButtonText';
import Input from '../../components/inputs/Input';
import { loginSchema, type TLoginFormFields } from '../../schemas/LoginSchema';
import { login } from '../../services';

export function Login(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TLoginFormFields>({ resolver: zodResolver(loginSchema) });

    const { setUser } = useGlobalStore();
    const { isAuthenticated } = useAuth();

    //= =================================================================================
    if (isAuthenticated) return <Navigate to="/home" replace />;

    //= =================================================================================
    const onSubmit: SubmitHandler<TLoginFormFields> = async (data) => {
        try {
            const { data: userData, message } = await login({
                email: data.email,
                password: data.password,
            });

            toast.success(message);
            setUser(userData);
            reset();
        } catch (error) {
            const errorMessage =
                (error as IApiErrorResponse)?.error ||
                'Servidor indisponível no momento!';
            toast.error(`Erro ao fazer login: ${errorMessage}`);
        }
    };

    //= =================================================================================
    return (
        <div className="h-dvh flex items-center justify-center flex-col text-center px-8">
            <div className="w-full sm:w-3/4 lg:w-2/5 flex flex-col gap-4">
                <h2 className="font-semibold text-3xl text-text">
                    Bem-vindo de volta! 😁
                </h2>
                <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}>
                    <InputWithError
                        label="E-mail"
                        errorMessage={errors.email?.message}>
                        <Input
                            id="email"
                            placeholder="E-mail"
                            {...register('email')}
                        />
                    </InputWithError>

                    <InputWithError
                        label="Senha"
                        errorMessage={errors.password?.message}>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Senha"
                            {...register('password')}
                        />
                    </InputWithError>

                    <ButtonText
                        type="submit"
                        text={isSubmitting ? 'Logando...' : 'Entrar'}
                        disabled={isSubmitting}
                        className="w-full"
                    />
                </form>
            </div>
        </div>
    );
}
