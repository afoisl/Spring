function findAddr() {
    new daum.Postcode({
        oncomplete: function (data) {
            console.log(data);

            var roadAddr = data.roadAddress;
            var jibunAddr = data.jibunAddress;

            document.getElementById('zonecode').value = data.zonecode;
            if (roadAddr !== '') {
                document.getElementById("roadAddress").value = roadAddr;
            } else if (jibunAddr !== '') {
                document.getElementById("roadAddress").value = jibunAddr;
            }
        }
    }).open();
}

function registerAddr() {
    var zonecode = document.getElementById('zonecode').value;
    var roadAddress = document.getElementById('roadAddress').value;
    var roadAddressDetail = document.getElementById('roadAddressDetail').value;

    if (zonecode && roadAddress && roadAddressDetail) {
        alert('주소가 등록되었습니다:\n' +
            '우편번호: ' + zonecode + '\n' +
            '도로명주소: ' + roadAddress + '\n' +
            '상세주소: ' + roadAddressDetail);
    } else {
        alert('모든 주소 정보를 입력해 주세요.');
    }
}

function isValidUserId(userId) {
    const userIdRegex = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
    return userIdRegex.test(userId);
}

function isValidNickname(nickname) {
    return nickname.length >= 1 && nickname.length <= 10;
}

async function checkDuplicateId() {
    const userId = document.getElementById('userId').value;
    const duplicateResultElement = document.getElementById('duplicate-check-result');
    const data = {userId:userId.value}

    // 초기화
    duplicateResultElement.innerText = '';

    if (!isValidUserId(userId)) {
        alert('사용자 ID는 4자에서 12자 사이의 영문+숫자로 이루어져야 하며 영문으로 시작되어야 합니다.');
        return;
    }

    try {
        console.log('Checking duplicate ID for:', userId); // 확인을 위해 로그 추가
        const response = await axios.post('http://localhost:3000/check-id', { userId });
        console.log('Response from server:', response.data); // 서버 응답 로그

        const exists = response.data.exists;
        if (exists) {
            duplicateResultElement.innerText = '이미 사용 중인 아이디입니다.';
            duplicateResultElement.style.color = 'red';
        } else {
            duplicateResultElement.innerText = '사용 가능한 아이디입니다.';
            duplicateResultElement.style.color = 'green';
        }
    } catch (error) {
        console.error('Error checking ID:', error);
    }
}

async function checkDuplicateNickname() {
    const nickname = document.getElementById('nickname').value;
    const resultElement = document.getElementById('nickname-duplicate-check-result');

    // 초기화
    resultElement.innerText = '';

    if (!isValidNickname(nickname)) {
        alert('닉네임은 1자에서 10자 이내여야 합니다.');
        return;
    }

    try {
        console.log('Checking duplicate Nickname for:', nickname); // 확인을 위해 로그 추가
        const response = await axios.post('http://localhost:3000/check-nickname', { nickname });
        console.log('Response from server:', response.data); // 서버 응답 로그

        const exists = response.data.exists;
        if (exists) {
            resultElement.innerText = '이미 사용 중인 닉네임입니다.';
            resultElement.style.color = 'red';
        } else {
            resultElement.innerText = '사용 가능한 닉네임입니다.';
            resultElement.style.color = 'green';
        }
    } catch (error) {
        console.error('Error checking Nickname:', error);
    }
}

function limitCheckboxSelection() {
    const checkboxes = document.querySelectorAll('input[name="genre"]:checked');
    const genreErrorElement = document.getElementById('genre-error');

    if (checkboxes.length > 3) {
        genreErrorElement.innerText = '선호도(장르)는 최대 3개까지 선택 가능합니다.';
        checkboxes[checkboxes.length - 1].checked = false; // 마지막 체크박스 선택 해제
    } else {
        genreErrorElement.innerText = '';
    }
}

function isValidPassword(password) {
    return password.length >= 6 && password.length <= 20;
}

function register() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userName = document.getElementById('userName').value;
    const nickname = document.getElementById('nickname').value;
    const authority = document.querySelector('input[name="authority"]:checked');
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const phoneNumber = document.getElementById('phoneNumber').value;
    const birthDate = document.getElementById('birthDate').value;

    if (!userId) {
        alert('아이디는 필수 항목입니다. 아이디를 입력해 주세요.');
        return;
    }

    if (!password) {
        alert('비밀번호는 필수 항목입니다. 비밀번호를 입력해 주세요.');
        return;
    }

    if (!confirmPassword) {
        alert('비밀번호 확인은 필수 항목입니다. 비밀번호 확인을 입력해 주세요.');
        return;
    }

    if (!userName) {
        alert('이름은 필수 항목입니다. 이름을 입력해 주세요.');
        return;
    }

    if (!nickname) {
        alert('닉네임은 필수 항목입니다. 닉네임을 입력해 주세요.');
        return;
    }

    if (!authority) {
        alert('사용자 구분은 필수 항목입니다. 사용자 구분을 선택해 주세요.');
        return;
    }

    if (!email) {
        alert('이메일은 필수 항목입니다. 이메일을 입력해 주세요.');
        return;
    }

    if (!gender) {
        alert('성별은 필수 항목입니다. 성별을 선택해 주세요.');
        return;
    }

    if (!phoneNumber) {
        alert('핸드폰 번호는 필수 항목입니다. 핸드폰 번호를 입력해 주세요.');
        return;
    }

    if (!birthDate) {
        alert('생년월일은 필수 항목입니다. 생년월일을 입력해 주세요.');
        return;
    }

    if (!isValidPassword(password)) {
        alert('비밀번호는 6자에서 20자로 되어야 합니다.');
        return;
    }

    if (password !== confirmPassword) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
    }

    // 여기서 서버에 회원가입 요청을 보내는 로직을 추가
    // 예: axios.post('/signup', { userId, password, userName, nickname, authority: authority.value, email, gender: gender.value, phoneNumber, birthDate })
}