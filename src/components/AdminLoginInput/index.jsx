import { AdminInpuContainer } from "./style"
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import { useState } from "react"

const AdminLoginInput = ({placeholder,legend,isPassword=false,name,register,errors})=>{
    const [ visible,setVisible ] = useState(false)
    return(
    <AdminInpuContainer>
        <span className="error">{errors?.message}</span>
        {isPassword ? (
            <>
            <legend>{legend}</legend>
            <input name={name} {...register(name)} type={visible ? 'text':'password'} placeholder={placeholder} />
            {isPassword && (
                <div onClick={()=>setVisible(!visible)}>
                {visible ? (<AiFillEye/>): (<AiFillEyeInvisible/>)}
                </div>
            ) }
            
            </>
        ): (
            <>
            <legend>{legend}</legend>
            <input name={name} {...register(name)} type={'text'} placeholder={placeholder} />
            
            </>
        )}
    </AdminInpuContainer>
    )
}
export default AdminLoginInput