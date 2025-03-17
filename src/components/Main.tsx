import Result from "./Result";
import Search from "./Search";
import { useState, useEffect } from "react";

interface IUserData {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
}

export default function Main() {
  const [inputValue, setInputValue] = useState<string>("");
  const [user, setUser] = useState<IUserData | undefined>();

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data);
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
        setUser={setUser}
      />
      <Result fetchData={fetchData} user={user} setUser={setUser} />
    </>
  );
}
