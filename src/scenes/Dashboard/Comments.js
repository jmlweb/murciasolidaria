import React, { useState } from 'react';
import PT from 'prop-types';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Stack,
  IconButton,
  InputGroup,
  Input,
  InputRightElement,
  Text,
} from '@chakra-ui/core';

const validationSchema = Yup.object().shape({
  message: Yup.string().label('Comentarios'),
});

const CommentsForm = ({ initialValue, cb }) => {
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
                <Input pr="4.7rem" placeholder="Comentarios" {...field} />
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

CommentsForm.propTypes = {
  initialValue: PT.string.isRequired,
  cb: PT.func.isRequired,
};

const CommentsText = ({ toggle, value }) => (
  <Stack isInline spacing={2} alignItems="center">
    {value ? (
      <IconButton icon="edit" size="sm" onClick={toggle} />
    ) : (
      <Button onClick={toggle} size="sm" leftIcon="edit">
        Sin comentarios
      </Button>
    )}
    {value && (
      <Text backgroundColor="teal.100" fontSize="sm" px={2} py={1}>
        {value}
      </Text>
    )}
  </Stack>
);

CommentsText.propTypes = {
  toggle: PT.func.isRequired,
  value: PT.string.isRequired,
};

const Comments = ({ value, updateFn }) => {
  const [isActive, setIsActive] = useState(false);
  const formCB = async (newMessage) => {
    await updateFn({
      comments: newMessage,
    });
    setIsActive(false);
  };
  return !isActive ? (
    <CommentsText toggle={() => setIsActive(true)} value={value} />
  ) : (
    <CommentsForm initialValue={value} cb={formCB} />
  );
};

Comments.defaultProps = {
  value: '',
};

Comments.propTypes = {
  value: PT.string,
  updateFn: PT.func.isRequired,
};

export default Comments;
