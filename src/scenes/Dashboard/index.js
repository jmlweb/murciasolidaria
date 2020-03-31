import React, { useMemo } from 'react';
import { useFirestore, useFirestoreCollection } from 'reactfire';

import { Container, MainLayout } from '../../components';
import { REQUEST_STATUSES } from '../../constants';

function toDateTime(secs) {
  const t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

const Dashboard = () => {
  const firestore = useFirestore();
  const { docs } = useFirestoreCollection(
    firestore
      .collection('material-requests')
      .orderBy('createdAt', 'desc')
      .limit(999),
  );
  const materialRequests = useMemo(
    () =>
      docs.map((item) => ({
        id: item.id,
        ...item.data(),
      })),
    [docs],
  );
  return (
    <MainLayout>
      <Container>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Centro</th>
              <th>Ctdad</th>
              <th>Prioridad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {materialRequests.map((item) => (
              <tr key={`${item.uid}${item.createdAt.seconds}`}>
                <td>
                  {`${toDateTime(
                    item.createdAt.seconds,
                  ).toLocaleDateString()} ${toDateTime(
                    item.createdAt.seconds,
                  ).toLocaleTimeString()}`}
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.org}</td>
                <td>{item.qty}</td>
                <td>{item.priority}</td>
                <td>
                  {REQUEST_STATUSES[item.status] || REQUEST_STATUSES.requested}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
