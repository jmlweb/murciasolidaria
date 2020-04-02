import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Stack } from '@chakra-ui/core';
import PT from 'prop-types';
import { useMapper } from 'reactponsive';
import { FiBookOpen, FiUser } from 'react-icons/fi';

import FormCard from './FormCard';
import {
  FormGroup,
  FormNumeric,
  FormPhone,
  FormSelect,
} from '../../components';

const QTY_OPTIONS = {
  min: 1,
  max: 500,
  default: 50,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Nombre y apellidos'),
  email: Yup.string().email().required().label('Email'),
  qty: Yup.number()
    .required()
    .min(QTY_OPTIONS.min)
    .max(QTY_OPTIONS.max)
    .label('Cantidad'),
  org: Yup.string().required().label('Centro'),
  role: Yup.string().required().label('Cargo'),
  area: Yup.string().required().label('Área'),
  phone: Yup.string().required().label('Teléfono'),
});

const QtyInput = (props) => <FormNumeric {...props} {...QTY_OPTIONS} />;

const priorityOpts = [
  {
    value: 'low',
    label: 'Baja',
  },
  {
    value: 'mid',
    label: 'Media',
  },
  {
    value: 'high',
    label: 'Alta',
  },
];
const PrioritySelect = (props) => (
  <FormSelect options={priorityOpts} {...props} />
);

const RequestForm = ({ name, email, phone, onSubmit }) => {
  const initialValues = {
    name,
    email,
    phone,
    qty: QTY_OPTIONS.default,
    priority: 'mid',
    org: '',
    area: '',
    role: '',
  };
  const isInline = useMapper({
    default: false,
    lg: true,
  });
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid, touched, errors }) => (
        <Form>
          <Stack spacing={6} isInline={isInline}>
            <FormCard title="Datos de la solicitud" icon={FiBookOpen}>
              <Stack spacing={6}>
                <FormGroup
                  name="qty"
                  label="¿Cuántas unidades necesitas"
                  touched={touched}
                  errors={errors}
                  component={QtyInput}
                  helperText="Puedes solicitar entre 1 y 500 unidades"
                />
                <FormGroup
                  name="priority"
                  label="Urgencia de la solicitud"
                  touched={touched}
                  errors={errors}
                  component={PrioritySelect}
                />
                <FormGroup
                  name="org"
                  label="Centro para el que se solicita"
                  touched={touched}
                  errors={errors}
                />
                <FormGroup
                  name="area"
                  label="Área dentro del centro de trabajo"
                  touched={touched}
                  errors={errors}
                />
              </Stack>
            </FormCard>
            <FormCard title="Datos personales" icon={FiUser}>
              <Stack spacing={6}>
                <FormGroup
                  name="name"
                  label="Nombre y apellidos"
                  touched={touched}
                  errors={errors}
                />
                <FormGroup
                  name="email"
                  label="Email"
                  type="email"
                  touched={touched}
                  errors={errors}
                  helperText="No usaremos tu email con fines comerciales"
                />
                <FormGroup
                  name="phone"
                  label="Teléfono"
                  touched={touched}
                  errors={errors}
                  component={FormPhone}
                />
                <FormGroup
                  name="role"
                  label="Cargo"
                  touched={touched}
                  errors={errors}
                />
              </Stack>
            </FormCard>
          </Stack>
          <Box my={6}>
            <Button
              leftIcon="check-circle"
              variantColor="teal"
              size="lg"
              isLoading={isSubmitting}
              isDisabled={!isValid}
              type="submit"
            >
              Enviar solicitud
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

RequestForm.defaultProps = {
  name: '',
  email: '',
  phone: '',
};

RequestForm.propTypes = {
  name: PT.string,
  email: PT.string,
  phone: PT.string,
  onSubmit: PT.func.isRequired,
};

export default RequestForm;
