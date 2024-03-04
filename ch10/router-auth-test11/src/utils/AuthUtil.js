const staticUsers = [
    // 회원 리스트
    { userid: "user1", password: "1234", roles: ["users"] },
    { userid: "user2", password: "1234", roles: ["users"] },
    { userid: "admin", password: "1234", roles: ["users", "admins"] },
];

const pathsToRoles = [
    // roles 정보에 의해 접근가능한 경로 분리(배열 추천)
    { path: "/", roles: ["everybody"] },
    { path: "/login", roles: ["everybody"] },
    { path: "/users", roles: ["users", "admins"] },
    { path: "/admins", roles: ["admins"] },
];

/**---------- 로컬스토리지에서 사용자 정보 처리 */
// 실행순서 2
//userInfo가 null이면 로컬 스토리지 삭제
const setUserInfo = (userInfo) => {
    if (userInfo && userInfo.authenticated) {//getUserInfo()가 반환하는 값을 조건문에 사용
        window.localStorage.setItem("userInfo", btoa(JSON.stringify(userInfo)));
        // localStorage에 저장되는 정보는 텍스트 이므로 JSON들어온 사용자 정보를 텍스트 화 해서 밀어넣는다
        // btoa()를 거쳐서 base64로 인코딩하여 저장됨 => 토큰

        // window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
        // btoa를 거치지 않으면 유저 정보가 객체형식으로 그대로 오픈되어 저장됨
    } else {
        window.localStorage.removeItem("userInfo");
    }
};
// 실행순서 1
const getUserInfo = () => {
    let strUserInfo = window.localStorage.getItem("userInfo"); // 유저정보 변수에 할당
    if (!strUserInfo) { // 유저정보가 없으면
        return { authenticated: false }; // 인증됨 키에 false반환
    } else {
        return JSON.parse(window.atob(strUserInfo));
    }
};
/**---------- */


/**---------- 로그인/로그아웃 처리 */
// const loginProcess = (아이디, 패스워드, 성공시콜링할이름, 실패시콜링할이름) => {
const loginProcess = (userid, password, successCallback, failCallback) => {
    //이 부분은 백엔드 API 인증 서버와 HTTP로 통신하여 인증 처리해야 함.
    const user = staticUsers.find((u) => u.userid === userid && u.password === password);
    if (user) {
        let userInfo = {
            authenticated: true,
            userid: user.userid,
            roles: user.roles
        };
        setUserInfo(userInfo); // 로컬스토리지에 사용자 정보 저장
        successCallback(); // 콜백함수 출력방식, 성공시 함수로 출력
        // login.vue의 successCallback실행
    } else {
        if (failCallback) failCallback(); // 실패시 함수로 출력
    }
};
// const logoutProcess = (최종콜링할이름) => {
const logoutProcess = (callback) => {
    setUserInfo(null);      //로컬 스토리지 삭제
    callback(); // 파라미터 함수콜링
};
/**---------- */


// 경로와 사용자 정보의 role을 기반으로 접근 허가 여부 결정(true/false)
const isMatchToRoles = (reqPath) => {
    // { path:"/", roles: ["everybody"] }
    const path = pathsToRoles.find((pr) => pr.path === reqPath);
    // 1단계: 경로가 없다면 접근 불가
    if (!path) return false;

    const userInfo = getUserInfo();
    // 2단계-1: 인증되지 않았다면 everybody가 지정된 경로만 접근 가능
    if (userInfo.authenticated === false) {
        return path.roles.find((p) => p === "everybody") ? true : false;
    } else {
        // 2단계-2: 인증이 되었다면 userInfo의 roles와 path.roles에 동일한 것이 있어야 함.
        let isAccessible = false; // 초기값
        if (path.roles.indexOf('everybody') > -1) {
            isAccessible = true; // 값 변경
        } else {
            // 회원리스트에서 찾아라
            for (let i = 0; i < userInfo.roles.length; i++) {
                let role = userInfo.roles[i];
                const index = path.roles.indexOf(role);
                if (index >= 0) { // role이 존재한다면, 매칭되는유저를 찾았다면
                    isAccessible = true; // 값변경
                    break; // 탈출각
                }
            }
        }

        return isAccessible; // 최종변경된 값 반환
    }
};

export { isMatchToRoles, loginProcess, logoutProcess, getUserInfo };