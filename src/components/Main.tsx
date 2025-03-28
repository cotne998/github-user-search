import Result from "./Result";
import Search from "./Search";
import { useState } from "react";
import { IUserData } from "../types";

interface MainProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Main({ darkMode, setDarkMode }: MainProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [user, setUser] = useState<IUserData | undefined>();
  const [userNotFound, setUserNotFound] = useState<boolean>(false);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`
      );

      if (!response.ok) {
        setUserNotFound(true);
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data);
      setUserNotFound(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unexpected error occurred");
      }
    }
  }

  return (
    <>
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        fetchData={fetchData}
        user={user}
        userNotFound={userNotFound}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Result
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fetchData={fetchData}
        user={user}
        setUser={setUser}
      />
    </>
  );
}
