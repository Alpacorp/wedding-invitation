import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { transformText } from "../../utils/transformText";

export const Admin = () => {
  const environment: string = import.meta.env.VITE_ENV;
  const local: string = import.meta.env.VITE_LOCAL_URL;
  const prod: string = import.meta.env.VITE_BASE_URL;

  const [url, setUrl] = useState<string>("");
  const [baseUrl, setBaseUrl] = useState<string>("");

  const validateEnv = (): void => {
    if (environment === "development") {
      setBaseUrl(local);
    } else {
      setBaseUrl(prod);
    }
  };

  const [formValues, handleInputChange, reset] = useForm({
    guests: "",
    quantity: "",
  });

  const { guests, quantity } = formValues;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUrl(`${baseUrl}?guests=${guests}&quantity=${quantity}`);
    reset();
  };

  useEffect(() => {
    validateEnv();
  }, []);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          name="guests"
          id="guests"
          type="text"
          placeholder="Invitados"
          onChange={handleInputChange}
          value={transformText(guests)}
        />
        <input
          name="quantity"
          id="quantity"
          type="number"
          placeholder="Cantidad"
          onChange={handleInputChange}
          value={quantity}
        />
        <input type="submit" />
      </form>

      {url && (
        <Link to={url} target="_blank">
          {url}
        </Link>
      )}
    </section>
  );
};
