import React, { useEffect, useState } from "react";
import { Table, Divider, Tag, Button, message } from "antd";
import * as api from "./api";
import ProviderForm from "./fornecedor-form";

const Provider = () => {
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(true);
  const [item, setItem] = useState({
    id: "",
    nomeFantasia: "",
    cnpj: "",
    email: "",
    endereco: "",
    razaoSocial: "",
    telefone: "",
    ativo: false
  });

  useEffect(() => {
    const getUsers = async () => {
      if (!isEditing) return;
      const response = await api.get();
      setData(response);
      setIsEditing(false);
      return [data, isEditing];
    };
    getUsers();
  }, [isEditing, data]);

  const saveProvider = async item => {
    try {
      if (item.id === "") {
        await api.save(item);
      } else {
        await api.update(item);
      }
      setIsEditing(true);
      closeModal();
      message.success("Saved Successfully");
    } catch (error) {
      message.error(error.response.data.detailedMessage);
    }
  };

  const deleteProvider = async id => {
    await api.deleteProvider(id);
    setIsEditing(true);
  };

  const closeModal = () => {
    setIsFormOpen(false);
  };

  const openModal = () => {
    setItem({
      id: "",
      nomeFantasia: "",
      cnpj: "",
      email: "",
      endereco: "",
      razaoSocial: "",
      telefone: "",
      ativo: false
    });
    setIsFormOpen(true);
  };

  const onChange = () => {
    setIsFormOpen(false);
  };

  const setEditProvider = item => {
    setItem(item);
    setIsFormOpen(true);
  };

  const updateAtivo = newAtivo => {
    let newItem = {
      ...item,
      ativo: newAtivo
    };
    setItem(newItem);
  };

  const updateNomeFantasia = newNomeFantasia => {
    let newItem = {
      ...item,
      nomeFantasia: newNomeFantasia
    };
    setItem(newItem);
  };

  const updateCnpj = newCnpj => {
    let newItem = {
      ...item,
      cnpj: newCnpj
    };
    setItem(newItem);
  };

  const updateEmail = newEmail => {
    let newItem = {
      ...item,
      email: newEmail
    };
    setItem(newItem);
  };

  const updateEndereco = newEndereco => {
    let newItem = {
      ...item,
      endereco: newEndereco
    };
    setItem(newItem);
  };

  const updateRazaoSocial = newRazaoSocial => {
    let newItem = {
      ...item,
      razaoSocial: newRazaoSocial
    };
    setItem(newItem);
  };

  const updateTelefone = newTelefone => {
    let newItem = {
      ...item,
      telefone: newTelefone
    };
    setItem(newItem);
  };

  const columns = [
    {
      title: "Provider",
      dataIndex: "nomeFantasia",
      key: "provider",
      render: text => <a>{text}</a>
    },
    {
      title: "Corporate Name",
      dataIndex: "razaoSocial",
      key: "categoryname"
    },
    {
      title: "Active",
      dataIndex: "ativo",
      key: "ativo",
      render: (text, record) => {
        let color = record.ativo ? "green" : "red";
        return <Tag color={color}>{record.ativo ? "YES" : "NO"}</Tag>;
      }
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a onClick={() => setEditProvider(record)}>Edit</a>
          <Divider type="vertical" />
          <a onClick={() => deleteProvider(record.id)}>Delete</a>
        </span>
      )
    }
  ];

  return (
    <div align="right">
      <Button style={{margin: '15px'}} type="primary" ghost onClick={() => openModal()}>
        New
      </Button>

      <Table columns={columns} dataSource={data} />
      <ProviderForm
        isModalOpen={isFormOpen}
        handleClose={closeModal}
        onChange={onChange}
        saveProvider={saveProvider}
        item={item}
        setAtivo={updateAtivo}
        setCnpj={updateCnpj}
        setEmail={updateEmail}
        setEndereco={updateEndereco}
        setNomeFantasia={updateNomeFantasia}
        setRazaoSocial={updateRazaoSocial}
        setTelefone={updateTelefone}
        succsses={saveProvider}
      />
    </div>
  );
};
export default Provider;
