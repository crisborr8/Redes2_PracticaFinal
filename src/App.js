import React, {Component} from 'react';
import './App.css'

import Desarrollador from './Tabs/Desarrollador/Desarrollador';
import Administrador from './Tabs/Administrador/Administrador';
import Home from './Tabs/Home/Home';

class App extends Component {
  render(){
    return(
      <>
        <div className="tabs">
          <h1>Ucron v-1</h1>
          <Tabs>
            <Tab label="Home">
              <div className='Content'>
                <Home/>
              </div>
            </Tab>
            <Tab label="Administrador">
              <div className='Content'>
                <Administrador/>
              </div>
            </Tab>
            <Tab label="Desarrollador">
              <div className='Content'>
                <Desarrollador/>
              </div>
            </Tab>
          </Tabs>
        </div>
      </>
    )
  }
}

class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
 

export default App;
