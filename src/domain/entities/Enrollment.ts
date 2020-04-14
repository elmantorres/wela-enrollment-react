export class Enrollment {
    status: string
    LRN: number
    lastName: string
    firstName: string
    middleName: string
    birthDate: Date
    birthPlace: string
    gender: string
    address: string
    motherTongue: string
    ethnic: string
    fatherName: string
    fatherOccupation: string
    fatherOffice: string
    fatherMobile: string
    motherName: string
    motherOccupation: string
    motherOffice: string
    motherMobile: string
    guardianName: string
    guardianRelation: string
    guardianOffice: string
    guardianMobile: string
    contact: string
    tuitionFees: string
    electives: string
    createdAt: Date

    constructor(
        status: string,
        LRN: number,
        lastName: string,
        firstName: string,
        middleName: string,
        birthDate: Date,
        birthPlace: string,
        gender: string,
        address: string,
        motherTongue: string,
        ethnic: string,
        fatherName: string,
        fatherOccupation: string,
        fatherOffice: string,
        fatherMobile: string,
        motherName: string,
        motherOccupation: string,
        motherOffice: string,
        motherMobile: string,
        guardianName: string,
        guardianRelation: string,
        guardianOffice: string,
        guardianMobile: string,
        contact: string,
        tuitionFees: string,
        electives: string,
        createdAt: Date,
    ) {
        this.status = status
        this.LRN = LRN
        this.lastName = lastName
        this.firstName = firstName
        this.middleName = middleName
        this.birthDate = birthDate
        this.birthPlace = birthPlace
        this.gender = gender
        this.address = address
        this.motherTongue = motherTongue
        this.ethnic = ethnic
        this.fatherName = fatherName
        this.fatherOccupation = fatherOccupation
        this.fatherOffice = fatherOffice
        this.fatherMobile = fatherMobile
        this.motherName = motherName
        this.motherOccupation = motherOccupation
        this.motherOffice = motherOffice
        this.motherMobile = motherMobile
        this.guardianName = guardianName
        this.guardianRelation = guardianRelation
        this.guardianOffice = guardianOffice
        this.guardianMobile = guardianMobile
        this.contact = contact
        this.tuitionFees = tuitionFees
        this.electives = electives
        this.createdAt = createdAt
    }
}