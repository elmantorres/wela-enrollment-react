import { Enrollment } from "../entities/Enrollment"

export interface EnrollmentRepository {
    addEnrollee(data: Enrollment): void
}
