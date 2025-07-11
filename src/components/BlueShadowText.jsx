const BlueShadowText = ({ text, size }) => {
  return (
    <p className={`mt-8 mb-5 text-cyan-400 text-shadow-inherit [text-shadow:_5px_2px_5px_#85d0ff] ${ size ? size : "text-2xl" }`}> { text }</p>
  )
}

export default BlueShadowText;