import * as React from 'react';
import { Wrapper, Content } from './styled';

interface ModalProps {
  children: any;
  close(): void;
}

export const Modal = (props: ModalProps) => {

  let handleClick = (e) => {
    if (e.target.id === 'modal-wrapper') {
      props.close();
    }
  };

  return (
    <Wrapper onClick={handleClick} id="modal-wrapper">
      <Content>
        {props.children}
        <span onClick={props.close} className="close">&times;</span>
      </Content>
    </Wrapper>
  );
};