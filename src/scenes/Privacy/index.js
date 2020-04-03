import React from 'react';
import { Heading, Text, Stack, List, ListItem } from '@chakra-ui/core';

import { CommonLink, Container, MainLayout } from '../../components';

const fontSize = ['lg', 'lg', 'xl'];

const Privacy = () => {
  return (
    <MainLayout>
      <Container maxWidth="4xl">
        <Stack my={[8, 10]} spacing={6}>
          <Heading as="h1" size="lg" fontSize={['24px', '32px']} mb={2}>
            POLÍTICA DE PRIVACIDAD
          </Heading>
          <Text fontSize={fontSize}>
            Esta política de privacidad ha sido redactada al amparo de lo
            dispuesto en el REGLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO Y
            DEL CONSEJO de 27 de abril de 2016 relativo a la protección de las
            personas físicas en lo que respecta al tratamiento de datos
            personales y a la libre circulación de estos datos (RGPD) y en la
            Ley Orgánica 3/2018 de 5 de diciembre, de Protección de Datos y
            garantía de los derechos digitales (LOPDGDD).
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Quién es el responsable de los datos personales que recabamos en
            esta web?
          </Heading>
          <Text fontSize={fontSize}>
            El responsable del tratamiento es <strong>NIDO ROBOTICS SL</strong>,
            con NIF NIF B30900005, con domicilio a estos efectos en calle Campus
            de Espinardo 7, 30100, Murcia y dirección electrónica de contacto
            <CommonLink href="mailto:hola@murciasolidaria.com">
              hola@murciasolidaria.com
            </CommonLink>
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Qué datos vamos a obtener de ti?
          </Heading>
          <Text fontSize={fontSize}>
            En nuestra web los únicos datos personales que podremos recabar de
            ti son los necesarios para facilitar la navegación por nuestro
            portal y en su caso los datos que nos facilites en nuestro
            formulario de solicitud de material sanitario (nombre, email,
            teléfono y cargo en la empresa)
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Cuál es la finalidad de este tratamiento de datos?
          </Heading>
          <Text fontSize={fontSize}>
            Trataremos tus datos personales para las siguientes finalidades:
          </Text>
          <List fontSize={fontSize}>
            <ListItem>
              Dar respuesta a las solicitudes de material que solicites a través
              del formulario presente en la web.
            </ListItem>
            <ListItem>Permitir la navegación por nuestra página web.</ListItem>
          </List>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Cuál es la base jurídica de estos tratamientos de datos?
          </Heading>
          <Text fontSize={fontSize}>
            La base jurídica es el consentimiento cuando nos envías los datos a
            través del formulario de solicitud de pantallas y el interés
            legítimo en mostrarte el contenido de nuestra página web.
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Durante cuánto tiempo se van a conservar los datos?
          </Heading>
          <Text fontSize={fontSize}>
            Conservaremos tus datos indefinidamente para mantener tu contacto y
            datos estadísticos anónimos.
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            Destinatario o categorías de destinatarios de los datos
          </Heading>
          <Text fontSize={fontSize}>
            Tus datos personales serán cedidos, en caso de necesidad, a los
            fabricantes de los equipos de protección de comunidades limítrofes
            para facilitar la comunicación y entrega de los equipos
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            Transferencias internacionales de datos
          </Heading>
          <Text fontSize={fontSize}>
            No realizamos transferencias internacionales de datos de ningún tipo
            ni categoría.
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Qué derechos asisten al interesado?
          </Heading>
          <Text fontSize={fontSize}>
            El RGPD te otorga los siguientes derechos, que podrás ejercerlos
            enviando un correo electrónico a la dirección del responsable del
            tratamiento.
          </Text>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Derecho de acceso
          </Heading>
          <Text fontSize={fontSize}>
            Tienes derecho a obtener confirmación de si se están tratando o no
            datos personales que te conciernen y, en tal caso, derecho de acceso
            a los datos personales y a la información relacionada con su
            tratamiento.
          </Text>
          <Text fontSize={fontSize}>
            Tienes derecho a obtener una copia de los datos personales objeto de
            tratamiento.
          </Text>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Derecho de rectificación
          </Heading>
          <Text fontSize={fontSize}>
            Tienes derecho a obtener sin dilación indebida la rectificación de
            los datos personales inexactos que te conciernen. Teniendo en cuenta
            los fines del tratamiento, tendrás derecho a que se completen los
            datos personales que sean incompletos.
          </Text>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Derecho de supresión
          </Heading>
          <Text fontSize={fontSize}>
            Tienes derecho a obtener sin dilación indebida la supresión de los
            datos personales que te conciernen.
          </Text>
          <Text fontSize={fontSize}>
            Estamos obligados a suprimir sin dilación indebida los datos
            personales cuando concurra alguna de las circunstancias siguientes:
          </Text>
          <List fontSize={fontSize}>
            <ListItem>
              a) los datos personales ya no sean necesarios en relación con los
              fines para los que fueron recogidos o tratados de otro modo;
            </ListItem>
            <ListItem>
              b) el interesado retire el consentimiento prestado para fines
              específicos o el consentimiento expreso prestado para el
              tratamiento de categorías especiales de datos, como los que
              revelen sus opiniones políticas, mientras este tratamiento no se
              base en otro fundamento jurídico;
            </ListItem>
            <ListItem>
              c) el interesado se oponga al tratamiento por motivos relacionados
              con su situación particular y no prevalezcan otros motivos
              legítimos para el tratamiento;
            </ListItem>
            <ListItem>
              d) los datos personales hayan sido tratados ilícitamente;
            </ListItem>
            <ListItem>
              e) los datos personales deban suprimirse para el cumplimiento de
              una obligación legal establecida en el Derecho de la Unión o de
              los Estados miembros que se aplique al responsable del
              tratamiento.
            </ListItem>
          </List>
          <Text fontSize={fontSize}>
            No será aplicable la obligación de supresión de los datos personales
            cuando el tratamiento sea necesario para:
          </Text>
          <List fontSize={fontSize}>
            <ListItem>
              a) ejercer el derecho a la libertad de expresión e información;
            </ListItem>
            <ListItem>
              b) el cumplimiento de una obligación legal que requiera el
              tratamiento de datos impuesta por el Derecho de la Unión o de los
              Estados miembros que se aplique al responsable del tratamiento;
            </ListItem>
            <ListItem>
              c) el cumplimiento de una misión realizada en interés público o en
              el ejercicio de poderes públicos conferidos al responsable;
            </ListItem>
            <ListItem>
              d) con fines de archivo en interés público, fines de investigación
              científica o histórica o fines estadísticos, en la medida en que
              el derecho a la supresión pudiera hacer imposible u obstaculizar
              gravemente el logro de los objetivos de dicho tratamiento;
            </ListItem>
            <ListItem>
              e) para la formulación, el ejercicio o la defensa de
              reclamaciones.
            </ListItem>
          </List>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Limitación del tratamiento
          </Heading>
          <Text fontSize={fontSize}>
            Tienes derecho a obtener la limitación del tratamiento de los datos
            cuando se cumpla alguna de las condiciones siguientes:
          </Text>
          <List fontSize={fontSize}>
            <ListItem>
              a) Impugnes la exactitud de los datos personales, durante un plazo
              que nos permita verificar la exactitud de los mismos;
            </ListItem>
            <ListItem>
              b) El tratamiento sea ilícito y te opongas a la supresión de los
              datos personales y solicites en su lugar la limitación de su uso;
            </ListItem>
            <ListItem>
              c) No necesitemos los datos personales para los fines del
              tratamiento, pero los necesites para la formulación, el ejercicio
              o la defensa de reclamaciones;
            </ListItem>
            <ListItem>
              d) Te hayas opuesto al tratamiento por motivos relacionados con tu
              situación particular, mientras se verifica si los motivos
              legítimos como responsable del tratamiento prevalecen sobre los
              del interesado.
            </ListItem>
          </List>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Portabilidad de los datos
          </Heading>
          <Text fontSize={fontSize}>
            Tienes derecho a recibir los datos personales que te incumban, en un
            formato estructurado, de uso común y lectura mecánica.
          </Text>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Oposición al tratamiento
          </Heading>
          <Text fontSize={fontSize}>
            Tienes derecho a oponerte en cualquier momento, por motivos
            relacionados con tu situación particular, a que datos personales que
            te conciernan sean objeto de un tratamiento basado en lo dispuesto
            en el artículo 6, apartado 1, letras e) o f) del RGPD. Dejaremos de
            tratar los datos personales, salvo que acreditemos motivos legítimos
            imperiosos para el tratamiento que prevalezcan sobre los intereses,
            los derechos y las libertades del interesado, o para la formulación,
            el ejercicio o la defensa de reclamaciones.
          </Text>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Revocación del consentimiento
          </Heading>
          <Text fontSize={fontSize}>
            Tienes derecho a retirar en cualquier momento el consentimiento que
            nos diste para tratar tus datos personales.
          </Text>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Reclamación ante las autoridades de protección de datos
          </Heading>
          <Text fontSize={fontSize}>
            Tienes derecho a reclamar ante las autoridades de control en materia
            de protección de datos si consideras que tus datos personales no
            están siendo tratados de forma correcta.
          </Text>
          <Text fontSize={fontSize}>
            En este caso, la autoridad competente es la Agencia Española de
            Protección de Datos. Puede ejercer sus derechos en la siguiente
            dirección:{' '}
            <CommonLink href="https://sedeagpd.gob.es/sede-electronica-web/vistas/infoSede/inicio.jsf">
              https://sedeagpd.gob.es/sede-electronica-web/vistas/infoSede/inicio.jsf
            </CommonLink>
          </Text>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Tratamiento de los datos de menores de edad
          </Heading>
          <Text fontSize={fontSize}>
            Nuestros servicios deben ser utilizados por mayores de 18 años, por
            lo que en el caso de que no tengas esta edad deberás abstenerte de
            utilizarlos.
          </Text>
          <Text fontSize={fontSize}>
            Podremos requerir documentación oficial para acreditar la edad.
          </Text>
          <Heading as="h3" fontSize={['16px', '24px']} mb={2}>
            Modificación de la presente política de privacidad
          </Heading>
          <Text fontSize={fontSize}>
            Debido a las novedades legislativas y jurisprudenciales, la presente
            política de privacidad puede sufrir modificaciones para adaptarse a
            las nuevas realidades jurídicas. En dichos supuestos, el responsable
            anunciará en esta página los cambios introducidos con razonable
            antelación a su puesta en práctica.
          </Text>
        </Stack>
      </Container>
    </MainLayout>
  );
};

export default Privacy;
