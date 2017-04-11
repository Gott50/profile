import React, {Component} from "react";
import "./webflow.css";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userInfo: this.getUserInfo(),
            userProfile: this.getUserProfile(),
            user_goal: this.getUserProfile().user_goal
        }
    }

    handleSelect(event) {
        this.setState({
            user_goal: event.target.value
        });
    }

    render() {
        return (
            <div className="profile-content-parent">
                <div className="profile-slider w-slider" data-animation="slide" data-duration="300"
                     data-easing="ease-in"
                     data-infinite="1">
                    <div className="w-slider-mask">
                        <div className="slide w-slide">
                            <div className="profile-top">
                                <div className="profile-top-boss"><h2
                                    className="heading-3">{this.state.userInfo.first_name} {this.state.userInfo.last_name}</h2>
                                    <div className="text-block-3">Strength
                                        #1: {this.state.userProfile.main_strength}</div>
                                </div>
                            </div>
                            <div className="lvl-boss">
                                <div className="your-level">Lvl {this.state.userProfile.workout_level}:</div>
                                <div className="xp">{this.state.userProfile.ep}/{this.state.userProfile.of_ep} XP</div>
                            </div>
                            <div className="level-bar"
                                 style={{width: 100 * this.state.userProfile.ep / this.state.userProfile.of_ep + "%"}}></div>
                            <div className="overview-slide profile-bottom">
                                <div className="stats-boss w-container">
                                    <div className="number-of-supervisor">
                                        <div
                                            className="days-in number">{this.state.userProfile.days_being_on_fitness_journey}</div>
                                        <div className="stats-description">days in</div>
                                    </div>
                                    <div className="number-of-supervisor">
                                        <div className="drills number">{this.state.userProfile.number_of_workouts}</div>
                                        <div className="stats-description">drills</div>
                                    </div>
                                </div>
                                <div className="goals-father w-container">
                                    <div className="functionality w-form which-goal-boss">
                                        <form className="which-goal" data-name="Email Form" id="email-form"
                                              name="email-form">
                                            <select className="goals w-select" data-ix="profile-dropdown"
                                                    data-name="Goal 2"
                                                    id="Goal-2" name="Goal-2"
                                                    onChange={this.handleSelect.bind(this)}>
                                                <option value="fit">fit☀️</option>
                                                <option value="fun">fun😁</option>
                                                <option value="muscles">muscles💪</option>
                                                <option value="weight">🔥 weight</option>
                                                <option value="else">else</option>
                                            </select></form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form</div>
                                        </div>
                                    </div>
                                    <div className="goal-boss">
                                        <div className="goal">Goal:</div>
                                        <div className="usergoal">{this.state.user_goal}</div>
                                    </div>
                                    <div className="w-form which-goal-boss">
                                        <form className="which-goal" data-name="Email Form" id="email-form"
                                              name="email-form">
                                            <select className="goals w-select" data-name="Goal" id="Goal" name="Goal">
                                            </select></form>
                                        <div className="w-form-done"></div>
                                        <div className="w-form-fail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left-arrow-4 slide-2-button w-slider-arrow-left">
                        <div className="w-icon-slider-left"></div>
                    </div>
                    <div className="right-arrow-2 rights slide-2-button w-slider-arrow-right">
                        <div className="w-icon-slider-right"></div>
                    </div>
                    <div className="slide-nav-2 w-round w-slider-nav"></div>
                </div>
                <div className="placeholder-boss slide-trigger-button-boss"><a
                    className="placeholder-button slide-2-button w-button"
                    href="#">Share</a>
                    <div className="slider-simulator"></div>
                    <div className="rights slide-2-button text-only-boss" data-ix="back-button-appear">
                        <div className="slide-2-button text-only">back</div>
                    </div>
                </div>
                <div className="slide-trigger-button-boss"><a className="slide-2-button w-button" href="#">Share</a>
                    <div className="slider-simulator"></div>
                    <a className="rights slide-2-button w-button" href="#"><span className="menu-point">Stats</span></a>
                </div>
            </div>
        );
    }

    getUserInfo() {
        return this.props.userInfo ? this.props.userInfo :
            {
                "first_name": "Heinz",
                "last_name": "Peter",
                "profile_pic": "https:\/\/scontent.xx.fbcdn.net\/v\/t1.0-1\/15036439_133586007120038_5845749879268385555_n.jpg?oh=1bc38742e9dbb45bcda90b9f56d4eb3b&oe=5958C212",
                "locale": "de_DE",
                "timezone": 2,
                "gender": "male"
            };
    }

    getUserProfile() {
        return this.props.userProfile ? this.props.userProfile :
            {
                number_of_workouts: 0,
                workout_level: 0,
                ep: 0,
                main_strength: "Starting",
                days_being_on_fitness_journey: 0,
                subscribed: false,
                user_goal: "else",
                created_at: "2017-04-06T21:36:17.970Z",
                updated_at: "2017-04-06T21:36:17.970Z",
                of_ep: 30
            };
    }
}

export default App;
