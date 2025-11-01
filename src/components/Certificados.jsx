const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40px",
  color: "#555",
  border: "2px solid #555",
  borderRadius: "10px",
  padding: "5px",
  margin: "5px",
  textDecoration: "none",
  backgroundColor: "#f0f0f0",
  marginTop: "40px",
};

export default function Certificados() {
  return (
    <a href="https://drive.google.com/drive/folders/126KGYipA-1ZOapxk-E1LbSUjNg11qwM9?usp=drive_link" target="_blank" rel="noopener noreferrer">
      <div style={style}>Certificaciones</div>
    </a>
  );
}
