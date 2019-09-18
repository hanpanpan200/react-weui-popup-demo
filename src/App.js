import React from 'react';
import { Page, Button, Popup, PopupHeader, Article } from 'react-weui'
import 'weui'
import 'react-weui/build/packages/react-weui.css'
import './App.css'

class PopupDemo extends React.Component {
    state = {
        fullpage_show: false,
    };

    hide(){
      this.setState({
          fullpage_show: false,
      })
    }

    render() {
        return (
            <Page className="popup" title="Popup" subTitle="pop pop pop it up" spacing>
              <Button type="default" onClick={e=>this.setState({fullpage_show: true})}>Full pagePopup</Button>
              <Popup
                  show={this.state.fullpage_show}
                  onRequestClose={e=>this.setState({fullpage_show: false})}
              >

                <PopupHeader
                  left="Cancel"
                  right="Ok"
                  leftOnClick={e=>this.setState({fullpage_show: false})}
                  rightOnClick={e=>this.setState({fullpage_show: false})}
                />
                  <div style={{height: '90vh', overflow: 'scroll'}}>
                    <Article>
                        <h1>H1 Heading</h1>
                        <section>
                            <h2 className="title">H2 Title</h2>
                            <section>
                                <h3>H3 Heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                                <p>
                                    Hello
                                </p>
                            </section>
                            <section>
                                <h3>H3 Heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </section>
                        </section>
                        <section>
                            <h2 className="title">H2 Title</h2>
                            <section>
                                <h3>H3 Heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                                <p>
                                    Hello
                                </p>
                            </section>
                            <section>
                                <h3>H3 Heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </section>
                        </section>
                        <Button onClick={e=>this.setState({fullpage_show: false})}>Close Popup</Button>
                    </Article>
                  </div>
              </Popup>
            </Page>
        );
    }
};
export default PopupDemo;