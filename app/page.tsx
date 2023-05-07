'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { UserContext } from '@/context/UserContext';
import Button from '@/components/button';
import { brownPro } from '@/app/layout';

const WrapperStyles = styled.div`
  margin-top: 64px;
  min-height: 60vh;

  .header {
    padding: 0 40px;
  }

  h1 {
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 18px;
  }

  .description {
    width: 75%;
    line-height: 24px;
  }
`;

const FormBodyStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 40px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const FormFieldStyles = styled.div`
  width: 50%;

  &.child-name {
    width: 40%;
  }

  label {
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 960px) {
    width: 100%;

    &.child-name {
      width: 100%;
    }
  }
`;

const InputStyles = styled.input`
  padding: 0;
  padding-left: 1rem;
  height: 50px;
  border: 1px solid #9aa5af;
  border-radius: 2px;
  margin-top: 4px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 18px;
`;

const FormFooterStyles = styled.div`
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;

  .contact {
    max-width: 562px;
  }

  button {
    margin-left: 63px;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    .contact {
      order: 1;
      font-size: 14px;
      line-height: 20px;
      margin-top: 10px;
    }

    button {
      margin: 0 auto;
      max-width: 300px;
    }
  }
`;

const ErrorStyles = styled.div`
  color: red;
`;

export default function Home() {
  const { user, dispatch } = useContext(UserContext);
  const [formErrors, setFormErrors] = useState({ birthday: '' });
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, birthday } = user;
    const errors = { birthday: '' };

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(birthday)) {
      errors.birthday = 'Birthday must be in the format MM/DD/YYYY';
    }

    if (errors.birthday) {
      setFormErrors(errors);
      return;
    }

    dispatch({ type: 'SET_NAME', payload: name });
    dispatch({ type: 'SET_BIRTHDAY', payload: birthday });

    router.push('/products');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const actionMap: { [key: string]: () => void } = {
      name: () => dispatch({ type: 'SET_NAME', payload: value }),
      birthday: () => dispatch({ type: 'SET_BIRTHDAY', payload: value }),
    };

    actionMap[name]();
  };

  return (
    <WrapperStyles>
      <div className="header">
        <h1>Build Your Play Kits Subscription</h1>
        <h2>Your Child’s Info</h2>
        <p className="description">
          Sharing your child’s birth date/due date/adjusted birth date helps us guide you to the right Play Kit for your
          child’s development.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <FormBodyStyles>
          <FormFieldStyles className="child-name">
            <label>Child’s Name (Optional):</label>
            <InputStyles
              type="text"
              className={brownPro.className}
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="First Name"
              maxLength={30}
            />
          </FormFieldStyles>
          <FormFieldStyles>
            <label>Child’s Birth Date / Due Date / Adjusted Birth Date:</label>
            <div>
              <InputStyles
                type="text"
                className={brownPro.className}
                name="birthday"
                value={user.birthday}
                onChange={handleChange}
                placeholder="MM/DD/YYYY"
                required
              />
              {formErrors.birthday && <ErrorStyles>{formErrors.birthday}</ErrorStyles>}
            </div>
          </FormFieldStyles>
        </FormBodyStyles>
        <hr />
        <FormFooterStyles>
          <p className="contact">
            Every child’s development is important to us. If your child has a disability and/or learning exceptionality,
            please{' '}
            <a href="https://lovevery.com/pages/disability" target="_blank">
              contact us
            </a>{' '}
            and we’d be happy to assist with a recommendation.
          </p>
          <Button type="submit" width={450}>
            Next
          </Button>
        </FormFooterStyles>
      </form>
    </WrapperStyles>
  );
}
