import React, { Component } from 'react';
import Grandfather from './grandfather';

class Count extends React.Component {
    state = { counter: 0, sonCounter: 0, grandsonCounter: 0, grandsonCounter: 0 };
    fatherClick() {
      this.setState({ sonCounter: this.state.sonCounter + 1 });
    }
    sonClick() {
      this.setState({ grandsonCounter: this.state.grandsonCounter + 1 });
    }
    render() {
      const { counter, sonCounter, grandsonCounter } = this.state;
      return (
          <div className="container text-center">
            <div className="row" onClick={() => this.setState({ counter: counter + 1 })}>
                <div className="col-md-12 mt-5 btn btn-primary btn-sm">
                    Grandfather: {counter}
                </div>

                <div className="col-md-6">
                    <Grandfather
                        counter={counter}
                        grandsonCounter={grandsonCounter}
                        sonCounter={sonCounter}
                        key={1}
                        onClick={() => this.fatherClick()}
                        onSonClick={() => this.sonClick()}
                    />
                </div>

                <div className="col-md-6 ">
                    <Grandfather
                        counter={counter}
                        grandsonCounter={grandsonCounter}
                        sonCounter={sonCounter}
                        key={1}
                        onClick={() => this.fatherClick()}
                        onSonClick={() => this.sonClick()}
                    />
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Count;
  