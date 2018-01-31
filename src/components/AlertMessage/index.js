import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import './styles.css';

const AlertMessage = ({ alert, onDismiss }) => (
  <Alert color={alert.color} isOpen={alert.isOpen} toggle={onDismiss}>
    {alert.message}
  </Alert>
);

AlertMessage.propTypes = {
  alert: PropTypes.shape({
    isOpen: PropTypes.bool,
    message: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  onDismiss: PropTypes.func.isRequired,
};


export default AlertMessage;
