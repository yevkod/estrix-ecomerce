import { useState } from 'react'
import validateInfo, { FormValues } from '../helpers/validateInfo';
import { Focused } from 'react-credit-cards';

export interface Errors {
    message: string;
    variant: string;
    show: boolean;
    cname: boolean;
    cnumb: boolean;
    ctype: boolean;
    cexp: boolean;
    ccvv: boolean;
    cpostal: boolean;
    focus?: Focused | '';
}

export const useForm = () => {
    const [values, setValues] = useState<FormValues>({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        expirationDate: {
            isValid: false,
            isPotentiallyValid: false,
            month: '',
            year: ''
        },
        cvv: {
            isValid: false,
            isPotentiallyValid: false,
        },
        cardholderName: {
            isValid: false,
            isPotentiallyValid: false,
        },
        postalCode: {
            isValid: false,
            isPotentiallyValid: false,
        },
        focus: undefined,
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : (e.target.name as Focused)
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors(validateInfo(values))
    };

    return { handleChange, handleFocus, handleSubmit, values, errors };
};