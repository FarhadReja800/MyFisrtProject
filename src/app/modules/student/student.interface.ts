import {} from 'mongoose';

export type UserName = {
  fristName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccuption: string;
  fatherContractNo: string;
  motherName: string;
  motherOccuption: string;
  motherContractNo: string;
};

export type LocalGuadian = {
  name: string;
  occuption: string;
  contractNo: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contractNumber: string;
  emargencyContractNum: string;
  bloodgroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
  localGuadian: LocalGuadian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
