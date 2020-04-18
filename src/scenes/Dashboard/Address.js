import React, { useState } from 'react';
import PT from 'prop-types';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Link,
} from '@chakra-ui/core';
import { FiMapPin } from 'react-icons/fi';

const validationSchema = Yup.object().shape({
  message: Yup.string().label('Dirección'),
});

const AddressForm = ({ initialValue, cb }) => {
  const onSubmit = ({ message }, { setSubmitting }) => {
    cb(message);
    setSubmitting(false);
  };
  const initialValues = {
    message: initialValue,
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, isSubmitting }) => (
        <Form>
          <FastField name="message">
            {({ field }) => (
              <InputGroup>
                <Input pr="4.7rem" placeholder="Dirección" {...field} />
                <InputRightElement width="4.7rem">
                  <Button
                    type="submit"
                    h="1.75rem"
                    size="sm"
                    mr={1}
                    disabled={!isValid || isSubmitting}
                    isLoading={isSubmitting}
                    loadingText="Guardando"
                  >
                    Guardar
                  </Button>
                </InputRightElement>
              </InputGroup>
            )}
          </FastField>
        </Form>
      )}
    </Formik>
  );
};

AddressForm.propTypes = {
  initialValue: PT.string.isRequired,
  cb: PT.func.isRequired,
};

const AddressText = ({ toggle, value }) => (
  <Stack isInline spacing={1} alignItems="center">
    {value ? (
      <Button
        as={Link}
        href={`https://www.google.com/maps/search/?api=1&query=${value}`}
        rel="external"
        target="_blank"
        size="sm"
        leftIcon={FiMapPin}
      >
        {value}
      </Button>
    ) : (
      <Button onClick={toggle} size="sm" leftIcon={FiMapPin}>
        Sin dirección
      </Button>
    )}
  </Stack>
);

AddressText.propTypes = {
  toggle: PT.func.isRequired,
  value: PT.string.isRequired,
};

const Address = ({ value, updateFn }) => {
  const [isActive, setIsActive] = useState(false);
  const formCB = async (newMessage) => {
    await updateFn({
      address: newMessage,
    });
    setIsActive(false);
  };
  return !isActive ? (
    <AddressText toggle={() => setIsActive(true)} value={value} />
  ) : (
    <AddressForm initialValue={value} cb={formCB} />
  );
};

Address.defaultProps = {
  value: '',
};

Address.propTypes = {
  value: PT.string,
  updateFn: PT.func.isRequired,
};

export default Address;
