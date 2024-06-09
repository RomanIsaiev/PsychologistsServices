import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Input, ModalDesc, ModalTitle } from 'components/Singup/Singup.styled';
import {
  AttentionForm,
  CommentInput,
  NameContainer,
  NameSubtitle,
  PhoneContainer,
  PhoneInput,
  PhoneTimeContainer,
  PsychologistContainer,
  PsychologistImage,
  PsychologistName,
  SendBtn,
  TimeContainer,
} from './AppointmentForm.styled';
import TimePicker from 'components/Custom/TimePicker/TimePicker';

const phoneRegExp = /^\+?[1-9]\d{1,14}$/;

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  time: yup.string().required('Time is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  comment: yup.string(),
});

export const AppointmentForm = ({ psychologist, onClose }) => {
  const [phoneValue, setPhoneValue] = useState('+380');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handlePhoneChange = e => {
    setPhoneValue(e.target.value);
    setValue('phone', e.target.value);
  };

  const handleTimeChange = time => {
    setValue('time', time);
  };

  const onSubmit = () => {
    toast.success('Appointment booked successfully!');
    onClose();
  };

  return (
    <div>
      <ModalTitle>Make an appointment with a psychologist</ModalTitle>
      <ModalDesc>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </ModalDesc>
      <PsychologistContainer>
        <PsychologistImage
          src={psychologist.avatar_url}
          alt={psychologist.name}
          width="96"
          height="96"
        />
        <NameContainer>
          <NameSubtitle>Your psychologist</NameSubtitle>
          <PsychologistName>{psychologist.name}</PsychologistName>
        </NameContainer>
      </PsychologistContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input type="text" {...register('name')} placeholder="Name" />
          {errors.name && <AttentionForm>{errors.name.message}</AttentionForm>}
        </div>
        <PhoneTimeContainer>
          <PhoneContainer>
            <PhoneInput
              type="text"
              {...register('phone')}
              value={phoneValue}
              onChange={handlePhoneChange}
            />
            {errors.phone && (
              <AttentionForm>{errors.phone.message}</AttentionForm>
            )}
          </PhoneContainer>
          <TimeContainer>
            <TimePicker onChange={handleTimeChange} />
            {errors.time && (
              <AttentionForm>{errors.time.message}</AttentionForm>
            )}
          </TimeContainer>
        </PhoneTimeContainer>
        <div>
          <Input type="email" {...register('email')} placeholder="Email" />
          {errors.email && (
            <AttentionForm>{errors.email.message}</AttentionForm>
          )}
        </div>
        <div>
          <CommentInput {...register('comment')} placeholder="Comment" />
          {errors.comment && (
            <AttentionForm>{errors.comment.message}</AttentionForm>
          )}
        </div>
        <SendBtn type="submit">Submit</SendBtn>
      </form>
    </div>
  );
};
