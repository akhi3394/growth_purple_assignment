import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MathCard = ({ title }) => {
  return (
    <Card className="mb-3" style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link className='text-decoration-none' to={`/exam/${title.toLowerCase().replace(/ /g, '-')}`}>
        <div className=' bg-secondary rounded w-50 text-white opacity-75'><p className='px-2'>My Progress 0/67</p></div>
          <div className='d-flex justify-content-end'>
          <Button variant="primary" className='px-4'>Start</Button>
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MathCard;
