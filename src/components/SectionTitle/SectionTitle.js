import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
