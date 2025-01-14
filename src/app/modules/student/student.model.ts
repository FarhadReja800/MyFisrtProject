import { Schema, model } from 'mongoose';
import { Guardian, LocalGuadian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
  fristName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccuption: {
    type: String,
  },
  fatherContractNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccuption: {
    type: String,
  },
  motherContractNo: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<LocalGuadian>({
  name: {
    type: String,
  },
  occuption: {
    type: String,
  },
  contractNo: {
    type: String,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,

  gender: ['male', 'female'],

  dateOfBirth: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },
  contractNumber: {
    type: String,
  },
  emargencyContractNum: {
    type: String,
  },
  bloodgroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  localGuadian: localGuardianSchema,
  profileImg: {
    type: String,
  },
  isActive: ['active', 'blocked'],
});

export const StudentModel = model<Student>('Student', studentSchema);
