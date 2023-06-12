export const upForm = async () => {
    try {
      const response = await axios.post(
        "https://flask-production-fc0d.up.railway.app/login",
        {
          user,
          password,
        }
      );
      if (response.data){
        navigate('/dashboard')
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setLoginError("Error de conexion");
    }
  };