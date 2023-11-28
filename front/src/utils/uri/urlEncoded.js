/*
    key, value의 JSON 형식 데이터를
    url 파라미터 형식으로 변환해주는 메서드
 */
export const urlEncoded = (data) => {
    return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
}