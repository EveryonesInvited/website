import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import styled from 'styled-components';
import Heading1 from '../elements/Heading1';
import Heading2 from '../elements/Heading3';
import Heading3 from '../elements/Heading3';
import Paragraph1 from '../elements/Paragraph1';
import SubmitButton from '../elements/SubmitButton';
import TextInput from '../elements/TextInput';
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
      <Heading1 label="Share Your Testimony."></Heading1>
      <Paragraph1>
        We want to hear from you. Everyone’s Invited was built on the voices of
        brave survivors who shared their testimonies with us. If you would like
        to share your experience please submit it below.
      </Paragraph1>
      <Heading3 label="** This is an anonymous submission form **"></Heading3>
      <Paragraph1>
        Please do not include names. If names or specific details are included
        that compromise the anonymity of the testimony, your testimony will not
        be posted.
      </Paragraph1>
      <Heading3 label="Testimony"></Heading3>
      <TextInput
        color="primary"
        bg="secondary"
        name="testimony"
        onChange={e => handleChange(e)}
        value={testimonial.testimony}
        placeholder="Insert a testimonial..."
        required
      />
      <Heading3 label="School / University / Organisation (Please include if possible)"></Heading3>
      <TextInput
        color="primary"
        bg="secondary"
        name="location"
        onChange={e => handleChange(e)}
        value={testimonial.location}
        placeholder="Insert a location..."
        required
      />
      <input
        name="consent"
        onChange={e => handleChange(e)}
        checked={testimonial.consent}
        type="checkbox"
        required
      ></input>
      <Paragraph1>"I have read and agree with the consent details</Paragraph1>
      <Paragraph1>
        *Organisation covers any business, government, religious or military
        workplace/institution
      </Paragraph1>
      <Paragraph1>
        *By posting your testimony & ticking you agree to our{' '}
        <a href="">Privacy Policy</a>
      </Paragraph1>
      <Paragraph1>
        - You also agree to the conditions of anonymity of yourself and all
        persons mentioned - this pertains also to not copying testimonies on the
        site with the intention of reposting elsewhere where previously
        anonymous details may be revealed.
      </Paragraph1>
      <Paragraph1>
        - Please submit responsibly: this is an anonymous outlet only and
        Everyone's Invited does not condone the naming of any involved.
        Everyone’s Invited is not a substitute for a legitimate form of
        reporting, through an institution or via the police.
      </Paragraph1>
      <SubmitButton label="Submit" />
    </FormContainer>
  );
};

export default Form;
