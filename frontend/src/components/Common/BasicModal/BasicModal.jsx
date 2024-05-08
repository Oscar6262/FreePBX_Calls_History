import React from 'react'
import './BasicModal.scss'
import { Modal, ModalHeader } from 'semantic-ui-react'

export function BasicModal(props) {
  const { show, size, title, children, onClose } = props
  return (
    <>
      <Modal className="basic-modal" open={show} onClose={onClose} size={size}>
        {title && <Modal.Header>{title}</Modal.Header>}
        <Modal.Content>{children}</Modal.Content>
      </Modal>
    </>
  )
}

BasicModal.defaultProps = {
  size: 'tiny',
}
