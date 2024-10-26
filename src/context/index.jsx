import React, { createContext, useCallback, useContext, useState } from "react";

import { db } from "../utils/dbConfig";
import { Users, Records } from "../utils/Schema";
import { eq } from "drizzle-orm";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      const results = await db.select().from(Users).execute();
      setUsers(results);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  }, []);

  const fetchUserByEmail = useCallback(async (email) => {
    try {
      const result = await db
        .select()
        .from(Users)
        .where(eq.Users.createdBy, email);

      if (result.length > 0) {
        setCurrentUser(result(0));
      }
    } catch (error) {
      console.error("Error fetching user by email", error);
    }
  }, []);

  const createUser = useCallbac(async (userData) => {
    try {
      const newUser = await db
        .insert(Users)
        .values(userData)
        .returning()
        .execute();
      setUsers((prevUsers) => [...prevUsers, newUser[0]]);
    } catch (error) {
      console.error("Error creating user", error);
      return null;
    }
  }, []);
};
