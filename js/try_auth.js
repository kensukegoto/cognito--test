const try_auth = data => {

  const poolData = {
    UserPoolId : "ap-northeast-1_SZaKKAcbu",
    ClientId : "4oo9kqikin0h2kebcpeud9dm65"
  };

  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(data);
  const userData = {
    Username: data.Username,
    Pool: new AmazonCognitoIdentity.CognitoUserPool(poolData)
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails,{

    onSuccess(){
      console.log("成功")
      location.href = "./";
        // cognitoUser.signOut();
        // cognitoUser.globalSignOut();
        // console.log("out");
    },
    onFailure(){
      console.log("失敗")
    }
  
  });





}

