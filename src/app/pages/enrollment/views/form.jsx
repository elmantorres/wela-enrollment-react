import React, { Component } from "react"
import { connect } from "react-redux"
import { addEnrollee } from "../../enrollment/Enrollment.action"
import PropTypes from "prop-types"

import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "new",
            LRN: null,
            lastName: "",
            firstName: "",
            middleName: "",
            birthDate: null,
            birthPlace: "",
            gender: "",
            address: "",
            motherTongue: "",
            ethnic: "",
            fatherName: "",
            fatherOccupation: "",
            fatherOffice: "",
            fatherMobile: "",
            motherName: "",
            motherOccupation: "",
            motherOffice: "",
            motherMobile: "",
            guardianName: "",
            guardianRelation: "",
            guardianOffice: "",
            guardianMobile: "",
            contact: "guardian",
            tuitionFees: "",
            electives: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(event.target)
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const datas = this.state
        this.props.addEnrollee(datas)
        this.setState({
            status: "new",
            LRN: null,
            lastName: "",
            firstName: "",
            middleName: "",
            birthDate: null,
            birthPlace: "",
            gender: "",
            address: "",
            motherTongue: "",
            ethnic: "",
            fatherName: "",
            fatherOccupation: "",
            fatherOffice: "",
            fatherMobile: "",
            motherName: "",
            motherOccupation: "",
            motherOffice: "",
            motherMobile: "",
            guardianName: "",
            guardianRelation: "",
            guardianOffice: "",
            guardianMobile: "",
            contact: "guardian",
            tuitionFees: "",
            electives: "",
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <CssBaseline />
                <Container maxWidth="md" style={{ marginBottom: "10%" }}>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container spacing={3} direction="row">
                            <Grid item xs={12}>
                                <Typography variant="h6">Online Enrollment</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <Typography style={{ textAlign: "center" }} variant="h6" gutterBottom>
                                    Student Information
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray" }}
                        >
                            <Grid item xs={12} style={{ marginBottom: "1%" }}>
                                <FormControl component="div" fullWidth>
                                    <RadioGroup
                                        row
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel
                                            id="status"
                                            style={{ width: "150px" }}
                                            value="old"
                                            control={<Radio id="status" />}
                                            label="Old Student"
                                        />
                                        <FormControlLabel
                                            style={{ width: "150px" }}
                                            value="new"
                                            control={<Radio id="status" />}
                                            label="New Student"
                                        />
                                        <FormControlLabel
                                            style={{ width: "150px" }}
                                            value="transferee"
                                            control={<Radio id="status" />}
                                            label="Transferee"
                                        />
                                        <FormControlLabel
                                            style={{ width: "150px" }}
                                            value="returnee"
                                            control={<Radio id="status" />}
                                            label="Returnee"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12} style={{ marginBottom: "1%" }}>
                                <TextField
                                    margin="dense"
                                    type="number"
                                    variant="outlined"
                                    style={{ width: "100%", maxWidth: "350px" }}
                                    id="LRN"
                                    onChange={this.handleChange}
                                    label="Learner's Reference Number (LRN)"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12} style={{ marginBottom: "1%" }}>
                                <FormLabel component="legend" style={{ padding: "8px" }}>
                                    Full Name
                                </FormLabel>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", maxWidth: "300px", paddingRight: "1%" }}
                                    id="lastName"
                                    label="Last Name"
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", maxWidth: "300px", paddingRight: "1%" }}
                                    id="firstName"
                                    label="First Name"
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", maxWidth: "300px", paddingRight: "1%" }}
                                    id="middleName"
                                    label="Middle Name"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12} style={{ marginBottom: "1%" }}>
                                <TextField
                                    type="date"
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", maxWidth: "300px", paddingRight: "1%" }}
                                    id="birthDate"
                                    label="Birthdate"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", maxWidth: "300px", paddingRight: "1%" }}
                                    id="birthPlace"
                                    label="Birthdplace"
                                    onChange={this.handleChange}
                                />
                                <FormControl
                                    style={{ width: "100%", maxWidth: "300px" }}
                                    variant="outlined"
                                    margin="dense"
                                >
                                    <InputLabel htmlFor="outlined-gender-native-simple">Gender</InputLabel>
                                    <Select
                                        native
                                        margin="dense"
                                        value={this.state.gender}
                                        onChange={this.handleChange}
                                        label="Gender"
                                        id="gender"
                                        inputProps={{
                                            name: "gender",
                                            id: "gender",
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={"male"}>Male</option>
                                        <option value={"female"}>Female</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    rows="4"
                                    multiline
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", paddingRight: "1%" }}
                                    id="address"
                                    label="Permanent Address"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} direction="row" justify="space-around" alignItems="center">
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", paddingRight: "1%" }}
                                    id="motherTongue"
                                    label="Mother Tongue"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", paddingRight: "1%" }}
                                    id="ethnic"
                                    label="IP (Ethnic Group)"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12}>
                                <FormLabel component="legend" style={{ padding: "8px" }}>
                                    {"Father's Information"}
                                </FormLabel>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", maxWidth: "600px", paddingRight: "1%" }}
                                    id="fatherName"
                                    label="Father's Name"
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", maxWidth: "300px", paddingRight: "1%" }}
                                    id="fatherOccupation"
                                    label="Father's Occupation"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", paddingRight: "1%" }}
                                    id="fatherOffice"
                                    label="Office Number"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{ width: "100%", paddingRight: "1%" }}
                                    id="fatherMobile"
                                    label="Mobile Number"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12}>
                                <FormLabel component="legend" style={{ padding: "8px" }}>
                                    {"Mother's Information"}
                                </FormLabel>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{
                                        width: "100%",
                                        maxWidth: "600px",
                                        paddingRight: "1%",
                                    }}
                                    id="motherName"
                                    label="Mother's Name"
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{
                                        width: "100%",
                                        maxWidth: "300px",
                                        paddingRight: "1%",
                                    }}
                                    id="motherOccupation"
                                    label="Mother's Occupation"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{
                                        width: "100%",
                                        paddingRight: "1%",
                                    }}
                                    id="motherOffice"
                                    label="Office Number"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{
                                        width: "100%",
                                        paddingRight: "1%",
                                    }}
                                    id="motherMobile"
                                    label="Mobile Number"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12}>
                                <FormLabel component="legend" style={{ padding: "8px" }}>
                                    {"Guardian's Information"}
                                </FormLabel>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{
                                        width: "100%",
                                        maxWidth: "600px",
                                        paddingRight: "1%",
                                    }}
                                    id="guardianName"
                                    label="Guardian's Name"
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{
                                        width: "100%",
                                        maxWidth: "300px",
                                        paddingRight: "1%",
                                    }}
                                    id="guardianRelation"
                                    label="Relation"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{
                                        width: "100%",
                                        paddingRight: "1%",
                                    }}
                                    id="guardianOffice"
                                    label="Office Number"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    style={{
                                        width: "100%",
                                        paddingRight: "1%",
                                    }}
                                    id="guardianMobile"
                                    label="Mobile Number"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12} style={{ marginBottom: "1%" }}>
                                <FormControl fullWidth component="div" variant="outlined" margin="dense">
                                    <FormLabel component="legend" style={{ padding: "8px" }}>
                                        {"In case of Emergency(News and Announcement, ID Information)"}
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        name="contact"
                                        value={this.state.contact}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel
                                            style={{ width: "150px" }}
                                            value="father"
                                            control={<Radio id="contact" />}
                                            label="Father"
                                        />
                                        <FormControlLabel
                                            style={{ width: "150px" }}
                                            value="mother"
                                            control={<Radio id="contact" />}
                                            label="Mother"
                                        />
                                        <FormControlLabel
                                            style={{ width: "150px" }}
                                            value="guardian"
                                            control={<Radio id="contact" />}
                                            label="Guardian"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={6}>
                                <FormLabel component="legend" style={{ padding: "8px" }}>
                                    {"For Business Office Use Only"}
                                </FormLabel>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ flexGrow: "1" }}
                        >
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <FormControl
                                    style={{ width: "100%", maxWidth: "300px" }}
                                    variant="outlined"
                                    margin="dense"
                                >
                                    <InputLabel htmlFor="outlined-gender-native-simple">{"Tuition Fees"}</InputLabel>
                                    <Select
                                        native
                                        margin="dense"
                                        value={this.state.tuitionFees}
                                        onChange={this.handleChange}
                                        label="Tuition Fees"
                                        id="tuitionFees"
                                        inputProps={{
                                            name: "Tuition Fees",
                                            id: "tuitionFees",
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={"annual"}>Annual</option>
                                        <option value={"quarterly"}>Quarterly</option>
                                        <option value={"semiAnnual"}>Semi Annual</option>
                                        <option value={"monthly"}>Monthly</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} style={{ marginBottom: "1%" }}>
                                <FormControl
                                    style={{ width: "100%", maxWidth: "300px" }}
                                    variant="outlined"
                                    margin="dense"
                                >
                                    <InputLabel htmlFor="outlined-gender-native-simple">{"Electives"}</InputLabel>
                                    <Select
                                        native
                                        margin="dense"
                                        value={this.state.electives}
                                        onChange={this.handleChange}
                                        label="Electives"
                                        id="electives"
                                        inputProps={{
                                            name: "Electives",
                                            id: "electives",
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={"annual"}>Annual</option>
                                        <option value={"quarterly"}>Quarterly</option>
                                        <option value={"semiAnnual"}>Semi Annual</option>
                                        <option value={"monthly"}>Monthly</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ borderTop: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12}></Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            style={{ border: "1px solid gray", flexGrow: "1" }}
                        >
                            <Grid item xs={12}>
                                <Typography style={{ textAlign: "center" }} variant="h6" gutterBottom>
                                    WITHDRAWAL REQUIRES ADVANCE NOTICE
                                </Typography>
                                <Typography
                                    style={{ textAlign: "start", backgroundColor: "lightgray" }}
                                    variant="subtitle1"
                                    gutterBottom
                                >
                                    Withdrawal shall be charged as follows:
                                </Typography>
                                <Typography style={{ textAlign: "start" }} variant="body1" gutterBottom>
                                    Before start of class
                                </Typography>
                                <Grid
                                    container
                                    spacing={3}
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    style={{ flexGrow: "1" }}
                                >
                                    <Grid item xs={6}>
                                        <Typography style={{ textAlign: "start" }} variant="body2" gutterBottom>
                                            Within the 1st week of classes
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography style={{ textAlign: "start" }} variant="body2" gutterBottom>
                                            10% of Tuition & Fees Due for the SY
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={3}
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    style={{ flexGrow: "1" }}
                                >
                                    <Grid item xs={6}>
                                        <Typography style={{ textAlign: "start" }} variant="body2" gutterBottom>
                                            Within the 2nd week of classes
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography style={{ textAlign: "start" }} variant="body2" gutterBottom>
                                            20% of Tuition & Fees Due for the SY
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={3}
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    style={{ flexGrow: "1" }}
                                >
                                    <Grid item xs={6}>
                                        <Typography style={{ textAlign: "start" }} variant="body2" gutterBottom>
                                            Within the 3rd week of classes
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography style={{ textAlign: "start" }} variant="body2" gutterBottom>
                                            30% of Tuition & Fees Due for the SY
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={3}
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    style={{ flexGrow: "1" }}
                                >
                                    <Grid item xs={6}>
                                        <Typography style={{ textAlign: "start" }} variant="body2" gutterBottom>
                                            After the 3rd week of classes
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography style={{ textAlign: "start" }} variant="body2" gutterBottom>
                                            100% of Tuition & Fees Due for the SY
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ flexGrow: "1" }}
                        >
                            <Grid item xs={12}></Grid>
                        </Grid>
                        <Grid container spacing={3} direction="row" justify="flex-end" alignItems="center">
                            <Grid item md={1}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                    style={{ textTransform: "None" }}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addEnrollee: data => dispatch(addEnrollee(data)),
})

Form.propTypes = {
    addEnrollee: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Form)
