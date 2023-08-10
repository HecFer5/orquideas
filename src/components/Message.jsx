
// eslint-disable-next-line react/prop-types
// const Message = ({ text }) => (
   
//         <h2>{text} </h2>
 
// )
 
// export default Message;

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Message() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>Error</Alert.Heading>
        <p>
         No se ha podido establecer la conexión con la URL requerida
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default Message;