const urlLogout = "http://localhost:8080/user/logout";
const urlTeacher = "";

//연혁 hidden,
//강사진 unhidden

document.querySelector(".teacherBtn").addEventListener("click", () => {
  document.querySelector(".teacherBox").classList.remove("hidden");
  document.querySelector(".historyBox").classList.add("hidden");
  document.querySelector(".singleTeacherBox").classList.add("hidden");
});

//강사진 hidden,
//연혁 unhidden

document.querySelector(".historyBtn").addEventListener("click", () => {
  document.querySelector(".teacherBox").classList.add("hidden");
  document.querySelector(".historyBox").classList.remove("hidden");
  document.querySelector(".singleTeacherBox").classList.add("hidden");
});

//강사진 hidden,
//강사소개 unhidden

document.querySelector(".teacherInfo").addEventListener("click", () => {
  document.querySelector(".teacherBox").classList.add("hidden");
  document.querySelector(".singleTeacherBox").classList.remove("hidden");
});

document.querySelectorAll(".subMenu > div").forEach((div) => {
  div.addEventListener("click", () => {
    document
      .querySelectorAll(".subMenu > div")
      .forEach((item) => item.classList.remove("active"));

    // 클릭된 div에 active 클래스 추가
    div.classList.add("active");
  });
});

document.querySelectorAll(".subMenu > div").forEach((div) => {
  div.addEventListener("click", () => {
    document
      .querySelectorAll(".subMenu > div")
      .forEach((item) => item.classList.remove("active"));

    // 클릭된 div에 active 클래스 추가
    div.classList.add("active");
  });
});

function sessionCurrent() {
  axios
    .get("http://localhost:8080/user/current", { withCredentials: true })
    .then((response) => {
      console.log("데이터: ", response);
      if (response.status == 200 && response.data.userId !== "anonymousUser") {
        console.log("세션 유지");
        const userId = response.data.userId;
        document.querySelector(".menuLoginBtn").classList.add("hidden");
        document.querySelector(".menuLogoutBtn").classList.remove("hidden");
      } else {
        document.querySelector(".menuLogoutBtn").classList.add("hidden");
        document.querySelector(".menuLoginBtn").classList.remove("hidden");
      }
    })
    .catch((error) => {
      console.log("로그인 안됨");
    });
}

document.querySelector(".menuLogoutBtn").addEventListener("click", () => {
  if (confirm("로그아웃하시겠습니까?")) {
    const urlLogout = "http://localhost:8080/user/logout";

    //연혁 hidden,
    //강사진 unhidden

    document.querySelector(".teacherBtn").addEventListener("click", () => {
      document.querySelector(".teacherBox").classList.remove("hidden");
      document.querySelector(".historyBox").classList.add("hidden");
      document.querySelector(".singleTeacherBox").classList.add("hidden");
    });

    //강사진 hidden,
    //연혁 unhidden

    document.querySelector(".historyBtn").addEventListener("click", () => {
      document.querySelector(".teacherBox").classList.add("hidden");
      document.querySelector(".historyBox").classList.remove("hidden");
      document.querySelector(".singleTeacherBox").classList.add("hidden");
    });

    //강사진 hidden,
    //강사소개 unhidden

    document.querySelector(".teacherInfo").addEventListener("click", () => {
      document.querySelector(".teacherBox").classList.add("hidden");
      document.querySelector(".singleTeacherBox").classList.remove("hidden");
    });

    function sessionCurrent() {
      axios
        .get("http://localhost:8080/user/current", { withCredentials: true })
        .then((response) => {
          console.log("데이터: ", response);
          if (
            response.status == 200 &&
            response.data.userId !== "anonymousUser"
          ) {
            console.log("세션 유지");
            const userId = response.data.userId;
            document.querySelector(".menuLoginBtn").classList.add("hidden");
            document.querySelector(".menuLogoutBtn").classList.remove("hidden");
          } else {
            document.querySelector(".menuLogoutBtn").classList.add("hidden");
            document.querySelector(".menuLoginBtn").classList.remove("hidden");
          }
        })
        .catch((error) => {
          console.log("로그인 안됨");
        });
    }

    document.querySelector(".menuLogoutBtn").addEventListener("click", () => {
      if (confirm("로그아웃하시겠습니까?")) {
        axios
          .post(urlLogout, {}, { withCredentials: true })
          .then((response) => {
            console.log("데이터: ", response);
            if (response.status == 200) {
              alert("로그아웃 되었습니다");
              document
                .querySelector(".menuLoginBtn")
                .classList.remove("hidden");
              document.querySelector(".menuLogoutBtn").classList.add("hidden");
            }
          })
          .catch((error) => {
            console.log("에러 발생: ", error);
          });
      }
    });

    sessionCurrent();
    axios
      .post(urlLogout, {}, { withCredentials: true })
      .then((response) => {
        console.log("데이터: ", response);
        if (response.status == 200) {
          alert("로그아웃 되었습니다");
          document.querySelector(".menuLoginBtn").classList.remove("hidden");
          document.querySelector(".menuLogoutBtn").classList.add("hidden");
        }
      })
      .catch((error) => {
        console.log("에러 발생: ", error);
      });
  }
});

sessionCurrent();
