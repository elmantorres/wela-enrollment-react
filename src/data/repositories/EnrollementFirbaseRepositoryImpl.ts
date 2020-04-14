import { Enrollment } from "../../domain/entities/Enrollment"
import { EnrollmentRepository } from "../../domain/repositories/EnrollmentRepository"
import { firebaseApp } from "../../app/pages/common/firestore"
import firebase from "firebase"

const db = firebaseApp.firestore()

export class EnrollmentRepositoryImpl implements EnrollmentRepository {
    async addEnrollee(data: Enrollment) {
        const newAssRef = await db.collection("enrollmentForms").doc()
        await newAssRef.set(data)
        await newAssRef.update({
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
}
