'use client';

import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import { useState } from 'react';
import Button from './UI/Button';
import { useTranslations } from 'next-intl';

type FormData = {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const t = useTranslations('contact.form');

  const onSubmit = async (formData: FormData) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData, null, 2),
    })
      .then(async (response) => {
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          reset();
          setMessage(t('success'));
        } else {
          setIsSuccess(false);
          setMessage(t('error'));
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage(t('error'));
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <input
        type='hidden'
        value='e7e963e2-98b3-4906-aa39-d29c022ea24c'
        {...register('access_key')}
      />
      <input
        type='hidden'
        value='Kontakt forma realvibestudio.com'
        {...register('from_name')}
      />
      <div className={styles.contactForm__group__wrapper}>
        <div className={styles.contactForm__fieldWrapper}>
          <input
            id='name'
            className={errors.name ? styles.inputError : ''}
            type='text'
            placeholder={t('name')}
            {...register('name', {
              required: { value: true, message: t('required') },
              maxLength: { value: 50, message: t('maxLength', { max: 50 }) },
            })}
            autoComplete='name'
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div className={styles.contactForm__fieldWrapper}>
          <input
            id='email'
            className={errors.email ? styles.inputError : ''}
            type='email'
            placeholder={t('email')}
            {...register('email', {
              required: { value: true, message: t('required') },
              pattern: {
                value: /^\S+@\S+$/i,
                message: t('emailPattern'),
              },
            })}
            autoComplete='email'
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className={styles.contactForm__fieldWrapper}>
        <input
          id='subject'
          className={errors.subject ? styles.inputError : ''}
          type='text'
          placeholder={t('subject')}
          {...register('subject', {
            required: { value: true, message: t('required') },
            maxLength: { value: 50, message: t('maxLength', { max: 50 }) },
          })}
          autoComplete='subject'
        />
        {errors.subject && (
          <p className={styles.error}>{errors.subject.message}</p>
        )}
      </div>

      <div className={styles.contactForm__fieldWrapper}>
        <textarea
          id='message'
          className={errors.message ? styles.inputError : ''}
          placeholder={t('message')}
          rows={9}
          {...register('message', {
            required: { value: true, message: t('required') },
            minLength: { value: 10, message: t('minLength', { min: 10 }) },
            maxLength: { value: 1000, message: t('maxLength', { max: 1000 }) },
          })}
        />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
        {message && (
          <p
            className={isSuccess ? styles.successMessage : styles.errorMessage}
          >
            {message}
          </p>
        )}
      </div>

      <Button type='submit' isContactFormButton={true}>
        <span>{t('button')}</span>
      </Button>
    </form>
  );
};

export default ContactForm;
