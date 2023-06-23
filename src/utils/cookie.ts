import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = (key: string) => {
  const token = cookies.get(key);

  return token;
};

export const setCookie = (key: string, token: string) => {
  const option = {
    maxAge: 60 * 60 * 12,
    sameSite: "none" as const, // 'none', 'lax', 'strict' 중에서 선택
    secure: true, // HTTPS 연결에서만 쿠키를 전송
  };

  cookies.set(key, token, option);
};
