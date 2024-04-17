"use client";

function ToggleMenu() {
  function menuBar() {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("hidden");
  }
  return (
    <span
      onClick={menuBar}
      className="text-3xl cursor-pointer flex items-center leading-none"
    >
      <i className="bi bi-list"></i>
    </span>
  );
}

export default ToggleMenu;
