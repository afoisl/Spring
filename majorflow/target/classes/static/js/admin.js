const urlAdmin = "http://localhost:8080/user/user";
const urlLectures = "http://localhost:8080/edutech/get";

document.querySelector(".noticeWriteBtn").addEventListener("click", () => {
  document.querySelector(".noticeWriteBox").classList.remove("hidden");
  document.querySelector(".adminPageBox").classList.add("hidden");
});

document.querySelector(".adminPageBtn").addEventListener("click", () => {
  document.querySelector(".adminPageBox").classList.remove("hidden");
  document.querySelector(".noticeWriteBox").classList.add("hidden");
});

sessionCurrent();

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
        alert("로그인이 필요합니다.");
        window.location.href = "login.html";
      }
    })
    .catch((error) => {
      console.log("에러 발생: ", error);
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
          document.querySelector(".menuLoginBtn").classList.remove("hidden");
          document.querySelector(".menuLogoutBtn").classList.add("hidden");
        }
      })
      .catch((error) => {
        console.log("에러 발생: ", error);
      });
  }
});

axios
  .get(urlAdmin)
  .then((response) => {
    console.log("데이터: ", response.data);
    displayAdmin(response.data);
  })
  .catch((error) => {
    console.log("에러 발생: ", error);
  });

function displayAdmin(data) {
  const tbody = document.querySelector(".tbody");

  data.forEach((userData) => {
    const tr = document.createElement("tr");

    const adminUserId = document.createElement("td");
    adminUserId.classList.add("adminUserId");
    adminUserId.textContent = userData.userId;

    const adminUserName = document.createElement("td");
    adminUserName.classList.add("adminUserName");
    adminUserName.textContent = userData.name;

    const adminUserNickname = document.createElement("td");
    adminUserNickname.classList.add("adminUserNickname");
    adminUserNickname.textContent = userData.nickname;

    const adminUserGender = document.createElement("td");
    adminUserGender.classList.add("adminUserGender");
    adminUserGender.textContent = userData.gender;

    const adminUserAddress = document.createElement("td");
    adminUserAddress.classList.add("adminUserAddress");
    adminUserAddress.textContent = userData.address;

    const adminUserBirthdate = document.createElement("td");
    adminUserBirthdate.classList.add("adminUserBirthdate");
    adminUserBirthdate.textContent = userData.birthDate;

    const adminUserEmail = document.createElement("td");
    adminUserEmail.classList.add("adminUserEmail");
    adminUserEmail.textContent = userData.email;

    const adminUserPhoneNum = document.createElement("td");
    adminUserPhoneNum.classList.add("adminUserPhoneNum");
    adminUserPhoneNum.textContent = userData.phoneNumber;

    const adminUserGenre = document.createElement("td");
    adminUserGenre.classList.add("adminUserGenre");
    adminUserGenre.textContent = userData.genre;

    tr.appendChild(adminUserId);
    tr.appendChild(adminUserName);
    tr.appendChild(adminUserNickname);
    tr.appendChild(adminUserGender);
    tr.appendChild(adminUserAddress);
    tr.appendChild(adminUserBirthdate);
    tr.appendChild(adminUserEmail);
    tr.appendChild(adminUserPhoneNum);
    tr.appendChild(adminUserGenre);
    tbody.appendChild(tr);
  });
}

// 강의별 수강중인 학생 목록 가져오기
axios
  .get(urlLectures)
  .then((response) => {
    console.log("유저 데이터: ", response.data);
    displayCourseUsers(response.data);
  })
  .catch((error) => {
    console.log("강의 데이터 가져오기 에러 발생: ", error);
  });

function displayCourseUsers(lectureData) {
  lectureData.forEach((purchasedLecture) => {
    const lectureName = purchasedLecture.lecture.lectureName;
    const userId = purchasedLecture.user.userId;
    const lectureUserName = document.createElement("div");
    const celloLectureUserName = document.querySelector(
      ".celloLectureUserName"
    );
    const pianoLectureUserName = document.querySelector(
      ".pianoLectureUserName"
    );
    const guitarLectureUserName = document.querySelector(
      ".guitarLectureUserName"
    );
    const drumLectureUserName = document.querySelector(".drumLectureUserName");
    lectureUserName.textContent = userId;

    if (lectureName == "첼로") {
      celloLectureUserName.appendChild(lectureUserName);
    } else if (lectureName == "피아노") {
      pianoLectureUserName.appendChild(lectureUserName);
    } else if (lectureName == "기타") {
      guitarLectureUserName.appendChild(lectureUserName);
    } else if (lectureName == "드럼") {
      drumLectureUserName.appendChild(lectureUserName);
    }
  });
}

document.querySelectorAll(".courseUserGrid").forEach((courseSection) => {
  courseSection.addEventListener("click", () => {
    courseSection.classList.toggle("active");
    const lectureUserList = courseSection.nextElementSibling;
    lectureUserList.style.display =
      lectureUserList.style.display === "block" ? "none" : "block";
  });
});

/* 유저가 수강중인 강의 보기 모달 */

const tbody = document.querySelector(".tbody");
const modal = document.getElementById("courseModal");
const closeButton = document.querySelector(".courseModalClose");

tbody.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("adminUserId")) {
    modal.style.display = "block";
  }
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

/* 공지사항 등록 */

// HTML 요소 선택
const noticeTitle = document.querySelector(".noticeWriteBox1");
const noticeContent = document.querySelector(".noticeWriteBox2");
const submitButton = document.querySelector(".noticeWriteBox3");

// 글쓰기 버튼에 이벤트 리스너 추가
submitButton.addEventListener("click", () => {
  // 입력된 제목과 내용 가져오기
  const title = noticeTitle.value;
  const content = noticeContent.value;

  // 현재 날짜 및 시간 생성
  const now = new Date();
  const freeBoardTime = now.toISOString(); // ISO 형식의 날짜 문자열 생성 (예: "2024-06-26T15:30:00.000Z")

  // 데이터 객체 생성
  const data = {
    title: title,
    text: content, // 수정된 부분
    freeBoardTime: freeBoardTime, // 등록 날짜 추가
  };

  // axios를 사용하여 서버에 데이터 전송
  axios
    .post("http://localhost:8080/board/save", data, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("데이터 저장 성공:", response);
      // 성공 시 추가 작업 (예: 알림 표시, 입력 필드 초기화 등)
      alert(
        `공지사항이 등록되었습니다. (등록 시간: ${new Date(
          freeBoardTime
        ).toLocaleString()})`
      );
      noticeTitle.value = "";
      noticeContent.value = "";
    })
    .catch((error) => {
      console.log("에러 발생:", error);
      // 오류 처리 (예: 오류 메시지 표시)
      alert("공지사항 등록에 실패했습니다. 다시 시도해주세요.");
    });
});
