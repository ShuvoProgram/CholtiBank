export interface IUser {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  pin: string;
  nationalId: string;
  role: string;
}

export interface IJwtDecoded {
  userId: string;
  phoneNumber: string;
  role: string;
  iat: number;
  exp: number;
}
