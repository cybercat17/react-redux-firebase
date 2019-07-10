const initState = {
  projects : [
    { id : '1', title : 'Arduino Optimization', content : 'Optimizing SPN crypto algorithm and test using the Arduino platform'},
    { id : '2', title : 'Deep Learning with Kaggle', content : 'Register and Run a competition on Kaggle that will lift my AI programming skills'},
    { id : '3', title : 'Becoming a Full Stack Developer', content : 'Learning Django, React, Redux and Firebase to become a full stack developer'}
  ]
}

const projectReducer = (state=initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer;