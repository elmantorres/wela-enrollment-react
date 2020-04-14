import { Enrollment } from "../entities/Enrollment"
import { EnrollmentRepository } from "../repositories/EnrollmentRepository"

export interface EnrollmentService {
    addEnrollee(data: Enrollment): void
}

export class EnrollmentServiceImpl implements EnrollmentService {
    enrollmentRepo: EnrollmentRepository

    constructor(ir: EnrollmentRepository) {
        this.enrollmentRepo = ir
    }

    async addEnrollee(data: Enrollment) {
        return this.enrollmentRepo.addEnrollee(data)
    }
}
