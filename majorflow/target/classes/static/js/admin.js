const urlAdmin = "http://localhost:8080/user/user";
const urlLectures = "http://localhost:8080/lectures";

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
    adminUserName.textContent = userData.username;

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

    const adminUserAuthority = document.createElement("td");
    adminUserAuthority.classList.add("adminUserAuthority");

    /* 라디오쪽 수정필요 체크가 적용안됨 ㅠㅠ */

    const studentInput = document.createElement("input");
    studentInput.type = "radio";
    studentInput.name = `authority-${userData.userId}`; // 유니크한 name 속성을 설정
    studentInput.value = "ROLE_USER";
    studentInput.checked = userData.authority === "ROLE_USER";

    const studentLabel = document.createElement("label");
    studentLabel.textContent = " 학생";

    const teacherInput = document.createElement("input");
    teacherInput.type = "radio";
    teacherInput.name = `authority-${userData.userId}`; // 유니크한 name 속성을 설정
    teacherInput.value = "ROLE_TEACHER";
    teacherInput.checked = userData.authority === "ROLE_TEACHER";

    const teacherLabel = document.createElement("label");
    teacherLabel.textContent = " 선생님";

    adminUserAuthority.appendChild(studentInput);
    adminUserAuthority.appendChild(studentLabel);
    adminUserAuthority.appendChild(teacherInput);
    adminUserAuthority.appendChild(teacherLabel);

    tr.appendChild(adminUserId);
    tr.appendChild(adminUserName);
    tr.appendChild(adminUserNickname);
    tr.appendChild(adminUserGender);
    tr.appendChild(adminUserAddress);
    tr.appendChild(adminUserBirthdate);
    tr.appendChild(adminUserEmail);
    tr.appendChild(adminUserPhoneNum);
    tr.appendChild(adminUserGenre);
    tr.appendChild(adminUserAuthority);
    tbody.appendChild(tr);
  });
}

// 강의별 수강중인 학생 목록 가져오기
axios.get(urlLectures)
  .then((response) => {
    console.log("강의 데이터: ", response.data);
    displayCourseUsers(response.data);
  })
  .catch((error) => {
    console.log("강의 데이터 가져오기 에러 발생: ", error);
  });

function displayCourseUsers(lectureData) {
  lectureData.forEach(lectureData => {
    const courseUserList = document.querySelector(`.${lectureData.courseName.toLowerCase()}LectureUserName`);

    course.students.forEach(student => {
      const studentElement = document.createElement("div");
      studentElement.classList.add("studentName");
      studentElement.textContent = student.name;
      courseUserList.appendChild(studentElement);
    });
  });
}
document.querySelectorAll('.courseUserGrid').forEach(courseSection => {
  courseSection.addEventListener('click', () => {
    courseSection.classList.toggle('active');
    const lectureUserList = courseSection.nextElementSibling;
    lectureUserList.style.display = lectureUserList.style.display === 'block' ? 'none' : 'block';
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
