import React, { useCallback, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { BsArrowRight } from 'react-icons/bs';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import backgroundImg from '../../assets/background.jpg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, OverlayImage, Content, SectionButtons } from './styles';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import validCPF from '../../utils/validCPF';
import { useToast } from '../../hooks/toast';
import { IUserProps } from '../Dashboard/User';

interface IFromState {
  name: string;
  email: string;
  cpf: string;
  phone: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [formValid, setFormValid] = useState(false);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSignUp = useCallback(async (data: IFromState) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string()
          .matches(
            /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{2,}$/,
            'Nome inválido.',
          )
          .required('Campo obrigatório.'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('Campo obrigatório.'),
        cpf: Yup.string().required('Campo obrigatório.'),
        phone: Yup.string()
          .min(8, 'Número muito pequeno.')
          .max(11, 'Número inválido')
          .matches(/[0-9]{8,11}/, 'Somente os números')
          .required('Campo obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (!validCPF(data.cpf)) {
        formRef.current?.setFieldError('cpf', 'CPF inválido.');
        throw new Error();
      }

      const storagedUser = localStorage.getItem('@Lean:users');

      const user = {
        id: uuid(),
        name: data.name,
        email: data.email,
        cpf: data.cpf.replace('.', '').replace('.', '').replace('-', ''),
        phone: data.phone.replace('.', '').replace('.', '').replace('-', ''),
      };

      let users: [IUserProps] = [{} as IUserProps];

      if (storagedUser) {
        users = JSON.parse(storagedUser);
        users.push(user);
        localStorage.setItem('@Lean:users', JSON.stringify(users));
      } else {
        localStorage.setItem('@Lean:users', JSON.stringify([user]));
      }

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso!',
        description: 'Você agora faz parte do grupo, seja bem vindo!',
      });

      history.push('/dashboard');
    } catch (err) {
      // console.log(err);

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
    }
  }, []);

  const handleLoveCoffe = useCallback(() => {
    addToast({
      type: 'success',
      title: 'Nós amamos café!',
      description: 'Quer fazer grupo, faça seu cadastro!',
    });
  }, []);

  const handleValidForm = useCallback(() => {
    const validate =
      !!formRef.current?.getFieldValue('name') &&
      !!formRef.current?.getFieldValue('email') &&
      !!formRef.current?.getFieldValue('cpf') &&
      !!formRef.current?.getFieldValue('phone');
    setFormValid(validate);
  }, []);

  return (
    <Container>
      <OverlayImage onClick={handleLoveCoffe} data-testid="background-img">
        <img src={backgroundImg} alt="Coffee" />
      </OverlayImage>
      <Content>
        <h2>Lean Cadastro</h2>

        <Form
          ref={formRef}
          onSubmit={handleSignUp}
          onChange={() => handleValidForm()}
        >
          <Input data-testid="input-name" name="name" label="Nome completo" />
          <Input
            data-testid="input-email"
            name="email"
            label="E-mail"
            type="email"
          />
          <Input
            data-testid="input-cpf"
            name="cpf"
            label="CPF"
            maxLength={14}
          />
          <Input
            data-testid="input-phone"
            name="phone"
            label="Telefone"
            maxLength={11}
          />

          <SectionButtons>
            <Button type="submit" available={formValid} disabled={!formValid}>
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
