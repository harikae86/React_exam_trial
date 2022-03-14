import { useState } from "react";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);

  const subscribe = async (e, payload) => {
    e.preventDefault();
    setLoading(true);
    if (payload === "") {
      alert("input is empty");
    }
    if (payload !== "") {
      payload = { email: payload };
      console.log(payload);
      const url = "https://demoapi.com/api/series/newsletter";
      const body = JSON.stringify(payload);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body,
      }).then((res) => res.json());
      console.log(response);
      setIsSuccessful(true);
      setLoading(false);
      return response;
    }
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {
      setDisabled(false);
      return true;
    }
    setDisabled(true);
    return false;
  };

  const clickHandler = (e, payload, email) => {
    e.preventDefault();
    if (validateEmail(email) === true) {
      subscribe(e, payload);
      setEmail("");

      setTimeout(() => {
        setHidden(true);
      }, 5000);
    }

    if (validateEmail(email) === false) {
      console.log("Email is invalid");
    }
  };

  return (
    <div>
      {!hidden && (
        <div>
          <h1>Subscribe to our newsletter</h1>
          {loading ? (
            <p>Loading</p>
          ) : (
            <form noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
              <button
                onClick={(e) => {
                  clickHandler(e, email, email);
                }}
                disabled={disabled}
              >
                Subscribe
              </button>
            </form>
          )}
          {isSuccessful && <p>Subscirption successful</p>}
        </div>
      )}
    </div>
  );
};

export default Subscription;
