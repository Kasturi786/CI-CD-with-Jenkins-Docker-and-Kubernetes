import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class StudentEdit extends PureComponent {

    emptyItem = {
        fname: '',
        lname: '',
        dept: '',
        email: ''
    };

    constructor(props) {
        super(props)

        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const student = await (await fetch('http://localhost:8080/students/'+(this.props.match.params.id))).json();
            this.setState({item: student});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }


    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('http://localhost:8080/students' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/students');
    }



    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Student' : 'Add Student'}</h2>;
    
        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">FirstName</Label>
                        <Input type="text" name="fname" id="fname" value={item.fname || ''}
                               onChange={this.handleChange} autoComplete="fname"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">LastName</Label>
                        <Input type="text" name="lname" id="lname" value={item.lname || ''}
                               onChange={this.handleChange} autoComplete="lname"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Department</Label>
                        <Input type="text" name="dept" id="dept" value={item.dept || ''}
                               onChange={this.handleChange} autoComplete="dept"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/students">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }


}

export default withRouter(StudentEdit)