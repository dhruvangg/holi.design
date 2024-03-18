export interface FormFieldInterface {
    type: string;
    name: string;
    required: boolean;
    className?: string;
    label?: string;
    defaultValue?: string,
    options?: { value: string; label: string }[];
    placeholder?: string;
}

export interface DynamicFormInterface {
    form: {
        formId: string;
        fields: FormFieldInterface[];
    };
}