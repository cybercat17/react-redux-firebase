export const createProject = (project) => {
  return (dispatch, state, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName : 'Starfish',
      authorLastName : 'Cold',
      createdAt : new Date()
    }).then(() => {
      dispatch({
        type : 'CREATE_PROJECT',
        project : project
      });
    }).catch(err => {
      dispatch({
        type : 'CREATE_PROJECT_ERR',
        err : err
      });
    })
  }
}

export default createProject;