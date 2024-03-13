import Heading from '../ui/Heading';
import Row from '../ui/Row';

import CabinTable from '../features/cabins/CabinTable';
import Button from '../ui/Button';
import { useState } from 'react';
import CreateUpdateCabinForm from '../features/cabins/CreateUpdateCabinForm';

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row>
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <Button onClick={() => setShowForm(show => !show)}>
          Add new cabin
        </Button>
        {showForm && <CreateUpdateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
