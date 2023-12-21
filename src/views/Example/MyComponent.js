import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'nguyen'
    }


    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className='a'>
                    <input
                        value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>

                <div className='b'>
                    Hello from my Component, {this.state.name}
                </div>
            </div>

        )
    }
}

export default MyComponent