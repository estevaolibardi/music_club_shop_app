import { DivContainer } from "./style";

const TextInput = ({ labelName, error, borderColor, register, name }) => {
  return (
    <DivContainer color={borderColor}>
      <p>
        {labelName} {error && <span>- {error}</span>}
      </p>
      <input type="text" {...register(name)} />
    </DivContainer>
  );
};

export default TextInput;
