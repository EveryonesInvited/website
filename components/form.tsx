import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import styled from 'styled-components';

import SubmitButton from '../elements/SubmitButton';
import TextInput from '../elements/TextInput';
import styles from './form.module.css';
import { postTestimonial } from '../services/airTableService';
import testimonial from '../interfaces/testimonial';

const FormContainer = styled.form`
  margin: 2rem 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Headings = styled.form``;

const Form: FC = () => {
  const emptyForm: testimonial = {
    testimony: '',
    location: '',
    consent: false,
  };
  const [testimonial, setTestimonial] = useState(emptyForm);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const name: string = e.target.name;
    const value: string | boolean =
      e.target.type === 'checkbox' ? !testimonial.consent : e.target.value;

    setTestimonial(prevTestimonial => ({
      ...prevTestimonial,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await postTestimonial(testimonial);
    setTestimonial(emptyForm);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Share Your Testimony.</h1>
      <p>
        We want to hear from you. Everyone’s Invited was built on the voices of
        brave survivors who shared their testimonies with us. If you would like
        to share your experience please submit it below.
      </p>
      <br />
      <h3>** This is an anonymous submission form **</h3>
      <br />
      <p>
        Please do not include names. If names or specific details are included
        that compromise the anonymity of the testimony, your testimony will not
        be posted.
      </p>
      <div className={styles.event__creator}>
        <div className={styles.input_testimony}>
          <h3>Testimony</h3>
          <br />
          <TextInput
            color="primary"
            bg="secondary"
            name="testimony"
            onChange={e => handleChange(e)}
            value={testimonial.testimony}
            placeholder="Insert a testimonial..."
            required
          />
        </div>
        <br />
        <div className={styles.input_location}>
          <h3>
            School / University / Organisation (Please include if possible)
          </h3>
          <br />
          <TextInput
            color="primary"
            bg="secondary"
            name="location"
            onChange={e => handleChange(e)}
            value={testimonial.location}
            placeholder="Insert a location..."
            required
          />
        </div>
        <br />
        <div className={styles.input_consent}>
          <input
            name="consent"
            onChange={e => handleChange(e)}
            checked={testimonial.consent}
            type="checkbox"
            required
          ></input>
          <h3> I have read and agree with the consent details</h3>
        </div>
        <br />
        <p>
          *Organisation covers any business, government, religious or military
          workplace/institution
        </p>
        <p>
          *By posting your testimony & ticking you agree to our{' '}
          <a href="">Privacy Policy</a>
        </p>
        <p>
          - You also agree to the conditions of anonymity of yourself and all
          persons mentioned - this pertains also to not copying testimonies on
          the site with the intention of reposting elsewhere where previously
          anonymous details may be revealed.
        </p>
        <p>
          - Please submit responsibly: this is an anonymous outlet only and
          Everyone's Invited does not condone the naming of any involved.
          Everyone’s Invited is not a substitute for a legitimate form of
          reporting, through an institution or via the police.
        </p>
      </div>
      <br />
      <SubmitButton label="Submit" />
    </FormContainer>
  );
};

export default Form;
