import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Stack, Text, SimpleGrid } from '@chakra-ui/core';
import PT from 'prop-types';
import { useMapper } from 'reactponsive';
import { FiBookOpen, FiUser } from 'react-icons/fi';

import FormCard from './FormCard';
import {
  CommonLink,
  CommonInternalLink,
  FormCheckbox,
  FormGroup,
  FormNumeric,
  FormPhone,
  FormSelect,
} from '../../components/index';

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
  area: Yup.string().label('Área'),
  phone: Yup.string().required().label('Teléfono'),
  conditions: Yup.boolean().oneOf([true], 'Por favor, acepta las condiciones'),
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
    address: '',
    role: '',
    conditions: false,
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
                <SimpleGrid spacing={6} columns={[1, 2]}>
                  <FormGroup
                    name="qty"
                    label="Nº unidades"
                    touched={touched}
                    errors={errors}
                    component={QtyInput}
                    helperText="Puedes solicitar entre 1 y 500"
                  />
                  <FormGroup
                    name="priority"
                    label="Urgencia de la solicitud"
                    touched={touched}
                    errors={errors}
                    component={PrioritySelect}
                  />
                </SimpleGrid>
                <FormGroup
                  name="org"
                  label="Nombre del centro"
                  touched={touched}
                  errors={errors}
                />
                <FormGroup
                  name="area"
                  label="Área dentro del centro"
                  isRequired={false}
                  placeholder="Necesario en caso de hospital, etc"
                  touched={touched}
                  errors={errors}
                />
                <FormGroup
                  name="address"
                  label="Dirección para el envío"
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
            <FormCheckbox name="conditions">
              Acepto el tratamiento de mis datos personales para las finalidades
              siguientes:
            </FormCheckbox>
            <Text fontSize="sm" mt={2}>
              NIDO ROBOTICS SL, recabará los datos necesarios para poder
              gestionar la petición de equipos de protección, lo que incluye la
              comunicación a través de los datos que nos ha facilitado
              (preferentemente por teléfono). También le informamos de sus
              derechos de acceso, rectificación, supresión, oposición,
              limitación, portabilidad y de acudir a la autoridad de control (
              <CommonLink href="http://www.aepd.es">www.aepd.es</CommonLink>).
              Para más información, consulte nuestra{' '}
              <CommonInternalLink to="/politica-privacidad">
                política de privacidad
              </CommonInternalLink>
              .
            </Text>
          </Box>
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
