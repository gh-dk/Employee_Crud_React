import React, { useRef } from "react";

function AdminLogin() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  function submitForm(e) {
    e.preventDefault();
    if (
      usernameRef.current.value === "admin" &&
      passwordRef.current.value === "admin"
    ) {
      alert("logged in");
    } else {
      alert("invalid credentials");
    }
  }

  return (
    <section className="bg-gray-2 rounded-xl max-w-[600px] mx-auto">
      <div className="p-8 shadow-lg">
      <h2 className="text-lg">Admin login</h2>
        <form onSubmit={submitForm} className="space-y-4">
          <div className="w-full">
            <label className="sr-only" htmlFor="username">
              Username
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="Username"
              type="text"
              id="username"
              ref={usernameRef}
              required
            />
          </div>

          <div className="w-full">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="Password"
              type="password"
              id="password"
              ref={passwordRef}
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="rounded-lg btn btn-primary btn-block"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
