import { RandomIcon, TodoIcon } from "@components/icons";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface MoveToTodoButtonProps {
  random?: boolean;
}

const MoveToTodoButton: React.FC<MoveToTodoButtonProps> = ({ random }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  const handleBlink = (target: HTMLElement) => {
    if (!isBlinking) {
      target.classList.add("blinking-effect");
      setTimeout(() => {
        target.classList.remove("blinking-effect");
        setIsBlinking(false);
      }, 3000);
      setIsBlinking(true);
    }
  };

  const scrollToTodo = () => {
    let targetElement: HTMLElement = null;
    if (random) {
      const todoElements = document.querySelectorAll(".zen-option-TODO");
      if (todoElements.length > 0) {
        const randomIndex = Math.floor(Math.random() * todoElements.length);
        targetElement = todoElements[randomIndex].closest("li") as HTMLElement;
      }
    } else {
      targetElement = document.querySelector(".zen-option-TODO").closest("li");
    }
    if (targetElement) {
      const yOffset = window.innerHeight / 2;
      console.log(yOffset, targetElement.offsetTop);
      window.scrollTo({
        top: targetElement.offsetTop - yOffset,
        left: 0,
        behavior: "smooth",
      });
      handleBlink(targetElement);
    }
  };

  return (
    <Button
      variant="primary"
      style={{
        width: "2.5rem",
        height: "2.5rem",
        padding: "0",
      }}
      className="rounded-circle"
      onClick={scrollToTodo}
    >
      {random ? (
        <RandomIcon height={20} width={20} />
      ) : (
        <TodoIcon height={24} width={24} />
      )}
    </Button>
  );
};

export default MoveToTodoButton;
