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

export { postCreateUser, getAllUser };
