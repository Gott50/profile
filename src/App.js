import React, {Component} from "react";
import "./webflow.css";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userInfo: this.getUserInfo(),
            userProfile: this.getUserProfile(),
            user_goal: this.getUserProfile().user_goal,
            month: this.shortMonth(new Date()),
            previous_month: this.shortMonth(this.getPreviousMonth()),
        }
    }

    getPreviousMonth() {
        let date = new Date();
        date.setMonth(date.getMonth() - 1);
        return date;
    }

    shortMonth(date) {
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[date.getMonth()];
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
                                <div className="xp">{this.state.userProfile.ep}/{this.state.userProfile.ep_next_level} XP</div>
                            </div>
                            <div className="level-bar"
                                 style={{width: 100 * this.state.userProfile.ep / this.state.userProfile.ep_next_level + "%"}}></div>
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
                        <div className="slide-2 w-slide">
                            <div className="profile-top-dur">
                                <div className="numbers-boss numbers-headline">
                                    <div className="stats-description stats-headline-description">{this.state.month}</div>
                                    <div className="stats-description stats-headline">Drill Duration min</div>
                                    <div className="stats-description stats-headline-description">Avg {this.state.userProfile.duration_avg_lifetime}</div>
                                </div>
                                <div className="statline top"></div>
                                <div className="stats-father">
                                    <div className="dur-1 stat stat-dur" style={{height: this.state.userProfile.duration_heights[0]}}></div>
                                    <div className="dur-2 stat stat-dur" style={{height: this.state.userProfile.duration_heights[1]}}></div>
                                    <div className="dur-3 stat stat-dur" style={{height: this.state.userProfile.duration_heights[2]}}></div>
                                    <div className="dur-4 stat stat-dur" style={{height: this.state.userProfile.duration_heights[3]}}></div>
                                    <div className="dur-5 stat stat-dur" style={{height: this.state.userProfile.duration_heights[4]}}></div>
                                    <div className="dur-6 stat stat-dur" style={{height: this.state.userProfile.duration_heights[5]}}></div>
                                    <div className="dur-7 stat stat-dur" style={{height: this.state.userProfile.duration_heights[6]}}>
                                        <div className="highest-dur highest-value statline">
                                            <div className="longest-data stats-description">{this.state.userProfile.duration_max} min</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom statline"></div>
                                <div className="numbers-father">
                                    <div className="bottom-placeholder stats-description"></div>
                                    <div className="numbers-boss">
                                        <div className="number stats-x-axis">8</div>
                                        <div className="number stats-x-axis">9</div>
                                        <div className="number stats-x-axis">10</div>
                                        <div className="number stats-x-axis">11</div>
                                        <div className="number stats-x-axis">12</div>
                                        <div className="number stats-x-axis">13</div>
                                        <div className="number stats-x-axis">14</div>
                                    </div>
                                    <div className="bottom-placeholder stats-description"></div>
                                </div>
                            </div>
                            <div className="profile-top-amt">
                                <div className="numbers-boss numbers-headline">
                                    <div className="stats-description stats-headline-description">{this.state.month}</div>
                                    <div className="amt stats-description stats-headline">Drills Amount/week</div>
                                    <div className="stats-description stats-headline-description">Avg {this.state.userProfile.amount_avg_lifetime}</div>
                                </div>
                                <div className="statline top"></div>
                                <div className="amt-bars stats-father">
                                    <div className="amt-1 stat stat-amt" style={{height: this.state.userProfile.amount_heights[0]}}></div>
                                    <div className="amt-2 stat stat-amt" style={{height: this.state.userProfile.amount_heights[1]}}></div>
                                    <div className="amt-3 stat stat-amt" style={{height: this.state.userProfile.amount_heights[2]}}>
                                        <div className="highest-amt highest-value statline">
                                            <div className="longest-data stats-description">{this.state.userProfile.amount_max} drills</div>
                                        </div>
                                    </div>
                                    <div className="amt-4 stat stat-amt" style={{height: this.state.userProfile.amount_heights[3]}}></div>
                                </div>
                                <div className="bottom statline"></div>
                                <div className="numbers-father">
                                    <div className="bottom-placeholder left stats-description">{this.state.previous_month}/{this.state.month}</div>
                                    <div className="amt-dates numbers-boss">
                                        <div className="amt-dates number stats-x-axis">6-12</div>
                                        <div className="amt-dates number stats-x-axis">13-19</div>
                                        <div className="amt-dates number stats-x-axis">20-26</div>
                                        <div className="amt-dates number stats-x-axis">27-2</div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-top-xp">
                                <div className="numbers-boss numbers-headline">
                                    <div className="stats-description stats-headline-description xphead">{this.state.month}</div>
                                    <div className="stats-description stats-headline xpbars">Lvl {this.state.userProfile.workout_level}</div>
                                    <div className="stats-description stats-headline-description xphead">{this.state.userProfile.ep}/{this.state.userProfile.ep_next_level}XP</div>
                                </div>
                                <div className="level-bar-small statline top"></div>
                                <div className="statline top xp-small-bar"></div>
                                <div className="stats-father xp-stats">
                                    <div className="stat stat-xp xp-1" style={{height: this.state.userProfile.ep_heights[0]}} ></div>
                                    <div className="stat stat-xp xp-2" style={{height: this.state.userProfile.ep_heights[1]}}></div>
                                    <div className="stat stat-xp xp-3" style={{height: this.state.userProfile.ep_heights[2]}}></div>
                                    <div className="stat stat-xp xp-4" style={{height: this.state.userProfile.ep_heights[3]}}></div>
                                    <div className="stat stat-xp xp-5" style={{height: this.state.userProfile.ep_heights[4]}}>
                                        <div className="highest-value highest-xp statline">
                                            <div className="longest-data stats-description xp-longest">{this.state.userProfile.ep_max} XP</div>
                                        </div>
                                    </div>
                                    <div className="stat stat-xp xp-6" style={{height: this.state.userProfile.ep_heights[5]}}></div>
                                    <div className="stat stat-xp xp-7" style={{height: this.state.userProfile.ep_heights[6]}}></div>
                                </div>
                                <div className="bottom statline"></div>
                                <div className="numbers-father">
                                    <div className="bottom-placeholder stats-description"></div>
                                    <div className="numbers-boss">
                                        <div className="number stats-x-axis xpstat">8</div>
                                        <div className="number stats-x-axis xpstat">9</div>
                                        <div className="number stats-x-axis xpstat">10</div>
                                        <div className="number stats-x-axis xpstat">11</div>
                                        <div className="number stats-x-axis xpstat">12</div>
                                        <div className="number stats-x-axis xpstat">13</div>
                                        <div className="number stats-x-axis xpstat">14</div>
                                    </div>
                                    <div className="bottom-placeholder stats-description"></div>
                                </div>
                            </div>
                            <div className="profile-bottom stats-bottom xp-bottom">
                                <div className="placeholder stats-tabs"></div>
                                <div className="stats-boss-xp">
                                    <div className="number-of-supervisor stats-slide">
                                        <div className="days-in number">{this.state.userProfile.ep_knowledge}%</div>
                                        <div className="stats-description">knowledge</div>
                                    </div>
                                    <div className="number-of-supervisor stats-slide">
                                        <div className="drills number">{this.state.userProfile.ep_drill}%</div>
                                        <div className="stats-description">drills</div>
                                    </div>
                                    <div className="number-of-supervisor stats-slide">
                                        <div className="drills number">{this.state.userProfile.ep_sharing}%</div>
                                        <div className="stats-description">sharing</div>
                                    </div>
                                </div>
                            </div>
                            <div className="amt-bottom profile-bottom stats-bottom">
                                <div className="placeholder stats-tabs"></div>
                                <div className="stats-boss-amt">
                                    <div className="number-of-supervisor stats-slide">
                                        <div className="days-in number">{this.state.userProfile.amount_total}</div>
                                        <div className="stats-description">total</div>
                                    </div>
                                    <div className="number-of-supervisor stats-slide">
                                        <div className="drills number">{this.state.userProfile.amount_this_week}</div>
                                        <div className="stats-description">this week</div>
                                    </div>
                                    <div className="number-of-supervisor stats-slide">
                                        <div className="drills number">{this.state.userProfile.amount_avg_week}</div>
                                        <div className="stats-description">avg/week</div>
                                    </div>
                                </div>
                            </div>
                            <div className="dur-default-bottom profile-bottom stats-bottom">
                                <div className="stats-tabs">
                                    <div className="stat-button-bg tapped">
                                        <div className="menubar-tapped-dur" data-ix="stats-menubar-dur">DUR</div>
                                        <div className="menubar-tapped-amt" data-ix="stats-menubar-amt">AMT</div>
                                        <div className="menubar-tapped-xp" data-ix="stats-menubar-xp">XP</div>
                                    </div>
                                    <div className="stat-button-bg">
                                        <div className="stats-description stats-menubar">DUR</div>
                                        <div className="stats-description stats-menubar">AMT</div>
                                        <div className="stats-description stats-menubar">XP</div>
                                    </div>
                                </div>
                                <div className="stats-boss-dur">
                                    <div className="number-of-supervisor stats-slide">
                                        <div className="days-in number">{this.state.userProfile.duration_last_drill}</div>
                                        <div className="stats-description">last drill</div>
                                    </div>
                                    <div className="number-of-supervisor stats-slide">
                                        <div className="drills number">{this.state.userProfile.duration_week_avg}</div>
                                        <div className="stats-description">week avg</div>
                                    </div>
                                    <div className="number-of-supervisor stats-slide">
                                        <div className="drills number">{this.state.userProfile.duration_month_avg}</div>
                                        <div className="stats-description">month avg</div>
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


                duration_avg_lifetime: 11,
                duration_max: 12,
                duration_last_drill: 13,
                duration_week_avg: 14,
                duration_month_avg: 15,
                duration_heights: [10,20,30,30,30,30,100],

                amount_avg_lifetime: 2.1,
                amount_max: 22,
                amount_total: 23,
                amount_this_week: 24,
                amount_avg_week: 25,
                amount_heights: [10,20,30,100],

                ep_next_level: 31,
                ep_max: 32,
                ep_knowledge: 33,
                ep_drill: 34,
                ep_sharing: 35,
                ep_heights: [10,20,30,30,30,30,100],
            };
    }
}

export default App;
