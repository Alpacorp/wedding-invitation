import "./styles.css";

export const VideoIntro = () => {
  return (
    <section className="video">
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/Zw_IigNMVkY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};
