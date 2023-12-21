import React from 'react';
import { Formik, Field, Form } from 'formik';
import './styles.scss';
import CustomButton from '../../shared/buttons/CustomButton';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialValues: FormValues = { name: '', email: '', message: '' };

  const handleSubmit = (values: FormValues, actions: {
    setSubmitting: (isSubmitting: boolean) => void;
    resetForm: () => void;
  }) => {
    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'recipient@example.com',
        subject: `Message from ${values.name}`,
        text: `${values.message}\nFrom: ${values.email}`,
      }),
    })
    .then(() => {
      actions.setSubmitting(false);
      actions.resetForm();
    })
    .catch(() => {
      actions.setSubmitting(false);
    });
  };

  return (
    <div className="contact-form">
      <h2>Leave a message</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="name" placeholder="Name" />
          <Field name="email" placeholder="E-mail" />
          <Field name="message" as="textarea" placeholder="Message" />
          <CustomButton buttonText="Submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;