// ./ 삭제 X, import할 때 ./를 생략하면 외부 패키지(npm,CDN)로 해석하기 때문
import { encrypt_text, decrypt_text } from './crypto.js';
import { base64ToArrayBuffer, decryptByAES_GCM } from './crypto2.js';
import { generateJWT, checkAuth } from './jwt_token.js';
import { joinObject_check } from './join2.js';

document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    init_logined();
    joinObject_check();
});


async function init_logined(){
    if(sessionStorage){
        decrypt_text(); // 복호화 함수

        // 문자열로 받은 key, iv 다시 복원
        const base64key = sessionStorage.getItem("key");
        const rawkey = base64ToArrayBuffer(base64key); // arrayBuffer로 변환
        const key = await crypto.subtle.importKey(  // key import
            'raw',
            rawkey,
            { name: 'AES-GCM' },
            true,
            ['encrypt', 'decrypt']
        );
        const base64iv = sessionStorage.getItem("iv");
        const iv = base64ToArrayBuffer(base64iv); // arrayBuffer로 변환
        const base64encrypted = sessionStorage.getItem("Session_Storage_pass2");
        const encrypted = base64ToArrayBuffer(base64encrypted);
        await decryptByAES_GCM(encrypted, key, iv);
    }
    else{
        alert("세션 스토리지 지원 x");
    }
}