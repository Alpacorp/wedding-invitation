import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { transformText } from "../../utils/transformText";

import { apiConfirm } from "../../apis/confirm";

import "./styles.css";
import "../pages-styles.css";

export const Admin = () => {
  const environment: string = import.meta.env.VITE_ENV;
  const local: string = import.meta.env.VITE_LOCAL_URL;
  const prod: string = import.meta.env.VITE_BASE_URL;

  const [url, setUrl] = useState<string>("");
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [guestsList, setGuestsList] = useState<string[]>([]);

  const validateEnv = (): void => {
    if (environment === "development") {
      setBaseUrl(local);
    } else {
      setBaseUrl(prod);
    }
  };

  const handleCleanUrl = () => {
    setUrl("");
  };

  const [formValues, handleInputChange, reset] = useForm({
    inv: "",
    guests: "",
    quantity: "",
  });

  const { inv, guests, quantity } = formValues;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUrl(`${baseUrl}?inv=${inv}&guests=${guests}&quantity=${quantity}`);
    reset();
  };

  const handleViewGuests = async () => {
    await apiConfirm
      .get("/guests")
      .then((res) => setGuestsList(res.data.guests))
      .catch((err) => err);
  };

  useEffect(() => {
    validateEnv();
    handleViewGuests();
  }, []);

  return (
    <section className="admin">
      <div className="admin-form">
        <h2>Formulario de registro de invitados</h2>
        <hr />
        <p>
          El <strong>propósito es registrar</strong> la información que verán
          los invitados en cada una de sus invitaciones.
        </p>
        <p>
          Una vez hayas registrado la información, se{" "}
          <strong>generará una url</strong> que podrás compartir el o los
          invitados.
        </p>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              name="inv"
              id="inv"
              type="number"
              placeholder="Id de la invitación"
              aria-label="Id de la invitación"
              onChange={handleInputChange}
              value={inv}
              required
            />
            <input
              name="guests"
              id="guests"
              type="text"
              placeholder="Nombres de los invitados"
              aria-label="Nombre de los invitados"
              onChange={handleInputChange}
              value={transformText(guests)}
              required
            />
            <input
              name="quantity"
              id="quantity"
              type="number"
              placeholder="Cantidad de invitados"
              aria-label="Cantidad de invitados"
              onChange={handleInputChange}
              value={quantity}
              required
            />
          </div>
          <div className="buttons">
            <button type="submit" title="Enviar" aria-label="Crear url">
              Crear url
            </button>
            <button
              type="reset"
              title="Borrar url"
              onClick={handleCleanUrl}
              aria-label="Borrar url"
            >
              Borrar url
            </button>
          </div>
        </form>
      </div>
      <div className="result">
        {url && (
          <Link
            to={url}
            target="_blank"
            title="Haz click para ver la invitación personalizada"
          >
            {url}
          </Link>
        )}
      </div>
      <div>
        <h2>Lista de invitados</h2>
        <hr />
        <p>
          Aquí podrás ver la lista de invitados registrados en la base de datos
          y que a este momento han confirmado tu invitación.
        </p>
        <p>
          <strong>Nota:</strong> Si no ves la lista de invitados, recarga la
          página o espera unos segundos.
        </p>
        <br />
        {guestsList && (
          <p>
            <strong>Total de invitados confirmados: </strong>
            <span className="quantity-guests">{guestsList.length}</span>
          </p>
        )}
        <hr />
        <p>
          <strong className="detail-guests">Detalle de los invitados</strong>
        </p>
        <br />
        {guestsList &&
          guestsList.map((guest: any) => (
            <div className="guest" key={guest._id}>
              <p>
                <strong>Id: </strong>
                {guest.inv}
              </p>
              <p>
                <strong>Invitados: </strong>
                {guest.guests}
              </p>
              <p>
                <strong>Cantidad: </strong>
                {guest.quantity}
              </p>
              <hr className="line" />
            </div>
          ))}
      </div>
    </section>
  );
};
