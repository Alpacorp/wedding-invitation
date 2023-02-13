import "./styles.css";

export const VideoIntro = () => {
  return (
    <section className="video">
      <iframe
        height="200"
        src="https://www.youtube.com/embed/tmfA7UfC__Y"
        title="¡Nos casamos y te invitamos a la fiesta!"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};
