import { FC } from "react";
import { FormFieldInterface } from "../Interface";

const Input: FC<FormFieldInterface> = (props) => {
    return <input {...props} />
}

export default Input;