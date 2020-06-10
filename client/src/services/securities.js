import api from "./api-helper";

export const getAllSecurities = async () => {
  const resp = await api.get("/securities");
  return resp.data;
};

export const getOneSecurity = async (id) => {
  const resp = await api.get(`/securities/${id}`);
  return resp.data;
};

export const createSecurities = async (securityData) => {
  const resp = await api.post("/securities", { security: securityData });
  return resp.data;
};

export const updateSecurities = async (id, securityData) => {
  const resp = await api.put(`/securities/${id}`, { security: securityData });
  return resp.data;
};

export const deleteSecurities= async (id) => {
  const resp = await api.delete(`/securities/${id}`);
  return resp;
};