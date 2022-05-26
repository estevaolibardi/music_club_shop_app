import { DivContainer } from "./style";

const TextInput = ({
  labelName,
  error,
  borderColor,
  register,
  name,
  ...rest
}) => {
  return (
    <DivContainer color={borderColor}>
      <p>
        {labelName} {error && <span>- {error}</span>}
      </p>
      <input {...register(name)} {...rest} />
    </DivContainer>
  );
};

export default TextInput;
