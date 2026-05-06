import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <button onClick={() => navigate("/")}>
        ← Back
      </button>
      <h1>Book Your Surf Lesson</h1>

      <iframe
        src="https://cal.com/juliana-buckle-mhz9qe"
        width="100%"
        height="800px"
        style={{ border: "none", marginTop: "20px" }}
      />
    </div>
  );
}

export default Booking;