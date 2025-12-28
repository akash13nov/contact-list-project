import { useState } from "react";
const ContactList = () => {
  const [name, setName] = useState("");
  const [mobNum, setMobNum] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [allUsers, setallUsers] = useState([]);

  const formHandler = (event) => {
    event.preventDefault();

    setallUsers([...allUsers, { name, mobNum, email, url }]);
    setName("");
    setMobNum("");
    setEmail("");
    setUrl("");
  };
  return (
    <div className="contact-wrapper w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold mb-8">Add Contact List</h1>
      <div
        className="container flex items-center justify-center gap-5 w-[700px] bg-[#dad9db4b] p-[30px] rounded-[10px]
         shadow-[0_0_16px_#d3d3d3]"
      >
        <div className="form-wrapper size-full">
          <form
            onSubmit={(event) => {
              formHandler(event);
            }}
            className="flex flex-col "
          >
            <div className="flex flex-col mb-5 box">
              <label className="text-gray-500 mb-2">Name</label>
              <input
                className="w-xs h-[42px] p-2 border border-[#d3d3d3] rounded placeholder-black placeholder-opacity-100"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col mb-5 box">
              <label className="text-gray-500 mb-2">Mob no.</label>
              <input
                className="w-xs h-[42px] p-2 border border-[#d3d3d3] rounded placeholder-black placeholder-opacity-100"
                type="text"
                placeholder="Enter Mobile Number"
                value={mobNum}
                onChange={(e) => {
                  setMobNum(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col mb-5 box">
              <label className="text-gray-500 mb-2">Email</label>
              <input
                className="w-xs h-[42px] p-2 border border-[#d3d3d3] rounded placeholder-black placeholder-opacity-100"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col mb-5 box">
              <label className="text-gray-500 mb-2">Image</label>
              <input
                className="w-xs h-[42px] p-2 border border-[#d3d3d3] rounded placeholder-black placeholder-opacity-100"
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col mt-2 mb-2 box">
              <button className="bg-violet-700 text-white text-2xl rounded border-0 p-2 active:scale-95">
                Add List
              </button>
            </div>
          </form>
        </div>

        <div className="list-wrapper size-full flex flex-col items-center justify-start overflow-auto max-h-[465px]">
          {allUsers.map((elem, idx) => {
            return (
              <div
                className="list w-full flex items-center gap-4 mb-5 bg-violet-50 rounded-full border-2 border-[#b2b2b2] p-1.5 shadow-[0_0_16px_#d3d3d3]"
                key={idx}
              >
                <img
                  className="rounded-full w-[80px] h-[80px] object-cover object-top"
                  src={elem.url}
                />
                <div className="w-[70%] flex flex-col flx-1">
                  <h1>{elem.name}</h1>
                  <h3>{elem.mobNum}</h3>
                  <h1>{elem.email}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
