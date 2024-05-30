// AppointmentForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { ModalDesc, ModalTitle } from 'components/Singup/Singup.styled';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone is required'),
  time: yup.date().required('Time is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  comment: yup.string(),
});

export const AppointmentForm = ({ psychologist, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
      <div>
        <img
          src={psychologist.avatar_url}
          alt={psychologist.name}
          width="96"
          height="96"
        />
        <h3>{psychologist.name}</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type="text" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Phone</label>
          <input type="text" {...register('phone')} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label>Time</label>
          <input type="datetime-local" {...register('time')} />
          {errors.time && <p>{errors.time.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Comment</label>
          <textarea {...register('comment')} />
          {errors.comment && <p>{errors.comment.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
