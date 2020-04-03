import React from 'react';
import { Box, Heading, Text, Stack, List, ListItem } from '@chakra-ui/core';

import { CommonLink, Container, MainLayout } from '../../components';

const fontSize = ['lg', 'lg', 'xl'];

const Cookies = () => {
  return (
    <MainLayout>
      <Container maxWidth="4xl">
        <Stack my={[8, 10]} spacing={6}>
          <Heading as="h1" size="lg" fontSize={['24px', '32px']} mb={2}>
            POLÍTICA DE COOKIES
          </Heading>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Qué son las cookies?
          </Heading>
          <Text fontSize={fontSize}>
            Las cookies son pequeños ficheros de texto, los cuales son
            insertados de forma automática en aquellos dispositivos telemáticos
            empleados por el usuario cuando efectúa una visita al sitio web.
            Estos archivos que se descargan pueden almacenar datos que podrán
            ser actualizados y recuperados por la entidad responsable de su
            instalación. Estos archivos permiten conocer, con fines
            estadísticos, de mejora del servicio y adaptación de éste a sus
            preferencias, cuál es su comportamiento al navegar por la web. Las
            cookies se asocian únicamente a su navegador y no proporcionan por
            sí mismas datos personales. Las cookies no pueden dañar su
            dispositivo y además son muy útiles, ya que ayudan a identificar y
            resolver errores.
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Qué tipos de cookies hay?
          </Heading>
          <List fontSize={fontSize}>
            <ListItem>
              <strong>Cookies propias o de terceros:</strong> son propias cuando
              las cookies se gestionan desde el terminal o dominio de un mismo
              editor. De terceros, cuando se gestionan desde una entidad ajena
              al responsable de la web.
            </ListItem>
            <ListItem>
              <strong>Cookies de sesión y persistentes:</strong> en las de
              sesión, los datos recabados sólo se recogen mientras el usuario
              está navegando por la página web. En el caso de las persistentes,
              los datos continúan almacenados en el terminal y se puede acceder
              a ellos durante un período de tiempo determinado.
            </ListItem>
            <ListItem>
              <strong>
                Cookies técnicas/personalización/análisis/publicitarias:
              </strong>{' '}
              las cookies técnicas serían las que permiten controlar el tráfico
              y la comunicación de datos; las de personalización, las que dejan
              a los usuarios acceder según algunas características propias que
              se recogen (navegador, idioma, etc.). Las analíticas recogen datos
              sobre el comportamiento de los usuarios y permiten elaborar un
              perfil de usuario. Por último, las publicitarias recogen datos
              sobre la gestión de los espacios publicitarios.
            </ListItem>
          </List>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Qué cookies usa esta web?
          </Heading>
          <Text fontSize={fontSize}>
            Está página Web utiliza Google Analytics; el cual, es un servicio de
            análisis publicitario de Google, que permite principalmente que la
            web conozca cómo interactúan los usuarios con su portal.
          </Text>
          <Text fontSize={fontSize}>
            El recabado y almacenamiento de la dirección IP y de los datos
            creados por las cookies pueden ser cancelados en cualquier momento
            con efectos en el futuro.
          </Text>
          <Text fontSize={fontSize}>
            Aquí se puede encontrar el complemento del navegador necesario para
            ello:
            <CommonLink href="https://tools.google.com/dlpage/gaoptout?hl=es">
              https://tools.google.com/dlpage/gaoptout?hl=es
            </CommonLink>
          </Text>
          <Box as="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Duración</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>2 años</td>
                <td>Se usa para distinguir a los usuarios</td>
              </tr>
            </tbody>
          </Box>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            ¿Cómo modificar el uso de cookies?
          </Heading>
          <Text fontSize={fontSize}>
            El Usuario puede restringir, bloquear o borrar las cookies que se
            utilizan en la web, configurando el navegador a tal efecto. Se
            recomienda visitar los siguientes enlaces para ampliar la
            información al respecto:
          </Text>
          <Text fontSize={fontSize}>
            Internet Explorer: Herramientas -&gt; Opciones de Internet -&gt;
            Privacidad -&gt; Configuración.
          </Text>
          <Text fontSize={fontSize}>
            En el menú de herramientas, seleccione &apos;Opciones de
            Internet&apos;. Haga clic en la pestaña de privacidad. Verá el
            cursor de desplazamiento para configurar la privacidad que tiene
            seis posiciones que le permiten controlar la cantidad de cookies que
            se instalarán: Bloquear todas las cookies, Alta, Media Alto, Media
            (nivel por defecto), Baja, y Aceptar todas las cookies.
          </Text>
          <Text fontSize={fontSize}>
            Para más información, puede consultar el soporte de 
            <CommonLink href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer">
              Microsoft
            </CommonLink>
             o la Ayuda del navegador.
          </Text>
          <Text fontSize={fontSize}>
            Firefox: Herramientas -&gt; Opciones -&gt; Privacidad -&gt;
            Historial -&gt; Configuración Personalizada.
          </Text>
          <Text fontSize={fontSize}>
            En el menú de herramientas, seleccione &apos;opciones&apos;.
            Seleccione la etiqueta de privacidad en el recuadro de opciones. Del
            menú desplegable elija &apos;usar configuración personalizada para
            el historial&apos;. Esto mostrará las opciones de cookies y podrá
            optar por activarlas o desactivarlas marcando la casilla
            correspondiente.
          </Text>
          <Text fontSize={fontSize}>
            Para más información, puede consultar el soporte de 
            <CommonLink href="https://support.mozilla.org/es/products/firefox/privacy-and-security">
              Mozilla
            </CommonLink>
             o la Ayuda del navegador.
          </Text>
          <Text fontSize={fontSize}>
            Chrome: Configuración -&gt; Mostrar opciones avanzadas -&gt;
            Privacidad -&gt; Configuración de Contenido.
          </Text>
          <Text fontSize={fontSize}>
            En el menú de configuración, seleccione &apos;mostrar configuración
            avanzada&apos; en la parte inferior de la página. A continuación,
            seleccione la tecla de &apos;configuración de contenido&apos; en la
            sección de privacidad.
          </Text>
          <Text fontSize={fontSize}>
            La sección de la parte superior de la página que aparece le da
            información sobre las cookies y le permite fijar las cookies que
            quieres. También le permite borrar cualquier cookie que tenga
            almacenada en ese momento.
          </Text>
          <Text fontSize={fontSize}>
            Para más información, puede consultar el soporte de 
            <CommonLink href="https://support.google.com/chrome/answer/95647?hl=es&ref_topic=3421433">
              Google
            </CommonLink>
             o la Ayuda del navegador.
          </Text>
          <Text fontSize={fontSize}>Safari: Preferencias -&gt; Seguridad.</Text>
          <Text fontSize={fontSize}>
            En el menú de configuración, selecciona la opción de
            &apos;preferencias&apos;. Abra la pestaña de privacidad.  Seleccione
            la opción que quiera de la sección de &apos;bloquear cookies&apos;.
            Recuerde que ciertas funciones y la plena funcionalidad de este
            Sitio pueden no estar disponibles después de deshabilitar las
            cookies.
          </Text>
          <Text fontSize={fontSize}>
            Para más información, puede consultar el soporte de 
            <CommonLink href="https://support.apple.com/kb/PH21411?viewlocale=es_ES&locale=es_ES">
              Apple
            </CommonLink>
             o la Ayuda del navegador.
          </Text>
        </Stack>
      </Container>
    </MainLayout>
  );
};

export default About;
