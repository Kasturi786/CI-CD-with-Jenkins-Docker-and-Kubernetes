import React, { PureComponent } from 'react'
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class StudentList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {students: []};
        this.remove = this.remove.bind(this);

    }

    componentDidMount() {
        fetch('http://localhost:8080/students')
            .then(response => response.json())
            .then(data => this.setState({students: data}));
    }


    async remove(id) {
        await fetch('http://localhost:8080/students/'+(id), {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedStudents = [...this.state.students].filter(i => i.id !== id);
            this.setState({students: updatedStudents});
        });
    }


    render() {
        const {students, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        const studentList = students.map(student => {
            return <tr key={student.id}>
                <td style={{whiteSpace: 'nowrap'}}>{student.fname}</td>
                <td style={{whiteSpace: 'nowrap'}}>{student.lname}</td>
                <td style={{whiteSpace: 'nowrap'}}>{student.dept}</td>
                <td>{student.email}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/students/" + student.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(student.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
    
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/students/new">Add Student</Button>
                    </div>
                    <h3>Students</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">FirstName</th>
                            <th width="30%">LastName</th>
                            <th width="30%">Department</th>
                            <th width="30%">Email</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {studentList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }


}

export default StudentList