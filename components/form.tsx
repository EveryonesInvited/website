import React, { useState, ChangeEvent, FormEvent, FC, useCallback } from 'react';
import H1 from '../elements/H1';
import H3 from '../elements/H3';
import P from '../elements/P';
import SubmitButton from '../elements/SubmitButton';
import FormElement from '../elements/FormElement';
import TextInput from '../elements/TextInput';
import { postTestimonial } from '../services/airTableService';
import Testimonial from '../interfaces/testimonial';

const Form: FC = () => {
  const initialState: Testimonial = {
    testimony: '',
    location: '',
    consent: false,
  };

  const [testimony, setTestimony] = useState(initialState.testimony);
  const [location, setLocation] = useState(initialState.location);
  const [consent, setConsent] = useState(initialState.consent);


  const [hasError, setHasError] = useState(false);

  const handleTestimonyChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTestimony(e.target.value)
  }, [])

  const handleLocationChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocation(e.target.value)
  }, [])
  
  const handleConsentChange = useCallback(() => {
    setConsent(!consent)
  }, [consent])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setHasError(false)
    try {
      await postTestimonial({
        testimony,
        location,
        consent
      });
      setTestimony(initialState.testimony)
      setLocation(initialState.location)
      setConsent(initialState.consent)

    } catch (e) {
      setHasError(true)
    }
  };

  return (
    <FormElement m={7} py={1} px={6} onSubmit={handleSubmit}>
      <H1>"Share Your Testimony."</H1>
      <P>
        We want to hear from you. Everyone’s Invited was built on the voices of
        brave survivors who shared their testimonies with us. If you would like
        to share your experience please submit it below.
      </P>
      <H3>** This is an anonymous submission form **"</H3>
      <P>
        Please do not include names. If names or specific details are included
        that compromise the anonymity of the testimony, your testimony will not
        be posted.
      </P>
      <H3>Testimony</H3>
      <TextInput
        color="primary"
        bg="secondary"
        name="testimony"
        onChange={handleTestimonyChange}
        value={testimony}
        placeholder="Insert a testimonial..."
        required
      />
      <H3>School / University / Organisation (Please include if possible)</H3>
      <TextInput
        color="primary"
        bg="secondary"
        name="location"
        onChange={handleLocationChange}
        value={location}
        placeholder="Insert a location..."
        required
      />
      <input
        name="consent"
        onChange={handleConsentChange}
        checked={consent}
        type="checkbox"
        required
      />
      <P>"I have read and agree with the consent details</P>
      <P>
        *Organisation covers any business, government, religious or military
        workplace/institution
      </P>
      <P>
        *By posting your testimony & ticking you agree to our{' '}
        <a href="">Privacy Policy</a>
      </P>
      <P>
        - You also agree to the conditions of anonymity of yourself and all
        persons mentioned - this pertains also to not copying testimonies on the
        site with the intention of reposting elsewhere where previously
        anonymous details may be revealed.
      </P>
      <P>
        - Please submit responsibly: this is an anonymous outlet only and
        Everyone's Invited does not condone the naming of any involved.
        Everyone’s Invited is not a substitute for a legitimate form of
        reporting, through an institution or via the police.
      </P>
      {hasError && <P color="cabaret">There was an error when submitting your testimony, we've been notified and are working on it!</P>}
      <SubmitButton label="Submit" />
    </FormElement>
  );
};

export default Form;