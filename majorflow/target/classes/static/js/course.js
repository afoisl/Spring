const urlLectures = "http://localhost:8080/lectures";
const urlLogout = "http://localhost:8080/user/logout";

axios
  .get(urlLectures)
  .then((response) => {
    console.log("응답 Response: ", response);
    displayLectures(response.data);
  })
  .catch((error) => {
    console.log("에러발생: ", error);
  });

function displayLectures(lectureData) {
  console.log(lectureData.length);
  if (lectureData.length > 0) {
    const allCourse = document.querySelector(".allCourse");
    allCourse.innerHTML = ""; // 기존 강좌 초기화

    lectureData.forEach((data) => {
      const allCourseClick = document.createElement("div");
      allCourseClick.classList.add("allCourseClick");

      // 이미지 태그 추가
      const imgElement = document.createElement("img");
      imgElement.src = "/img/전체강좌_기타.jpg";
      imgElement.classList.add("allCourseClickImg");
      allCourseClick.appendChild(imgElement);

      // 텍스트 추가
      const courseText = document.createElement("div");
      courseText.classList.add("courseText");
      courseText.textContent = "기타"; // 기본 텍스트 설정
      allCourseClick.appendChild(courseText);

      // 상세 텍스트 추가
      const detailedText = document.createElement("div");
      detailedText.classList.add("detailedText");
      detailedText.textContent = "초보부터 고수까지\n1:1 맞춤교육"; // 줄바꿈 포함한 상세 텍스트 설정
      courseText.appendChild(detailedText);

      allCourse.appendChild(allCourseClick);

      allCourseClick.addEventListener("click", () => {
        const urlLecture = "http://localhost:8080/lectures/" + data.lectureId;

        axios
          .get(urlLecture)
          .then((response) => {
            console.log("데이터: ", response.data);
            displayLecture(response.data);

            if (response.status == 200) {
              document
                .querySelector(".allCourseDetailBox")
                .classList.remove("hidden");
              document.querySelector(".tasteCourseBox").classList.add("hidden");
              document.querySelector(".allCourseBox").classList.add("hidden");
            }
          })
          .catch((error) => {
            console.log("에러 발생: ", error);
          });
      });
    });
  }
}

function displayLecture(data) {
  const allCourseDetailBox = document.querySelector(".allCourseDetailBox");

  allCourseDetailBox.innerHTML = ""; // 기존 내용을 초기화

  const backBtn = document.createElement("div");
  const detailedBox = document.createElement("div");
  const detailedBox2 = document.createElement("div");
  const detailedBox2Img = document.createElement("div");
  const detailedBox2Text = document.createElement("div");
  const detailedBox2Text2 = document.createElement("div");

  backBtn.classList.add("backBtn");
  detailedBox.classList.add("detailedBox");
  detailedBox2.classList.add("detailedBox2");
  detailedBox2Img.classList.add("detailedBox2Img");
  detailedBox2Text.classList.add("detaildBox2Text");
  detailedBox2Text2.classList.add("detaildBox2Text2");

  detailedBox.textContent = data.lectureName;
  detailedBox2Text.textContent = data.lectureText;

  allCourseDetailBox.appendChild(backBtn);
  allCourseDetailBox.appendChild(detailedBox);
  allCourseDetailBox.appendChild(detailedBox2);
  detailedBox2.appendChild(detailedBox2Img);
  detailedBox2.appendChild(detailedBox2Text);
  detailedBox2.appendChild(detailedBox2Text2);

  backBtn.addEventListener("click", () => {
    document.querySelector(".allCourseBox").classList.remove("hidden");
    document.querySelector(".tasteCourseBox").classList.add("hidden");
    document.querySelector(".coursePriceGuideBox").classList.add("hidden");
    document.querySelector(".allCourseDetailBox").classList.add("hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const tasteCourseBtn = document.querySelector(".tasteCourseBtn");
  const allCourseBtn = document.querySelector(".allCourseBtn");
  const coursePriceGuideBtn = document.querySelector(".coursePriceGuideBtn");

  if (tasteCourseBtn) {
    tasteCourseBtn.addEventListener("click", () => {
      document.querySelector(".tasteCourseBox").classList.remove("hidden");
      document.querySelector(".allCourseBox").classList.add("hidden");
      document.querySelector(".coursePriceGuideBox").classList.add("hidden");
      document.querySelector(".allCourseDetailBox").classList.add("hidden");
    });
  } else {
    console.error("tasteCourseBtn not found");
  }

  if (allCourseBtn) {
    allCourseBtn.addEventListener("click", () => {
      document.querySelector(".allCourseBox").classList.remove("hidden");
      document.querySelector(".tasteCourseBox").classList.add("hidden");
      document.querySelector(".coursePriceGuideBox").classList.add("hidden");
    });
  } else {
    console.error("allCourseBtn not found");
  }

  if (coursePriceGuideBtn) {
    coursePriceGuideBtn.addEventListener("click", () => {
      document.querySelector(".coursePriceGuideBox").classList.remove("hidden");
      document.querySelector(".tasteCourseBox").classList.add("hidden");
      document.querySelector(".allCourseBox").classList.add("hidden");
      document.querySelector(".allCourseDetailBox").classList.add("hidden");
    });
  } else {
    console.error("coursePriceGuideBtn not found");
  }
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
