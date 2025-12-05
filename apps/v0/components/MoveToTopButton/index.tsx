import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function MoveToTopButton() {
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

  const moveToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    visible && (
      <Button
        variant="primary"
        style={{
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
          padding: "0",
        }}
        onClick={moveToTop}
      >
        <span className="fs-4">↑</span>
      </Button>
    )
  );
}
