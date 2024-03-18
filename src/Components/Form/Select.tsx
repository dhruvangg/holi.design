import { FC } from "react";
import { FormFieldInterface } from "../Interface";

const Select: FC<FormFieldInterface> = ({name, defaultValue, options, required}) => {
    return <select name={name} required={required} defaultValue={defaultValue}>
        {options && options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
}

export default Select;