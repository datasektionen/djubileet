import React from "react";

class Logo extends React.Component {
    state = {
        page: ""
    };

    componentDidMount() {
        fetch("./animatedLogo/AnimatedLogo.html")
            .then(result => {
                return result.text();
            })
            .then(page => {
                this.setState(
                    {
                        page: { __html: page }
                    },
                );
            });
    }

    render() {
        const { page } = this.state;
        return (
            <>
                <h2>
                    <span>Inserting project using React's </span>
                    <code>dangerouslySetInnerHTML</code>:
                </h2>
                <div dangerouslySetInnerHTML={{__html: ""}}/>
            </>
        );
    }
}

export default Logo;