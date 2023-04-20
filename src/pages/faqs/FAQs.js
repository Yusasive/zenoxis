import React from 'react';
import Accordion from './AccordionItem';
import { data } from './data';
import './faqs.css';

const FAQs = () => {
  return (
    <div className='faqs'>
      <div className='faqs-head'><h1>Frequently Asked Questions</h1></div>
      <div className="accordion">
        {data.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;