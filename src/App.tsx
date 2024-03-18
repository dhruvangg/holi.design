import DynamicForm from "./Components/DynamicForm";

const form = {
  formId: 'simple-form',
  fields: [{
    label: 'Name',
    type: 'text',
    name: 'name',
    placeholder: 'Your Name',
    required: true,
  }, {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Your Email',
    required: true,
  }, {
    label: 'Gender',
    type: 'select',
    name: 'gender',
    required: true,
    defaultValue: '',
    options: [{ value: '', label: 'Select Gender' }, { value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]
  }]
}

export default function App() {
  return (
    <div>
      <DynamicForm form={form}/>
    </div>
  )
}
