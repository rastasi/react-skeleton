import RestClient from '../restClient';

export default {
  getResources: (options = {}) => RestClient.get({
    url: `resource`,
    offset: options.offset
  }),

  getResource: (id) => RestClient.get({
    url: `resource/${id}`
  }),

  createResource: (params) => RestClient.post({
    url: `resource`,
    params
  }),

  updateResource: (id, params) => RestClient.put({
    url: `resource/${id}`,
    params
  }),

  deleteResource: (id) => RestClient.delete({
    url: `resource/${id}`
  })
};
