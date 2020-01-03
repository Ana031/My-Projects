import React, { useState } from 'react';
import { Modal, Input, Toggle } from '@hbsis.uikit/react';

const UserForm = ({ showForm, editing, closeModal, setNome, setLogin, setAtivo, saveUser, item }) => {

  return (
    <Modal visible={showForm} closeModal={closeModal} size="60vw">
      <Modal.Header>
        <h2>
          {
            editing ? 'Editando' : 'Criar'
          }
        </h2>
      </Modal.Header>
      <Modal.Content fullSize overflow>
        <div style={{ margin: '10px' }}>
          <span style={{ float: 'left' }}>Nome: </span>
          <Input
            value={item.nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <span style={{ float: 'left' }}>Login: </span>
          <Input
            value={item.login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <span style={{ float: 'left' }}>Ativo: </span>
          <Toggle
            position=''
            on={item.ativo}            
            onChange={() => setAtivo(!item.ativo)}
          />
        </div>
      </Modal.Content>
      <Modal.Footer align="space">
        <Modal.Button
          width="162px"
          value={'Cancelar'}
          onClick={() => closeModal()}
        />
        <Modal.Button
          width="162px"
          value={'Salvar'}
          onClick={() => saveUser(item)}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default UserForm;