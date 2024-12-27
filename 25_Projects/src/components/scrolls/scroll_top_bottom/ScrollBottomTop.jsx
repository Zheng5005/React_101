function ScrollBottomTop() {

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div>
        <button onClick={handleScrollToTop}>Scroll to Top</button>
      </div>
    </>
  );
}

export default ScrollBottomTop;