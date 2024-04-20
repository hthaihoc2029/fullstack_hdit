import instance from "../utils/axiosCustomize";

const postCreateUser = (email, password, username, role, image) => {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);
  form.append("username", username);
  form.append("role", role);
  form.append("userImage", image);

  return instance.post("api/v1/participant", form);
};

const getAllUser = () => {
  return instance.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  const form = new FormData();
  form.append("id", id);
  form.append("username", username);
  form.append("role", role);
  form.append("userImage", image);

  return instance.put("api/v1/participant", form);
};

const delDeleteUser = (userId) => {
  return instance.delete("api/v1/participant", { data: { id: userId } });
};

export { delDeleteUser, postCreateUser, getAllUser, putUpdateUser };