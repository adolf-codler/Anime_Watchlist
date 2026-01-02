import { useState } from "react";

function Gpp() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Toggle</button>

      {visible && <div>Hello 👋</div>}
    </>
  );
}
export default Gpp;
