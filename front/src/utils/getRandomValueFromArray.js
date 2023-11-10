/*
    배열에 있는 원소를 랜덤하게 하나 추출하는 메서드입니다.
     - inputType : array[]
*/
export function getRandomValueFromArray(arrayList) {
    return arrayList[Math.floor(Math.random() * arrayList.length)];
}