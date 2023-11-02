import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const NewTodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const toDo = {
      activity: formData,
      style: '',
      added_at: date.toUTCString(),
    };
    addTodo(toDo);
    setFormData('');
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <Stack direction="horizontal" gap={2}>
            <div className="p-2">
              <Form.Group className="mb-2" controlId="">
                <Form.Label htmlFor=""></Form.Label>
                <Form.Control
                  type="text"
                  name="todo"
                  value={formData}
                  onChange={handleChange}
                  placeholder="Add activity"
                  className=""
                  style={{ width: '500px' }}
                  required
                />
              </Form.Group>
            </div>
            <div className="pt-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Stack>
        </Form>
      </div>
    </>
  );
};

export default NewTodoForm;
