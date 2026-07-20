const Profile = () => {

  const email = localStorage.getItem("email");

  return (

    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="border rounded-xl p-8 shadow">

        <h2 className="text-2xl font-bold mb-4">
          User Information
        </h2>

        <p className="text-lg">
          <b>Email :</b> {email}
        </p>

      </div>

    </div>

  );

};

export default Profile;