import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import CreateUpdateCabinForm from './CreateUpdateCabinForm';
import CabinTable from './CabinTable';

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateUpdateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setIsOpenModal(show => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateUpdateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

// export default AddCabin;
