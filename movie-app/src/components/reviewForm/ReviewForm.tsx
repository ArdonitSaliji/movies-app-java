import { Form, Button } from 'react-bootstrap';

type ReviewFormProps = {
    handleSubmit: (e: { preventDefault: () => void }) => Promise<void>;
    revText: any;
    labelText: string;
    defaultValue: any;
};

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }: ReviewFormProps) => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={revText} as='textarea' rows={3} defaultValue={defaultValue} />
            </Form.Group>
            <Button variant='outline-info' onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
};

export default ReviewForm;
