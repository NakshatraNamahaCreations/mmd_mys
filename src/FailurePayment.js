import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import failureImage from "../src/images/failurepage.svg";

const FailurePayment = () => {
  const { service } = useParams(); // ✅ Read service from URL
  const navigate = useNavigate();

  const normalizedService = service
    ? decodeURIComponent(service)
        .trim()
        .replace(/\s+/g, "")
        .toLowerCase()
    : "";

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Payment Failed</title>
      </Helmet>

      <div style={styles.container}>
        <img
          src={failureImage}
          alt="Payment Failed"
          style={styles.failureImage}
        />

        <h1 style={styles.heading}>Payment Failed</h1>

        <p style={styles.message}>
          Unfortunately, your{" "}
          {normalizedService ? normalizedService : "service"} payment was not
          completed successfully.
        </p>

        <button onClick={handleBackToHome} style={styles.retryButton}>
          Back to Home
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  heading: {
    fontSize: "2em",
    color: "#f44336",
  },
  message: {
    fontSize: "1.2em",
    color: "#f44336",
  },
  failureImage: {
    marginTop: "20px",
    width: "280px",
    height: "280px",
  },
  retryButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1em",
    backgroundColor: "#ff9800",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    color: "#fff",
  },
};

export default FailurePayment;
