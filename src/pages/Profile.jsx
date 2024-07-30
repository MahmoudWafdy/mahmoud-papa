import { useUser } from "../components/UserContext";

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="w-full h-full p-5 md:p-10 text-xs md:text-base">
      <h2 className="font-semibold text-secondary">Edit You Profile</h2>
      <form action="" className="grid grid-cols-2 gap-2 mt-3">
        <label htmlFor="firstName" className="col-span-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder={user ? user.displayName : "mohamed"}
          className="col-span-2  md:col-1 md:row-start-2 md:row-end-3 bg-gray-100 p-2 outline-none"
        ></input>
        <label htmlFor="lastName" className="col-span-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Ali"
          className="col-span-2 md:col-2 md:row-start-2 md:row-end-3 bg-gray-100 p-2 outline-none"
        ></input>
        <label htmlFor="Email" className="col-span-2">
          Email
        </label>
        <input
          type="text"
          id="Email"
          placeholder={user ? user.email : "email"}
          className="col-span-2 md:col-1 md:row-start-4 md:row-end-5 bg-gray-100 p-2 outline-none"
        ></input>
        <label htmlFor="lastName" className="col-span-2">
          Address
        </label>
        <input
          type="text"
          id="Address"
          placeholder="Kingston, 5236, United State"
          className="col-span-2 md:col-2 md:row-start-4 md:row-end-5 bg-gray-100 p-2 outline-none"
        ></input>
        <label htmlFor="lastName" className="col-span-2 md:col-span-4">
          Passwaord Changes
        </label>
        <input
          type="text"
          id="Address"
          placeholder="Current Passwod"
          className="col-span-2 md:col-span-4 bg-gray-100 p-2 outline-none"
        ></input>
        <input
          type="text"
          id="Address"
          placeholder="New Passwod"
          className="col-span-2 md:col-span-4 bg-gray-100 p-2 outline-none"
        ></input>
        <input
          type="text"
          id="Address"
          placeholder="Confirm New Passwod"
          className="col-span-2 md:col-span-4 bg-gray-100 p-2 outline-none"
        ></input>
        <div className="col-span-2 md:col-span-4 flex justify-end gap-1 mt-3">
          <button className="font-medium h-10 w-32 rounded hover:bg-secondary hover:text-white transition-all duration-300 ">
            Cancel
          </button>
          <button className="font-medium h-10 w-32 bg-secondary rounded text-white hover:bg-white hover:text-black transition-all duration-300 ">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
