import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="m-auto bg-red-300 p-8 rounded-full">
        <h3 className="text-xl">
            Meme Generator
        </h3> 
        <div className="w-full">
          <p>
            This is where the Meme will show up 
          </p>
          
          <div className="flex items-center justify-center">
            <Button className=""variant="contained" color="success">
                Generate Meme
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
