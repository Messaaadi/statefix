import React, { Component } from "react";
import img from "./image/pic1.jpg";

class Profile extends Component {
    state={
        person: {
            fullName: "Muhammed messaadi",
            bio: "they call me Matrix",
            imgSrc: img,
            profession: "Web developer",
        },
        time: 0,
        interval: null
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: this.state.time + 1,
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    render() {
        return (
            <div>
                <h1>{this.state.person.fullName}</h1>
                <img
                    src={this.state.person.imgSrc}
                    style={{ width: 300 }}
                />
                <p>{this.state.person.bio}</p>
                <p>{this.state.person.profession}</p>
                <p>Time since connect:{this.state.time}</p>
            </div>
        );
    }
}
export default Profile;
