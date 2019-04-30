import React, {Component} from "react"
import { Segment, Input, Button } from "semantic-ui-react";


/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state= {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    /**
     * We'll be using an API that provides a bunch of meme images.
     * 
     * Your task:
     * make an API call to "https://api.imgflip.com/get_memes" and save the 
     * data that comes back (response.data.memes) to a new state property
     * called allMemeImgs. (The data that comes back is an array)
     */

    componentDidMount() {
        // this.setState({loading: true})
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                // this.setState({
                    // loading: false,
                    const {memes} = response.data
                    this.setState({ allMemeImages: memes })
                })
            // })
    }
        /**
         * Create 2 input fields, one for the topText and one for the bottomText
         * Remember that these will be "controlled forms", so make sure to add
         * all the attributes you'll need for that to work
         * Create the onChagne handler method
         * It should update the corresponding state on every change of the input box
         * Create a method that, when the "Gen" button is clicked, chooses one of the: ? <form> onSubmit
         * memes from our allMemeImgs array at random and makes it so that is the
         * meme image that shows up in the bottom portion of our meme generator site
         */

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randMemeImage = this.state.allMemeImages[randNum].url
        // set `randomImg` to the `.url` of the random item I grabbed
        this.setState({ randomImage: randMemeImage})
    }

    render() {
        return (
           <>
            <form className="meme-form" onSubmit={this.handleSubmit}>
            
                    <Input style={{marginLeft: "4px"}}
                        type="text"
                        name="topText"
                        placeholder="top text"
                        value={this.state.topText} 
                        onChange={this.handleChange} />
                
                
                    <Input style={{marginLeft: "6px"}}
                        type="text"
                        name="bottomText"
                        placeholder="bottom text"
                        value={this.state.bottomText} 
                        onChange={this.handleChange} />
                    
                    <Button style={{marginLeft: "6px"}}>Make It</Button>
                
            </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
           </>
        )
    }

}

export default MemeGenerator