const mapStateToProps = (rootStore) => {
    const { auth } = rootStore;
    return {
      auth,
    };
  };
  
  export default mapStateToProps;