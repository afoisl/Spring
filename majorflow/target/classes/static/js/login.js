const urlLogin = "http://localhost:8080/user/login";
let userId = "";
let password = "";

document.querySelector("#userId").addEventListener("change", (e) => {
  console.log(e.target.value);
  userId = e.target.value;
});

document.querySelector("#password").addEventListener("change", (e) => {
  console.log(e.target.value);
  password = e.target.value;
});

document.querySelector(".sign-inBx").addEventListener("click", () => {
  //event.preventDefault();
  const data = {
    userId: userId,
    password: password,
  };

  axios
    .post(urlLogin, data, { withCredentials: true })
    .then((response) => {
      console.log("데이터: ", response);
      sessionCurrent();
      alert("로그인이 완료되었습니다");
      window.location.href = "about.html";
    })
    .catch((error) => {
      console.log("에러 발생: ", error);
    });
});

function sessionCurrent() {
  axios
    .get("http://localhost:8080/user/current", { withCredentials: true })
    .then((response) => {
      console.log("데이터:", response);
      if (response.status == 200) {
        console.log("세션 유지");
      }
    })
    .catch((error) => {
      console.log("에러 발생:", error);
    });
}

sessionCurrent();

document
  .getElementById("forgotPasswordLink")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("passwordResetModal").style.display = "block";
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("passwordResetModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("passwordResetModal")) {
    document.getElementById("passwordResetModal").style.display = "none";
  }
});

document
  .getElementById("resetPasswordBtn")
  .addEventListener("click", function () {
    const resetUserId = document.getElementById("resetUserId").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword =
      document.getElementById("confirmNewPassword").value;

    if (newPassword !== confirmNewPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const resetData = {
      userId: resetUserId,
      newPassword: newPassword,
    };

    axios
      .post("http://localhost:8080/user/reset-password", resetData)
      .then((response) => {
        alert("비밀번호가 재설정되었습니다.");
        document.getElementById("passwordResetModal").style.display = "none";
      })
      .catch((error) => {
        console.log("에러 발생: ", error);
      });
  });

document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.querySelector(".loginMenuBtn");
  var menu = document.querySelector(".loginMenu");
  var closeBtn = document.querySelector(".closeBtn");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menu.classList.remove("active");
    }
  });

  document.querySelector(".closeBtn").addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
