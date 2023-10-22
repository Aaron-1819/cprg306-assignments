import StudentInfo from "../StudentInfo.js";
import ItemList from "./item-list.js";

export default function Home() {
    return (
      <main className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
      <div className=" min-h-screen">
        <ItemList />
      </div>
      </main>
    ); 
  }
  