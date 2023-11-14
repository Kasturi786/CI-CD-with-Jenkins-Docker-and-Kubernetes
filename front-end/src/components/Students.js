import React, { PureComponent } from 'react'

class Students extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://127.0.0.1:8080/students');
        const body = await response.json();
        console.log(body);
        this.setState({students: body});
      }


    render() {
        const {students} = this.state;
        return (
            <div className="App">
            <header className="App-header">
                <div className="App-intro">
                <h2>Students</h2>
                {students.map(student =>
                    <div key={student.id}>
                        {student.fname} {student.lname} {student.dept} ({student.email})
                    </div>
                )}
                </div>
            </header>
            </div>
        );
   }
    
}

export default Students