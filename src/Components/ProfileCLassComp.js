import React from "react";

// imp step 1
class ProfileClass extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  constructor(props) {
    super(props);
    // initialising the state and is a object
    this.state = {
      Githubprofile: {},
      increase: 0,
      decrease: 0,
      count: 0,
      count2: 0,
    };
    console.log("contructor", this.props.name); // first called
  }

  // step 3 maunting / api call / called after the first
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mayuresh1007");
    const json = await data.json();
    this.setState({ Githubprofile: json });
    console.log("component-Did-Mount", this.props.name); // third called
    this.timer= setInterval(() => {
      console.log("setinterval in profile class compo")
    }, 1000);
  }

  // step -4 updating / called after every next render

  componentDidUpdate() {
    
    console.log("component-Did-Update called after every next render");
  }
  // advanced concept how the compoDidUdate is same for calling the dependency array in useEffect in fun compo
  /*
    useEffect(()=>{cnsl.log(count,count2)},[count,count2])
    */
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.count !== prevState) {
  //     // code something
  //   }
  //   if (this.state.count2 !== prevState) {
  //     // code something
  //   }
  //   console.log("component-Did-Update called after every next render");
  // }
  // step 5 - componentWillUnmout()
  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("component-Will-Unmount");
  }

  // imp step 2
  render() {
    console.log("render", this.props.name); // secont called
    return (
      <>
        {/* <hr />
        <h3>Class based profile component</h3>
        <p>{this.props.name} : from class component</p>
        <button
          onClick={() => {
            this.setState({
              increase: this.state.increase + 1,
            });
          }}
        >
          increase
        </button>
        <p>{this.state.increase}</p>

        <button
          onClick={() => {
            this.setState({
              decrease: this.state.decrease - 1,
            });
          }}
        >
          decrease
        </button>
        <p>{this.state.decrease}</p>
        <hr /> */}
        <div className="profile">
          <h1>{this.state.Githubprofile.name}</h1>
          <img src={this.state.Githubprofile.avatar_url} alt="image" />
          <p>{this.state.Githubprofile.bio}</p>
        </div>
      </>
    );
  }
}

export default ProfileClass;

/**
 *
 *
 *
 *
 *
 */
