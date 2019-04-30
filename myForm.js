import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            vegetarian: false,
            vegan: false,
            glutenFree: false
        }
         this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name" /><br />
                    <input 
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name" /><br />
                    <input 
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age" /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male 
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                        
                    </label>
                    <br />
                    
                    {/* Create select box for location here */}
                    <label>
                        <select 
                            name="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                            >
                        <option value="Seattle">Seattle</option>
                        <option value="Portland">Portland</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        </select>
                    </label>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <label>
                       <input 
                            type="checkbox" 
                            name="vegetarian"
                            checked={this.state.vegetarian}
                            onChange={this.handleChange}
                        /> Vegetarian
                    </label>
                    <br />
                    <label>
                       <input 
                            type="checkbox" 
                            name="vegan"
                            checked={this.state.vegan}
                            onChange={this.handleChange}
                        /> Vegan
                    </label>
                    <br />
                    <label>
                       <input 
                            type="checkbox" 
                            name="glutenFree"
                            checked={this.state.glutenFree}
                            onChange={this.handleChange}
                        /> Gluten Free
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>Your dietary restrictions: </p>
                    <p>Vegetarian: {this.state.vegetarian ? "Yes" : "No"}</p>
                    <p>Vegan: {this.state.vegan ? "Yes" : "No"}</p>
                    <p>glutenFree: {this.state.glutenFree ? "Yes" : "No"}</p>
                
            </main>
        )
    }
}

export default App
