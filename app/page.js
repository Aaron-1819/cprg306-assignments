
import Link from "next/link";
import StudentInfo from "./StudentInfo.js";


export default function Home() {
  const weekDemos = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];
  const doneUpTo = 4;
  return (
    <main className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
    <div className=" min-h-screen">
      <h1>CPRG 306: Web Development 2 - Assignments</h1> 
      <StudentInfo />
      <div className="text-lg">
          <ul>
            {weekDemos.map((week) =>
              week <= doneUpTo ? (
                <li key={week} className="hover:text-green-400 hover:underline">
                  <Link href={`/week${week}`}>Week {week} </Link>
                </li>
              ) : (
                <li key={week}>🚧 Week {week}</li>
              )
            )}
          </ul>
        </div>
    </div>
    </main>
  ); 
}
