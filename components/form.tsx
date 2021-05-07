import React, { useState, SyntheticEvent } from 'react';
import SubmitButton from '../elements/submitButton';
import TextInput from '../elements/textInput';
import styles from './form.module.css';
import { postTestimonial } from '../services/airTableService';
import testimonial from '../interfaces/testimonial';

export default function Form() {
  const emptyForm: testimonial = {
    testimony: '',
    location: '',
    consent: false,
  };
  const [testimonial, setTestimonial] = useState(emptyForm);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setTestimonial(prevTestimonial => ({
      ...prevTestimonial,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await postTestimonial(testimonial);
    setTestimonial(emptyForm);
  };

  return (
    <div className={styles.form}>
      <div className={styles.form_invitation}>
        <h1>Share Your Testimony.</h1>
        <p>
          We want to hear from you. Everyone’s Invited was built on the voices
          of brave survivors who shared their testimonies with us. If you would
          like to share your experience please submit it below.
        </p>
        <br />
        <h3>** This is an anonymous submission form **</h3>
        <br />
        <p>
          Please do not include names. If names or specific details are included
          that compromise the anonymity of the testimony, your testimony will
          not be posted.
        </p>
      </div>
      <br />
      <form onSubmit={handleSubmit} className={styles.input_submission}>
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
        <SubmitButton
          className={styles.submit}
          value="Submit"
          type="submit"
          color="primary"
          bg="secondary"
        >
          Submit
        </SubmitButton>
      </form>
    </div>
  );
}
