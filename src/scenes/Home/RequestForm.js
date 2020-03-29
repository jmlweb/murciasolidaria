import React from 'react';
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/core';

const RequestForm = () => (
  <form>
    <Heading as="h3" size="lg" mt={4} mb={4}>
      Datos de la solicitud
    </Heading>
    <Stack spacing={6}>
      <FormControl>
        <FormLabel htmlFor="qty">¿Cuántas unidades necesitas?</FormLabel>
        <NumberInput defaultValue={10} step={10} min={10} max={500}>
          <NumberInputField id="qty" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="priority">Urgencia de la solicitud</FormLabel>
        <Select defaultValue="media">
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="org">Centro para el que se solicita</FormLabel>
        <Input id="org" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="area">Área dentro del centro</FormLabel>
        <Input id="area" />
      </FormControl>
    </Stack>
    <Heading as="h3" size="lg" mt={6} mb={4}>
      Datos personales
    </Heading>
    <Stack spacing={6}>
      <FormControl>
        <FormLabel htmlFor="name">Nombre y apellidos</FormLabel>
        <Input id="name" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input type="email" id="email" aria-describedby="email-helper-text" />
        <FormHelperText id="email-helper-text">
          No se usará con fines publicitarios
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="phone">Teléfono</FormLabel>
        <InputGroup>
          <InputLeftAddon>+34</InputLeftAddon>
          <Input type="tel" roundedLeft="0" id="phone" />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="role">Cargo</FormLabel>
        <Input id="role" />
      </FormControl>
    </Stack>
    <Box mt={8}>
      <Button
        leftIcon="check-circle"
        width="100%"
        variantColor="green"
        size="lg"
      >
        Solicitar
      </Button>
    </Box>
  </form>
);

export default RequestForm;
