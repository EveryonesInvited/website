import React, { useState } from 'react';
import SubmitButton from '../elements/submitButton';
import TextInput from '../elements/textInput';
import styles from './form.module.css';

// { createTestimonial }
export default function Form() {
  const initialState = { testimony: '', location: '', consent: '' };
  const [event, setEvent] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
    console.log(event);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { testimony, location, consent } = event;
    // createTestimonial(event);
    setEvent(initialState);
  };

  return (
    <div className={styles.form}>
      <div>
        <h1>Share Your Testimony.</h1>
        <p className={styles.form_paragraph}>
          We want to hear from you. Everyone’s Invited was built on the voices
          of brave survivors who shared their testimonies with us. If you would
          like to share your experience please submit it below.
        </p>
        <h3>This is an anonymous submission form. </h3>
        <p>
          Please do not include names. If names or specific details are included
          that compromise the anonymity of the testimony, your testimony will
          not be posted.
        </p>
      </div>
      <form className="Event__Creator" onSubmit={handleSubmit}>
        <div className="form_testimony">
          <h3>Testimony</h3>
          <TextInput
            className="input_testimony"
            color="primary"
            bg="secondary"
            name="testimony"
            onChange={handleChange}
            value={event.testimony}
            type="textarea"
            placeholder="Insert a testimonial..."
            required
          />
        </div>

        <div className="form_location">
          <h3>School/University/Organisation</h3>
          <p>Please include if possible.</p>
          <TextInput
            className="input_location"
            color="primary"
            bg="secondary"
            name="location"
            onChange={handleChange}
            value={event.location}
            placeholder="Insert a location..."
            required
          />
        </div>

        <div className="input_consent">
          <h3>Consent *</h3>
          <input
            className="input_consent"
            name="consent"
            onChange={handleChange}
            value={event.consent}
            type="checkbox"
            required
          ></input>
        </div>

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

        <SubmitButton
          className="submit-container"
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
