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

/* 로그인창 모달 */

function openModal(message) {
  const alertModal = document.getElementById("myAlertModal");
  const alertModalMessage = document.getElementById("alertModalMessage");
  alertModalMessage.textContent = message;
  alertModal.style.display = "block";
}

function closeModal() {
  const alertModal = document.getElementById("myAlertModal");
  alertModal.style.display = "none";
}

document.getElementById("alertConfirm").addEventListener("click", () => {
  closeModal();
});

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
      openModal("로그인이 완료되었습니다");
      document.getElementById("alertConfirm").addEventListener("click", () => {
        closeModal();
        const previousPage = document.referrer;
        console.log(previousPage);
        const signupPage = "signup.html";

        if (previousPage.includes(signupPage)) {
          window.location.href = "index.html";
        } else {
          window.location.href = previousPage ? previousPage : "index.html";
        }
      });
    })
    .catch((error) => {
      console.log("에러 발생: ", error);
      openModal("아이디 또는 비밀번호가 올바르지 않습니다");
    });
});

// 뒤로 가기 함수
function goBack() {
  const previousPage = document.referrer;
  window.location.href = previousPage ? previousPage : "index.html";
}

function sessionCurrent() {
  axios
    .get("http://localhost:8080/user/current", { withCredentials: true })
    .then((response) => {
      console.log("데이터:", response);
      if (response.status == 200 && response.data.userId !== "anonymousUser") {
        console.log("세션 유지");
      }
    })
    .catch((error) => {
      console.log("에러 발생:", error);
    });
}

sessionCurrent();

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
