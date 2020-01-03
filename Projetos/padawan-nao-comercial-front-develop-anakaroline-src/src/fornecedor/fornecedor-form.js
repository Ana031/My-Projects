import React from "react";
import { Modal, Input, Switch } from "antd";

const ProviderForm = ({
  isModalOpen,
  handleClose,
  onChange,
  saveProvider,
  item,
  setAtivo,
  setCnpj,
  setEmail,
  setEndereco,
  setNomeFantasia,
  setRazaoSocial,
  setTelefone
}) => {
  return (
    <div>
      <Modal
        title={item.id === "" ? "New" : "Editing"}
        visible={isModalOpen}
        onOk={() => saveProvider(item)}
        onCancel={() => handleClose()}
        checked={() => onChange()}
      >
        <div class="boxmodal">
          <Input
            placeholder="Fantasy Name"
            value={item.nomeFantasia}
            onChange={e => setNomeFantasia(e.target.value)}
          />
        </div>
        <div class="boxmodal">
          <Input
            placeholder="Social Reason"
            value={item.razaoSocial}
            onChange={e => setRazaoSocial(e.target.value)}
          />
        </div>
        <div class="boxmodal">
          <Input
            placeholder="Email"
            value={item.email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div class="boxmodal">
          <Input
            placeholder="Address"
            value={item.endereco}
            onChange={e => setEndereco(e.target.value)}
          />
        </div>
        <div class="boxmodal">
        <Input
          placeholder="Cnpj"
          value={item.cnpj}
          onChange={e => setCnpj(e.target.value)}
        />
        </div>
        <div class="boxmodal">
          <Input
            placeholder="Telephone"
            value={item.telefone}
            onChange={e => setTelefone(e.target.value)}
          />
        </div>
        <div class="boxmodal">
          <Switch checked={item.ativo} onChange={() => setAtivo(!item.ativo)} />
        </div>
      </Modal>
    </div>
  );
};

export default ProviderForm;
