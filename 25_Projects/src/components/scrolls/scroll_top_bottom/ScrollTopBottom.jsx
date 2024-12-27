function ScrollTopBottom({reference}) {

  function handleScrollToBottom() {
    reference.current.scrollIntoView({ behavior: "smooth" });
    console.log(reference)
  }

  return (
    <>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
    </>
  );
}

export default ScrollTopBottom;
