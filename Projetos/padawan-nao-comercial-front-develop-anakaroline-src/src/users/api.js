import service from '../service/service';

export const get = () => {
  const response = service.get('Usuario', {
    params: {
      
    }
  })
  .then(res => res.data);
  return response;
};

export const save = (item) => {
  const response = service.post('Usuario', {
    nome: item.nome,
    login: item.login,
    ativo: item.ativo,
    senha: item.senha,
  })
  .then(res => res.data);
  return response;
};

export const update = (item) => {
  const response = service.put(`Usuario/${item.id}`, {
    id: item.id,
    nome: item.nome,
    login: item.login,
    ativo: item.ativo,
    senha: item.senha,
  })
  .then(res => res.data);
  return response;
};

export const deleteUser = (id) =>  service.delete(`Usuario/${id}`).then(res => res.data);
