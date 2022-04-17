import { Component } from 'react';
import '../Tarjeta.css'

class Administrador extends Component {
    render(){
        return (
          <>
            <div class="container">
                <div class="row">
                    <div class="column">
                        <div class="profile-card-4">
                            <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive"/>
                            <div class="profile-content">
                                <div class="profile-name">VicePresidente
                                    <p>Luis</p>
                                </div>
                                <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="profile-card-4">
                            <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive"/>
                            <div class="profile-content">
                                <div class="profile-name">Presidente
                                    <p>Christofer</p>
                                </div>
                                <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="profile-card-4">
                            <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive"/>
                            <div class="profile-content">
                                <div class="profile-name">Ministro de seguridad
                                    <p>Diego</p>
                                </div>
                                <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </>
        );
    }
  }

export default Administrador
  