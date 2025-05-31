// 웹 브라우저 내장 라이브러리 : WEB Crypto API 활용
// AES-256-GCM 대칭 암호 알고리즘 구현

function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  bytes.forEach(b => binary += String.fromCharCode(b));
  return window.btoa(binary);
}
export function base64ToArrayBuffer(base64) {
  const binary = window.atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// CryptoKey 객체를 바로 세션에 저장 X (세션 내 데이터는 문자열 기반 키-값 구조이기 때문)
// 1. key 내보내기(export) --- (저장 가능한 형태로 변환, ArrayBuffer 또는 JWK) --->
// 2. key 문자열로 변환하여 저장 --- (세션에 저장할 수 있도록 Base64 또는 Hex 문자열로 변환) ---> 세션 저장 가능!
// 3. 불러올 때는 key 다시 복원 --- (세션으로부터 문자열로 key 받음, ArrayBuffer로 변환 후 import) ---> 복원 완료!

export async function encryptByAES_GCM(data) {
    // AES-GCM 키 생성(256 비트)
    const key = await crypto.subtle.generateKey(
        { name: 'AES-GCM', length: 256 },
        true, // 키를 내보내거나 저장할 수 있게 허용
        ['encrypt', 'decrypt'] // 이 키로 할 수 있는 작업(암호화/복호화)
    );

    // iv(초깃값) 난수 생성(12 바이트 = 96 비트)
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 초기화 벡터
    const encodedData = new TextEncoder().encode(data);

    // 실제 암호화 작업
    const encrypted = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        encodedData
    );
    const base64encrypt = arrayBufferToBase64(encrypted);

    // key 내보내는 로직(저장가능한 형태 변환 -> 문자열 변환)
    const rawkey = await crypto.subtle.exportKey('raw', key); // ArrayBuffer 변환
    const base64key = arrayBufferToBase64(rawkey); // 문자열로 변환
    // iv 문자열 변환
    const base64iv = arrayBufferToBase64(iv); // 문자열로 변환

    sessionStorage.setItem("key", base64key);
    sessionStorage.setItem("iv", base64iv);
    return base64encrypt;
}


export async function decryptByAES_GCM(encrypted, key, iv) {
    const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        encrypted
    );
    return console.log(`AES256-GCM 알고리즘으로 복호화된 비밀번호 : ${new TextDecoder().decode(decrypted)}`);
}