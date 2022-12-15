const Alerta = ({alerta}) => {
  console.log(alerta);
  return (
    <div className={`${alerta.error ? 'from-red-600 to-red-800' : 'from-sky-400 to-sky-600'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10 `}>
        {alerta.msg}
    </div>
  )
}

export default Alerta