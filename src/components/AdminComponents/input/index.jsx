import { InputContainer } from "./style"
import {AiOutlineSearch} from 'react-icons/ai'
const Input = ()=>{

    return(
        <InputContainer>
            <button>
                <AiOutlineSearch/>
            </button>
            <input type="text" placeholder="Procurar" />
        </InputContainer>
    )
}
export default Input