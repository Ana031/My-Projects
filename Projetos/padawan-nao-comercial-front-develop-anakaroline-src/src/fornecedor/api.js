import service from '../service/service';

export const get = () => {
  const response = service.get('Fornecedor', {
    params: {
      
    }
  })
  .then(res => res.data);
  return response;
};

export const save = (item) => {
  const response = service.post('Fornecedor', {
    nomeFantasia: item.nomeFantasia,
    cnpj: item.cnpj,
    email: item.email,
    endereco: item.endereco,
    razaoSocial: item.razaoSocial,
    telefone: item.telefone,
    ativo: item.ativo,
  })
  .then(res => res.data);
  return response;
};

export const update = (item) => {
  const response = service.put(`Fornecedor/${item.id}`, {
    id: item.id,
    nomeFantasia: item.nomeFantasia,
    cnpj: item.cnpj,
    email: item.email,
    endereco: item.endereco,
    razaoSocial: item.razaoSocial,
    telefone: item.telefone,
    ativo: item.ativo,
  })
  .then(res => res.data);
  return response;
};

export const deleteProvider = (id) =>  service.delete(`Fornecedor/${id}`).then(res => res.data);
