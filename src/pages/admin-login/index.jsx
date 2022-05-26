import { AdminLoginPageContainer } from "./style"
import {FaLock} from 'react-icons/fa'
import AdminLoginInput from "../../components/AdminLoginInput"

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useLoginAdmin } from "../../provider/login"

const LoginAdminPage = ()=>{
    const schema = yup.object().shape({
        email:yup.string().email('Email inválido').required('Campo Obrigatório'),
        password:yup.string().required('Campo Obrigatório')
    })
    const {handleSubmit,register,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })

    const {login} = useLoginAdmin()
    const loginSub = async (data)=>{
        login(data)
    }

    
    return(
        <AdminLoginPageContainer>
            <form onSubmit={handleSubmit(loginSub)}>
                <div className="icon-lock">
                    <FaLock/>
                </div>
            <h1>Painel Admin Login</h1>
                <AdminLoginInput errors={errors?.email} register={register} name={'email'} placeholder={'Insira o email'} legend={'Email'} />
                <AdminLoginInput errors={errors?.password} register={register} name={'password'}  placeholder={'Senha'} legend={'Senha'} isPassword />
                <button type="submit" >Login</button>
                <button onClick={(e)=>{
                    e.preventDefault()
                    
                }} className="go-back">Voltar para loja</button>
            </form>
        </AdminLoginPageContainer>
    )
}
export default LoginAdminPage