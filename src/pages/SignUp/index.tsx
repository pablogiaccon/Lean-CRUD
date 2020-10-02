import React, { useCallback, useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import backgroundImg from '../../assets/background.jpg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, OverlayImage, Content, SectionButtons } from './styles';
import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

interface IFromState {
  name: string;
  email: string;
  cpf: string;
  phone: number;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSignUp = useCallback(async (data: IFromState) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório.'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('Campo obrigatório.'),
        cpf: Yup.string().required('Campo obrigatório.'),
        phone: Yup.string()
          .max(11, 'Número inválido')
          .min(8, 'Número muito pequeno.')
          .required('Campo obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
    }
  }, []);

  return (
    <Container>
      <OverlayImage>
        <img src={backgroundImg} alt="Coffee" />
      </OverlayImage>
      <Content>
        <h2>Lean Cadastro</h2>

        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input name="name" label="Nome completo" />
          <Input name="email" label="E-mail" type="email" />
          <Input name="cpf" label="CPF" />
          <Input name="phone" label="Telefone" type="number" />

          <SectionButtons>
            <Button type="submit" available={true} disabled={false}>
              Cadastrar
            </Button>
            <Link to="/dashboard">
              Login <BsArrowRight />
            </Link>
          </SectionButtons>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
