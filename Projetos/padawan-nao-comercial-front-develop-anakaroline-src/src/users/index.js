import React, { useEffect, useState } from 'react';
import * as api from './api';
import UserForm from './user-form';
import { DataTable, Row, Button } from '@hbsis.uikit/react';
import { FaTrash, FaEdit } from "react-icons/fa";

const Users = () => {
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [item, setItem] = useState({
    id: '',
    nome: '',
    login: '',
    ativo: false,
    senha: ''
  });
  const [isEditing, setIsEditing] = useState(true);


  useEffect(() => {
    const getUsers = async () => {
      if(!isEditing) return;
      const response = await api.get();
      setData(response);
      setIsEditing(false);
      return [data, isEditing];
    }
    getUsers();
  }, [isEditing]);

  const deleteUser = (id) => {
    api.deleteUser(id);
  }

  const setEditUser = (item) => {
    setItem(item);
    setIsEditing(true);
    setIsFormOpen(true);
  }

  const openForm = () => {
    setItem({
      id: '',
      nome: '',
      login: '',
      ativo: false,
      senha: ''
    });
    setIsEditing(false);
    setIsFormOpen(true);
  }

  const updateName = (newName) => {
    let newItem = {
      ...item,
      nome: newName
    }
    setItem(newItem);
  }

  const updateLogin = (newLogin) => {
    let newItem = {
      ...item,
      login: newLogin
    }
    setItem(newItem);
  }

  const saveUser = async (item) => {
    if(item.id === ''){
      await api.save(item);     
    } else {
      await api.update(item);
    }
    setIsEditing(true);
    closeForm();
  }

  const updateAtivo = (newAtivo) => {
    let newItem = {
      ...item,
      ativo: newAtivo
    }
    setItem(newItem);
  }

  const closeForm = () => setIsFormOpen(false);

  const renderAction = (item) => {
    return (
      <div>
        <Button
          width='100px'
          onClick={() => setEditUser(item)}>
          <FaEdit /> Editar
        </Button>
        <Button
          width='100px'
          onClick={() => deleteUser(item.id)}>
          <FaTrash /> Deletar
        </Button>
      </div>
    )
  };

  return (
    <div>
      <div style={{ height: '50px' }}>
        <Button
          style={{ float: 'right' }}
          type='secondary'
          width='100px'
          onClick={() => openForm()}>
          Criar Novo
      </Button>
      </div>
      <Row>
        <DataTable
          columns={[
            {
              labelHeader: 'Nome',
              width: '30%',
              renderCol: (item) => item.nome,
            },
            {
              labelHeader: 'Login',
              width: '30%',
              renderCol: (item) => item.login,
            },
            {
              labelHeader: 'Ativo',
              width: '30%',
              renderCol: (item) => item.ativo ? "Sim" : "Não",
            },
            {
              labelHeader: 'Ações',
              width: '10%',
              renderCol: (item) => renderAction(item),
            },
          ]}
          data={data}
        />
      </Row>
      <UserForm
        showForm={isFormOpen}
        closeModal={closeForm}
        editing={isEditing}
        item={item}
        setNome={updateName}
        setLogin={updateLogin}
        setAtivo={updateAtivo}
        saveUser={saveUser}
      />
    </div>
  )
};

export default Users;
