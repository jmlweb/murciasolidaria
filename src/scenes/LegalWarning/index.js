import React from 'react';
import { Heading, Text, Stack, List, ListItem } from '@chakra-ui/core';

import { CommonLink, Container, MainLayout } from '../../components';

const fontSize = ['lg', 'lg', 'xl'];

const About = () => {
  return (
    <MainLayout>
      <Container maxWidth="4xl">
        <Stack my={[8, 10]} spacing={6}>
          <Heading as="h1" size="lg" fontSize={['24px', '32px']} mb={2}>
            AVISO LEGAL
          </Heading>
          <Text fontSize={fontSize}>
            En cumplimiento de lo establecido en el artículo 10 de la Ley
            34/2002, de 11 de julio, de servicios de la sociedad de la
            información y de comercio electrónico, le mostramos la siguiente
            información:
          </Text>
          <List fontSize={fontSize}>
            <ListItem>Titular de la web: NIDO ROBOTICS S.L.</ListItem>
            <ListItem>NIF: B30900005</ListItem>
            <ListItem>
              Dirección: Campus Universitario de Espinardo 7, Murcia, 30100
            </ListItem>
            <ListItem>
              Email de contacto:{' '}
              <CommonLink href="mailto:hola@murciasolidaria.com">
                hola@murciasolidaria.com
              </CommonLink>
            </ListItem>
          </List>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            Condiciones de uso
          </Heading>
          <Text fontSize={fontSize}>
            Con la utilización de la web, el usuario acepta quedar vinculado a
            las presentes condiciones.
          </Text>
          <Text fontSize={fontSize}>
            Las condiciones generales de uso de MurciaSolidaria, regulan el
            acceso y la utilización de la web en la que se gestionará la
            confección y fabricación de material de protección sanitaria para la
            excepción situación de emergencia y alarma debido a la propagación
            del virus COVID-19.
          </Text>
          <Text fontSize={fontSize}>
            MurciaSolidaria pondrá todos los medios materiales y legales
            necesarios para evitar la inclusión no deseada en esta página web de
            elementos que pudieran ser introducidos en ella por terceros ajenos
            a la web en contra del Aviso Legal y sus usos autorizados. Los
            titulares de la web responderán únicamente del uso exclusivo de esta
            web y en ningún caso de los elementos que hubieran sido introducidos
            por terceros no autorizados.
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            Limitación de la actuación del usuario
          </Heading>
          <Text fontSize={fontSize}>
            Los usuarios no estarán autorizados para copiar, distribuir
            (incluyendo correos electrónicos e Internet), transmitir, comunicar,
            modificar, alterar, transformar, ceder o, en cualquier otra forma
            desplegar actividades que conlleven el uso comercial o ilícito de la
            web o de los contenidos o elementos que lo integran, ya sea con
            carácter parcial o total.
          </Text>
          <Text fontSize={fontSize}>
            La web se reserva el derecho a suspender o poner fin, en cualquier
            momento y sin previo aviso, a todos o parte de los servicios
            ofrecidos en la presente página web.
          </Text>
          <Text fontSize={fontSize}>
            El usuario se obliga a indemnizar a los titulares de la web respecto
            a cualquier pérdida, daño o gasto que pueda sufrir en relación con
            la utilización o abuso de la web por el usuario con alguna finalidad
            ilícita o prohibida, con arreglo a lo establecido en las presentes
            condiciones.
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            Limitación de la responsabilidad de la web
          </Heading>
          <Text fontSize={fontSize}>
            El titular de la web se exime de cualquier tipo de responsabilidad
            derivada de los daños y perjuicios que de cualquier naturaleza
            puedan ocasionarse y concretamente de los descritos a continuación,
            con carácter meramente enunciativo y no limitativo:
          </Text>
          <List fontSize={fontSize}>
            <ListItem>
              Del inadecuado funcionamiento y/o deficiencias técnicas de la web,
              si ello obedece a labores de mantenimiento, a incidencias, a un
              defectuoso funcionamiento del terminal o la falta de capacidad
              para soportar los sistemas indispensables para hacer uso del
              servicio.
            </ListItem>
            <ListItem>
              De los posibles errores de seguridad que puedan producir los
              virus, archivos, programas y/o demás componentes dañinos en la web
              o en el servidor. De los daños que se generen al usuario o a un
              tercero en caso de imposibilidad de prestar el servicio en los
              supuestos de caso fortuito, fuerza mayor, u otras causas no
              imputables a los titulares de la web.
            </ListItem>
            <ListItem>
              Los usuarios que realicen un uso inadecuado de la web,
              infringieran las Condiciones de Uso, o vulneraran los sistemas de
              seguridad de la web.
            </ListItem>
            <ListItem>
              De la información publicada en la web, blogs, redes sociales y
              otros medios, siempre que esta información haya sido manipulada o
              introducida por un tercero no autorizado.
            </ListItem>
          </List>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            Enlaces
          </Heading>
          <Text fontSize={fontSize}>
            Se informa que, la web de MurciaSolidaria puede contener vínculos o
            enlaces con otros portales o sitios web no gestionados por
            MurciaSolidaria, como pueden ser los enlaces a los distintos
            restaurantes, bares, tiendas o empresas de ocio y tiempo libre. De
            igual manera, MurciaSolidaria, manifiesta que no ejerce control
            alguno sobre dichos portales o sitios web, ni es responsable del
            contenido de estos.
          </Text>
          <Text fontSize={fontSize}>
            Los links o enlaces que esta web pudiera contener se ofrecerán
            únicamente a modo de referencias informativas, cuya finalidad es
            facilitar otros contenidos que se consideran de interés.
          </Text>
          <Text fontSize={fontSize}>
            MurciaSolidaria no asume ningún tipo de responsabilidad directa ni
            indirecta en relación con la licitud, veracidad, utilidad, calidad o
            fiabilidad de los contenidos que no estén directamente gestionados o
            controlados por éstos, aunque puedan ser accesibles a través de la
            web.
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            Propiedad intelectual e industrial
          </Heading>
          <Text fontSize={fontSize}>
            MurciaSolidaria se reserva los derechos de propiedad intelectual de
            la web en cuanto a aquellos elementos que conforman la apariencia
            visual, imagen gráfica y otros estímulos sensoriales, así como la
            tecnología, know how, marcas, signos distintivos y logos. Los
            contenidos propios y las obras reproducidas en esta web son
            propiedad de MurciaSolidaria y por tanto están protegidas por la
            normativa de propiedad intelectual e industrial.
          </Text>
          <Text fontSize={fontSize}>
            Del mismo modo, el dominio y todos aquellos contenidos,
            publicaciones, informaciones, gráficos, dibujos, fotografías,
            grabaciones y/o cualquier otro contenido accesible a través de la
            web pertenecen en exclusiva a MurciaSolidaria o éste cuenta con
            derechos y/o autorizaciones para su explotación.
          </Text>
          <Text fontSize={fontSize}>
            Está prohibida la reproducción, transformación, distribución,
            comunicación pública, puesta a disposición del público y, en
            general, cualquier otra forma de explotación, parcial o total de los
            elementos referidos en los apartados anteriores. Su publicación en
            otras páginas web o en otros medios de comunicación digitales o
            escritos, requiere el consentimiento expreso del titular de la web,
            y, en todo caso, aparecerán con referencia explícita a la
            titularidad de los derechos de propiedad intelectual de Murcia
            Solidaria.
          </Text>
          <Text fontSize={fontSize}>
            Aquél que lleve a cabo alguna de las conductas descritas en el
            presente apartado, deberá indemnizar al titular en relación con los
            ilícitos cometidos.
          </Text>
          <Text fontSize={fontSize}>
            El acceso a este sitio web no supone, en ningún caso, la adquisición
            por parte del usuario de ningún derecho de propiedad sobre los
            contenidos que figuran en el mismo.
          </Text>
          <Heading as="h2" fontSize={['18px', '26px']} mb={2}>
            Legislación aplicable, jurisdicción competente y notificaciones
          </Heading>
          <Text fontSize={fontSize}>
            Las presentes condiciones se rigen y se interpretan de acuerdo con
            la legislación española y europea aplicables.
          </Text>
          <Text fontSize={fontSize}>
            Para cualquier controversia que pudiera suscitarse en relación con
            los servicios prestados a través de esta web, serán competentes los
            tribunales de la ciudad de Murcia, renunciando el usuario a
            cualquier otro fuero que pudiera tener.
          </Text>
          <Text fontSize={fontSize}>
            MurciaSolidaria perseguirá el incumplimiento de las presentes
            Condiciones, así como cualquier utilización indebida del sitio web
            ejerciendo todas las acciones civiles y penales que le puedan
            corresponder y asistan en derecho.
          </Text>
        </Stack>
      </Container>
    </MainLayout>
  );
};

export default About;
