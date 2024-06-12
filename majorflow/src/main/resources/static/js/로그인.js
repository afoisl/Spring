const urlLogin = "http://localhost:8080/user/login"

document.querySelector(".sign-inBx").addEventListener("click", () => {
  const data = {
    userId: userId,
    password: password,
  };
  axios
    .post(urlLogin, data, { withCredentials: true })
    .then((response) => {
      console.log("데이터: ", response);
      sessionCurrent();
    })
    .catch((error) => {
      console.log("에러 발생: ", error);
    });
});

sessionCurrent();