import React, { ReactNode } from 'react';
import axios from '../../axios-orders';
import Modal from '../../components/UI/Modal/Modal';

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
  showModal: boolean;
}

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state = {
    hasError: false,
    errorMessage: '',
    showModal: false,
  };

  componentDidMount(): void {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        this.setState({
          hasError: true,
          showModal: true,
          errorMessage: error.message,
        });
        return Promise.reject(error);
      }
    );
  }

  showModalHandler = (): void => {
    this.setState({ showModal: false });
  };

  render(): ReactNode {
    return (
      <>
        <Modal clicked={this.showModalHandler} show={this.state.showModal}>
          {this.state.errorMessage}
        </Modal>
        {this.props.children}
      </>
    );
  }
}

export default ErrorBoundary;
