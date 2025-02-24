import { RandomIcon, TodoIcon } from "@components/icons";
import React from "react";
import { Button } from "react-bootstrap";

interface MoveToTodoButtonProps {
  random?: boolean;
}

const MoveToTodoButton: React.FC<MoveToTodoButtonProps> = ({ random }) => {
  const scrollToTodo = () => {
    let targetElement: HTMLElement = null;
    if (random) {
      const todoElements = document.querySelectorAll(".zen-option-TODO");
      if (todoElements.length > 0) {
        const randomIndex = Math.floor(Math.random() * todoElements.length);
        targetElement = todoElements[randomIndex] as HTMLElement;
      }
    } else {
      targetElement = document.querySelector(".zen-option-TODO");
    }
    if (targetElement) {
      const yOffset = window.innerHeight / 2;
      console.log(yOffset, targetElement.offsetTop);
      window.scrollTo({
        top: targetElement.offsetTop - yOffset,
        left: 0,
        behavior: "smooth",
      });
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
