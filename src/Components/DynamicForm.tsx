import { FC } from "react";
import { DynamicFormInterface, FormFieldInterface } from "./Interface";
import { Input, Select } from './Form';

const fieldType: Record<string, FC<FormFieldInterface>> = {
  'text': Input,
  'search': Input,
  'email': Input,
  'tel': Input,
  'select': Select
};

const DynamicForm: FC<DynamicFormInterface> = ({ form }) => {
  const { formId, fields } = form;
  return (
    <form data-form-id={formId}>
      {fields.map(({type, label, name, className, ...rest}) => {
        const Component = fieldType[type];
        return <div key={name} className="flex flex-col">
          <label>{label}</label>
          <Component type={type} name={name} {...rest} className={`${className} border py-1 px-3 focus:border-gray-700 focus:outline-none`} />
        </div>
      })}
      <button>Submit</button>
    </form>
  )
}

export default DynamicForm;