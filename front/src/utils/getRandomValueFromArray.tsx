/*
    배열에 있는 원소를 랜덤하게 하나 추출하는 메서드입니다.
     - inputType : array[]
*/


const arrayList:string[] = ["default", "info", "success", "warning", "danger"];

export function getRandomValueFromArray() {
    return arrayList[Math.floor(Math.random() * arrayList.length)];
}