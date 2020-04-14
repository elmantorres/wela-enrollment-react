import * as types from "./Enrollment.types"
import { EnrollmentServiceImpl } from "../../../domain/usecases/EnrollmentService"
import { EnrollmentRepositoryImpl } from "../../../data/repositories/EnrollementFirbaseRepositoryImpl"

export const addEnrollee = data => {
    return async dispatch => {
        dispatch({ type: types.ADD_ENROLLEE_REQUEST })
        try {
            console.log(data)
            const enrollmentRepo = new EnrollmentRepositoryImpl()
            const enrollmentService = new EnrollmentServiceImpl(enrollmentRepo)
            const items = await enrollmentService.addEnrollee(data)
            dispatch({ type: types.ADD_ENROLLEE_SUCCESS, payload: items })
        } catch (error) {
            dispatch({ type: types.ADD_ENROLLEE_ERROR, error })
        }
    }
}
