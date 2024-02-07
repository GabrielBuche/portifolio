import { useTheme } from "../../context/theme"

function App() {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={() => toggleTheme()}>theme</button>
   
    </div>
  )
}

export default App
