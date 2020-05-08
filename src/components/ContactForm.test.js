import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from "./ContactForm";

test('form can be filled in and submittied', () => {
    const { findByTestId, getByTestId } = render(<ContactForm />)

    const firstNameInput = getByTestId(/first-name/i);
    const lastNameInput = getByTestId(/last-name/i)
    const emailInput = getByTestId(/email/i)
    const messageInput = getByTestId(/message/i)
    const button = getByTestId(/submit-button/i)
    const pre = findByTestId(/pre/i)

    fireEvent.change(firstNameInput, { target: { value: 'Ernie' } });
    fireEvent.change(lastNameInput, { target: { value: 'Nettles' } });
    fireEvent.change(emailInput, { target: { value: 'ernie@ernie.com' } });
    fireEvent.change(messageInput, { target: { value: 'Is a lambda student' } });
    fireEvent.click(button)

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();

})
