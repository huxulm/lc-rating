import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    );
    const handleScroll = () =>
      setVisible(
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      );
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    visible && (
      <Button
        variant="primary"
        style={{
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
          fontSize: "1.5rem",
          padding: "0",
        }}
        onClick={backToTop}
      >
        ↑
      </Button>
    )
  );
}
