import axios from "axios";
import { BaseAPIType } from "@Libs/Interaces";


/* 로그인 */
export const APITokenAuth: BaseAPIType = (url = "/api-token-auth", payload) => {};
/* 닉네임 중복 검사 */
export const NicknameValidate: BaseAPIType = (url = "/v1/user/nickname-validate") => {};
/* 이메일 중복 검사 */
export const EmailValidate: BaseAPIType = (url = "/v1/user/email-validate") => {};
