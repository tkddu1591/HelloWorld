import {changeDTO} from "../../store/changeDTO";

/**
 * 데이터 유효성 검사
 */
// 정규표현식
/*const reUid   = /^[a-z]+[a-z0-9]{4,12}$/g;
const reName  = /^[가-힣]{2,10}$/*/
const rePass  = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/;
const reEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
/*const reHp    = /^01(?:0|1|[6-9])-(?:\d{4})-\d{4}$/;
const reBirth  = /^(?!0000)[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
const reTel	= /^(0[2-8][0-5]?)-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;
const reComNo = /^(?:[가-힣]{2,4}-[0-9]{5}|제\s\d-\d{2}-\d{2}-\d{4}호|\d{4}-[가-힣]{4}-\d{4})$/;
const reFax	= /^(0[2-8][0-5]?)-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;
const reCompany = /^\(주\)[a-zA-Z가-힣]{2,}$/;
const reBiz = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;*/

export function isValidEmail(email) {
    console.log(" - email : " + email)
    if(email == null || email === "") {
        alert("이메일을 입력해주세요.");
        return false;
    }
    if(email.match(reEmail)) {
        return true;
    }
    alert("유효하지 않은 이메일")
    return false;
}

export function isValidPass(pass1, pass2) {
    if(!pass1.match(rePass)) return false;
    return pass1 === pass2;
}

export function isOkPasswordHandler( setIsOk, inputValue ) {
    changeDTO(
        setIsOk,
        'pass',
        isValidPass(inputValue.pass, inputValue.passChk)
    );
}

export function isAutoLoginHandler(inputValue, setInputValue) {
    changeDTO(
        setInputValue,
        'isAutoLogin',
        !inputValue.isAutoLogin
    );
}