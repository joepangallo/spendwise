import React from "react";
import { View, Text, FlatList } from "react-native";
import tw from "twrnc";
const tailwind = (...args) => tw.style(...args);

import EmptyList from "../components/EmptyList";
import ExpenseItemCard from "../components/ExpenseItemCard";

export const expensesData = [
  {
    id: "1",
    title: "Food",
    amount: 20,
    category: "Food",
    date: "2026-02-04",
    color: "#f87171",
  },
  {
    id: "2",
    title: "Transport",
    amount: 15,
    category: "Transport",
    date: "2026-02-03",
    color: "#34d399",
  },
  {
    id: "3",
    title: "Shopping",
    amount: 50,
    category: "Shopping",
    date: "2026-02-02",
    color: "#60a5fa",
  },
];

const Home = () => {
  const totalSpent = expensesData.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <View style={tailwind("flex-1 bg-white")}>
  
      <View style={tailwind("px-5 pt-5 pb-3")}>
        <Text style={tailwind("text-4xl font-bold text-black")}>
          Welcome back 👋
        </Text>
        <Text style={tailwind("text-base text-gray-500 mt-1")}>
          Here's a summary of your expenses.
        </Text>
      </View>

   
      <View
        style={tailwind(
          "bg-black rounded-3xl p-6 my-5 mx-5 items-center"
        )}
      >
        <Text style={tailwind("text-base text-gray-400")}>
          Spent so far
        </Text>
        <Text style={tailwind("text-2xl font-bold text-white")}>
          ${totalSpent}
        </Text>
      </View>

 
      <FlatList
        data={expensesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseItemCard item={item} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};

export default Home;