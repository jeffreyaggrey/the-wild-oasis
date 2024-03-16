import { useState } from 'react';
import Modal from '../../ui/Modal';

import Button from '../../ui/Button';
import CreateUpdateCabinForm from './CreateUpdateCabinForm';

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal(show => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateUpdateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
